// Uploads the mini projects in content/projects to Firestore (projects/{id}) and Storage.
//
//   node scripts/upload-projects.mjs --dry-run          check every project folder, write nothing
//   node scripts/upload-projects.mjs                    upload; new projects arrive as drafts
//   node scripts/upload-projects.mjs --publish          upload and publish them straight away
//   node scripts/upload-projects.mjs --only <id>        one project only
//
// One folder per project, named by its id (the URL slug):
//
//   content/projects/student-attendance-manager/
//     project.json     title, summary, overview, features, tech, level, programIds, branchIds,
//                      semesters, subjectCodes, buildTime, sampleViva, documents, download, screenshots
//     synopsis.pdf …   every file named in documents (PDFs, opened in the read-only reader)
//     <name>.zip       the download: code, editable report and slides (buyers only)
//     preview/*.png    screenshots named in screenshots (shown free on the project page)
//
// Safe to re-run: it replaces the project's files and details. The price and published switch
// are set in the admin panel (Mini projects tab) and kept, unless --publish is given.
// Needs FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY, NEXT_PUBLIC_FIREBASE_PROJECT_ID and
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET (.env).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cert, initializeApp } from 'firebase-admin/app';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const projectsDir = path.join(root, 'content/projects');
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const publish = args.includes('--publish');
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;

// Keep in sync with DEFAULT_PROJECT_PRICE in lib/projects/types.ts
const DEFAULT_PRICE = 49;
const LEVELS = ['easy', 'medium', 'hard'];
const IMAGE_TYPES = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp' };

// ---- Read and check the project folders -----------------------------------------

if (!fs.existsSync(projectsDir)) fail('No content/projects folder.');
const projects = [];
const problems = [];

for (const entry of fs.readdirSync(projectsDir, { withFileTypes: true })) {
  if (!entry.isDirectory() || (only && entry.name !== only)) continue;
  const dir = path.join(projectsDir, entry.name);
  const jsonPath = path.join(dir, 'project.json');
  if (!fs.existsSync(jsonPath)) continue;

  const id = entry.name;
  const report = (message) => problems.push(`${id}: ${message}`);
  let data;
  try {
    data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  } catch (error) {
    report(`project.json is not valid JSON (${error.message})`);
    continue;
  }

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) report('folder name must be lower-case words joined by hyphens');
  if (!Number.isInteger(data.number)) report('number is missing');
  if (!data.title) report('title is missing');
  if (!data.summary) report('summary is missing');
  if (!LEVELS.includes(data.level)) report(`level must be one of ${LEVELS.join(', ')}`);
  if (!Array.isArray(data.programIds) || data.programIds.length === 0) report('programIds is missing');
  const documents = Array.isArray(data.documents) ? data.documents : [];
  if (documents.length === 0) report('documents is empty');

  const files = [];
  const addFile = (relative, contentType) => {
    const full = path.join(dir, relative);
    if (!fs.existsSync(full)) {
      report(`missing file ${relative}`);
      return null;
    }
    const file = { full, storagePath: `projects/${id}/${relative.replace(/\\/g, '/')}`, contentType, sizeBytes: fs.statSync(full).size };
    files.push(file);
    return file;
  };

  const storedDocuments = documents.map((doc) => {
    if (!doc.id || !doc.title || !doc.file?.endsWith('.pdf')) report('each document needs id, title and a .pdf file');
    const file = doc.file ? addFile(doc.file, 'application/pdf') : null;
    return { id: doc.id, title: doc.title, free: doc.free === true, storagePath: file?.storagePath ?? null, fileName: doc.file, sizeBytes: file?.sizeBytes ?? null };
  });

  let download = null;
  if (data.download?.file) {
    if (!data.download.file.endsWith('.zip')) report('download.file must be a .zip');
    const file = addFile(data.download.file, 'application/zip');
    download = {
      storagePath: file?.storagePath ?? null,
      fileName: data.download.file,
      sizeBytes: file?.sizeBytes ?? null,
      contents: Array.isArray(data.download.contents) ? data.download.contents : [],
    };
  }

  const screenshots = (Array.isArray(data.screenshots) ? data.screenshots : []).map((shot) => {
    const type = IMAGE_TYPES[shot.file?.split('.').pop()?.toLowerCase()];
    if (!type) report(`screenshot ${shot.file} must be png, jpg or webp`);
    else addFile(`preview/${shot.file}`, type);
    return { file: shot.file, caption: shot.caption ?? '' };
  });

  projects.push({
    id,
    files,
    record: {
      number: data.number,
      title: data.title,
      summary: data.summary,
      overview: data.overview ?? [],
      features: data.features ?? [],
      tech: data.tech ?? [],
      level: data.level,
      programIds: data.programIds ?? [],
      branchIds: data.branchIds ?? [],
      semesters: data.semesters ?? [],
      subjectCodes: (data.subjectCodes ?? []).map((code) => code.toUpperCase()),
      buildTime: data.buildTime ?? '',
      sampleViva: data.sampleViva ?? [],
      documents: storedDocuments,
      download,
      screenshots,
      // Every project here is written and built with AI; the site labels it for students
      aiGenerated: true,
    },
  });
}

if (problems.length) fail(`Fix these first:\n  ${problems.join('\n  ')}`);
if (projects.length === 0) fail(only ? `No project folder named ${only} with a project.json.` : 'No project folders with a project.json found.');

if (dryRun) {
  for (const project of projects) {
    const megabytes = project.files.reduce((sum, f) => sum + f.sizeBytes, 0) / (1024 * 1024);
    console.log(`ok  #${project.record.number} ${project.id}: ${project.files.length} files, ${megabytes.toFixed(1)} MB`);
  }
  console.log(`Dry run, nothing written. ${projects.length} project(s) ready to upload.`);
  process.exit(0);
}

// ---- Upload ---------------------------------------------------------------------

try {
  process.loadEnvFile(path.join(root, '.env'));
} catch {
  // Fall back to variables already in the environment
}
const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const storageBucket = process.env.FIREBASE_STORAGE_BUCKET || process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
if (!projectId || !clientEmail || !privateKey || !storageBucket) {
  fail('Set FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY, NEXT_PUBLIC_FIREBASE_PROJECT_ID and NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET in .env first.');
}
const app = initializeApp({ credential: cert({ projectId, clientEmail, privateKey }), storageBucket });
const db = getFirestore(app);
const bucket = getStorage(app).bucket();

for (const project of projects) {
  for (const file of project.files) {
    await bucket.upload(file.full, { destination: file.storagePath, contentType: file.contentType, resumable: file.sizeBytes > 5 * 1024 * 1024 });
  }

  // Drop files an earlier upload left behind (renamed or removed since)
  const keep = new Set(project.files.map((f) => f.storagePath));
  const [existing] = await bucket.getFiles({ prefix: `projects/${project.id}/` });
  await Promise.all(existing.filter((f) => !keep.has(f.name)).map((f) => f.delete({ ignoreNotFound: true })));

  const ref = db.collection('projects').doc(project.id);
  const isNew = !(await ref.get()).exists;
  await ref.set(
    {
      ...project.record,
      ...(isNew ? { price: DEFAULT_PRICE, published: publish, createdAt: FieldValue.serverTimestamp() } : {}),
      ...(publish ? { published: true } : {}),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  console.log(`${isNew ? 'added' : 'updated'} #${project.record.number} ${project.id}${isNew && !publish ? ' (draft)' : ''}`);
}

console.log(
  `Uploaded ${projects.length} project(s).` +
    (publish ? '' : ' Publish drafts in the admin panel, Mini projects tab.') +
    ' Public pages refresh within a day, or straight away after any save in the admin panel.'
);

function fail(message) {
  console.error(message);
  process.exit(1);
}

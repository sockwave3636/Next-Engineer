// Loads the AKTU catalog in lib/catalog/seed into Firestore: programs, branches and subjects.
//
//   npm run seed:catalog -- --dry-run      check the data and show what would change
//   npm run seed:catalog                   write it
//   npm run seed:catalog -- --program mba  one program only
//
// Safe to re-run. Programs and branches are only created when missing, so edits made in the
// admin panel stay. Existing subjects get their catalog fields (code, name, credits, type, group,
// semesters) refreshed; their passes, material counts, unit titles and descriptions are kept.
// Needs FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY and NEXT_PUBLIC_FIREBASE_PROJECT_ID (.env).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cert, initializeApp } from 'firebase-admin/app';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const seedDir = path.join(root, 'lib/catalog/seed');
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const onlyProgram = args.includes('--program') ? args[args.indexOf('--program') + 1] : null;

// Same rules as lib/catalog/types.ts
const ALL_BRANCHES = '*';
const DEFAULT_BRANCH_ID = 'all';
const KINDS = ['theory', 'practical', 'project', 'elective'];
const slugify = (text) =>
  text.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
const subjectIdFromCode = (code) => code.toLowerCase().replace(/[^a-z0-9]/g, '');
const offeringKey = (programId, branchId, semester) => `${programId}|${branchId}|${semester}`;

const readJson = (file) => JSON.parse(fs.readFileSync(path.join(seedDir, file), 'utf8'));

// ---- Build and validate everything before touching Firestore ---------------

const catalog = readJson('programs.json');
const programs = catalog.programs.filter((p) => !onlyProgram || p.id === onlyProgram);
if (programs.length === 0) fail(`Unknown program "${onlyProgram}".`);

const subjects = new Map(); // id -> subject document
const problems = [];

for (const program of programs) {
  const file = `${program.id}.json`;
  if (!fs.existsSync(path.join(seedDir, file))) continue; // e.g. M.Tech: no published AKTU scheme
  const data = readJson(file);
  const branchIds = new Set((catalog.branches[program.id] ?? []).map((b) => b.id));
  const sets = data.branchSets ?? {};
  const slugs = new Set();

  for (const [semesterKey, rows] of Object.entries(data.semesters)) {
    const semester = Number(semesterKey);
    if (!(semester >= 1 && semester <= program.semesters)) problems.push(`${file}: semester ${semesterKey} is outside 1-${program.semesters}`);

    for (const row of rows) {
      const where = `${file} sem ${semester} ${row.code}`;
      const code = (row.code ?? '').trim().toUpperCase();
      const name = (row.name ?? '').trim();
      const kind = row.kind ?? 'theory';
      if (!code || !name) problems.push(`${where}: needs a code and a name`);
      if (!KINDS.includes(kind)) problems.push(`${where}: unknown kind "${kind}"`);
      if (!(typeof row.credits === 'number' && row.credits >= 0)) problems.push(`${where}: credits must be a number`);
      if (kind === 'elective' && !row.group) problems.push(`${where}: electives need a group`);

      // Branch tokens: a branch id, a set from branchSets, or nothing for "every branch"
      let branches = [DEFAULT_BRANCH_ID];
      if (program.hasBranches) {
        branches = (row.branches ?? [ALL_BRANCHES]).flatMap((token) => sets[token] ?? [token]);
        for (const b of branches) {
          if (b !== ALL_BRANCHES && !branchIds.has(b)) problems.push(`${where}: unknown branch "${b}"`);
        }
      }

      const id = row.id ?? subjectIdFromCode(code);
      const offerings = [...new Set(branches)].map((branchId) => ({ branchId, semester }));
      const existing = subjects.get(id);
      if (existing) {
        // The same code listed in another semester just adds offerings
        if (existing.programId !== program.id || existing.name !== name) {
          problems.push(`${where}: id "${id}" is already used by ${existing.programId} ${existing.code} (${existing.name}); give one an explicit "id"`);
          continue;
        }
        existing.offerings.push(...offerings);
        existing.offeringKeys.push(...offerings.map((o) => offeringKey(program.id, o.branchId, o.semester)));
        continue;
      }

      const slug = slugify(`${code} ${name}`);
      if (slugs.has(slug)) problems.push(`${where}: duplicate slug "${slug}"`);
      slugs.add(slug);

      subjects.set(id, {
        code,
        name,
        slug,
        credits: row.credits,
        kind,
        group: row.group ?? '',
        programId: program.id,
        offerings,
        offeringKeys: offerings.map((o) => offeringKey(program.id, o.branchId, o.semester)),
      });
    }
  }
}

if (problems.length > 0) fail(`The seed data has ${problems.length} problem(s):\n  ${problems.join('\n  ')}`);

const perProgram = {};
for (const s of subjects.values()) perProgram[s.programId] = (perProgram[s.programId] ?? 0) + 1;
console.log(`Checked ${subjects.size} subjects: ${Object.entries(perProgram).map(([p, n]) => `${p} ${n}`).join(', ')}`);

// ---- Write ------------------------------------------------------------------

try {
  process.loadEnvFile(path.join(root, '.env'));
} catch {
  // Fall back to variables already in the environment
}
const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
if (!projectId || !clientEmail || !privateKey) {
  fail('Set FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY and NEXT_PUBLIC_FIREBASE_PROJECT_ID in .env first.');
}
const db = getFirestore(initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) }));

const writes = [];
let createdPrograms = 0;
let createdBranches = 0;

for (const program of programs) {
  const { id, ...fields } = program;
  const programRef = db.collection('programs').doc(id);
  if (!(await programRef.get()).exists) {
    writes.push((batch) => batch.set(programRef, { ...fields, active: true }));
    createdPrograms++;
  }
  const branches = program.hasBranches
    ? catalog.branches[id].map((b, i) => ({ id: b.id, name: b.name, shortName: b.shortName, order: i + 1 }))
    : [{ id: DEFAULT_BRANCH_ID, name: program.fullName, shortName: program.name, order: 1 }];
  const existingBranches = new Set((await programRef.collection('branches').get()).docs.map((d) => d.id));
  for (const { id: branchId, ...branch } of branches) {
    if (existingBranches.has(branchId)) continue;
    writes.push((batch) => batch.set(programRef.collection('branches').doc(branchId), { ...branch, active: true }));
    createdBranches++;
  }
}

const existingSubjects = new Set((await db.collection('subjects').select().get()).docs.map((d) => d.id));
let createdSubjects = 0;
let updatedSubjects = 0;
for (const [id, subject] of subjects) {
  const ref = db.collection('subjects').doc(id);
  if (existingSubjects.has(id)) {
    writes.push((batch) => batch.set(ref, { ...subject, updatedAt: FieldValue.serverTimestamp() }, { merge: true }));
    updatedSubjects++;
  } else {
    writes.push((batch) =>
      batch.set(ref, {
        ...subject,
        unitTitles: [],
        description: '',
        resourceCounts: {},
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      })
    );
    createdSubjects++;
  }
}

const summary = `${createdPrograms} new program(s), ${createdBranches} new branch(es), ${createdSubjects} new subject(s), ${updatedSubjects} subject(s) refreshed`;
if (dryRun) {
  console.log(`Dry run, nothing written. Would write: ${summary}.`);
  process.exit(0);
}

// Firestore batches hold up to 500 writes
for (let i = 0; i < writes.length; i += 400) {
  const batch = db.batch();
  writes.slice(i, i + 400).forEach((write) => write(batch));
  await batch.commit();
}
console.log(`Done: ${summary}.`);
console.log('Public pages refresh within an hour, or straight away after any save in the admin panel.');

function fail(message) {
  console.error(message);
  process.exit(1);
}

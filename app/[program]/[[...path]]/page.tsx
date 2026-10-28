import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageShell from '@/app/components/PageShell';
import ProgramView from '@/app/components/catalog/ProgramView';
import BranchView from '@/app/components/catalog/BranchView';
import SemesterView from '@/app/components/catalog/SemesterView';
import SubjectView from '@/app/components/catalog/SubjectView';
import type { PassOption } from '@/app/components/PassOptions';
import {
  getBranch,
  getMaterialLocked,
  getProgram,
  getProgramSubjects,
  getResources,
  getSemesterSubjects,
  getSubjectBySlug,
  getVisibleBranches,
  subjectOfferedIn,
} from '@/lib/catalog/server';
import { canonicalSubjectPath, resolvePath, semesterLabel, semesterPath, branchPath, programPath } from '@/lib/catalog/routes';
import { Branch, DEFAULT_BRANCH_ID, Program, Subject, semesterPassOf } from '@/lib/catalog/types';

// Pages are cached; admin edits expire the 'catalog' cache tag through /api/revalidate
export const revalidate = 3600;

type Params = Promise<{ program: string; path?: string[] }>;

function semesterPassOption(program: Program, branch: Branch, semester: number): PassOption[] {
  const pass = semesterPassOf(branch, semester);
  if (!pass?.enabled) return [];
  const label = program.hasBranches ? `${program.name} ${branch.shortName}` : program.name;
  return [
    {
      scope: { type: 'semester', programId: program.id, branchId: branch.id, semester },
      title: `All of ${semesterLabel(semester)}`,
      description: `Every premium note and book in ${semesterLabel(semester)} of ${label}.`,
      pass,
    },
  ];
}

function subjectPassOptions(program: Program, branch: Branch, semester: number, subject: Subject): PassOption[] {
  const options: PassOption[] = [];
  if (subject.pass?.enabled) {
    options.push({
      scope: { type: 'subject', subjectId: subject.id },
      title: 'This subject',
      description: `All premium material for ${subject.code} ${subject.name}.`,
      pass: subject.pass,
    });
  }
  return [...options, ...semesterPassOption(program, branch, semester)];
}

async function loadBranch(program: Program, branchId: string): Promise<Branch> {
  // The hidden 'all' branch only exists for branchless programs
  if (program.hasBranches && branchId === DEFAULT_BRANCH_ID) notFound();
  const branch = await getBranch(program, branchId);
  if (!branch) notFound();
  return branch;
}

// Resolves the URL to the data its view needs (shared by the page and its metadata)
async function loadPage(params: Params) {
  const { program: programId, path = [] } = await params;
  const program = await getProgram(programId);
  if (!program) notFound();

  const route = resolvePath(program, path);
  switch (route.kind) {
    case 'program': {
      if (!program.hasBranches) {
        const branch = await loadBranch(program, DEFAULT_BRANCH_ID);
        return { kind: 'branch' as const, program, branch, subjects: await getProgramSubjects(program.id) };
      }
      const [branches, subjects] = await Promise.all([getVisibleBranches(program), getProgramSubjects(program.id)]);
      return { kind: 'program' as const, program, branches, subjects };
    }
    case 'branch': {
      const branch = await loadBranch(program, route.branchId);
      return { kind: 'branch' as const, program, branch, subjects: await getProgramSubjects(program.id) };
    }
    case 'semester': {
      const branch = await loadBranch(program, route.branchId);
      const subjects = await getSemesterSubjects(program.id, branch.id, route.semester);
      return { kind: 'semester' as const, program, branch, semester: route.semester, subjects };
    }
    case 'subject': {
      const branch = await loadBranch(program, route.branchId);
      const subject = await getSubjectBySlug(program.id, route.subjectSlug);
      if (!subject || !subjectOfferedIn(subject, branch.id, route.semester)) notFound();
      const [resources, branches, materialLocked] = await Promise.all([
        getResources(subject.id),
        getVisibleBranches(program),
        getMaterialLocked(),
      ]);
      return {
        kind: 'subject' as const,
        program,
        branch,
        semester: route.semester,
        subject,
        // While the admin's master lock is on, the page doesn't even receive the list
        resources: materialLocked ? [] : resources,
        materialLocked,
        canonical: canonicalSubjectPath(program, branches, subject),
      };
    }
    default:
      notFound();
  }
}

const branchLabel = (program: Program, branch: Branch) =>
  program.hasBranches ? `${program.name} ${branch.shortName}` : program.name;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const page = await loadPage(params);
  const { program } = page;

  switch (page.kind) {
    case 'program':
      return {
        title: `${program.name} notes, PYQs and study material`,
        description: `${program.fullName} (${program.name}) study material for AKTU students: pick your branch for semester-wise notes, previous year papers and important questions.`,
        alternates: { canonical: programPath(program) },
      };
    case 'branch': {
      const label = branchLabel(program, page.branch);
      return {
        title: `${label} notes and PYQs, all semesters`,
        description: `Semester-wise ${label} notes, previous year question papers, important questions and syllabus for AKTU.`,
        alternates: { canonical: branchPath(program, page.branch.id) },
      };
    }
    case 'semester': {
      const label = branchLabel(program, page.branch);
      return {
        title: `${label} ${semesterLabel(page.semester)} subjects`,
        description: `All ${label} ${semesterLabel(page.semester)} subjects with unit-wise notes, PYQs and important questions. ${page.subjects
          .slice(0, 6)
          .map((s) => s.name)
          .join(', ')}.`,
        alternates: { canonical: semesterPath(program, page.branch.id, page.semester) },
      };
    }
    case 'subject': {
      const { subject } = page;
      return {
        title: `${subject.code} ${subject.name}: notes, PYQs and important questions`,
        description: `${subject.name} (${subject.code}) for ${branchLabel(program, page.branch)} ${semesterLabel(page.semester)}: unit-wise notes, previous year papers, important questions and syllabus.${
          subject.unitTitles.length ? ` Units: ${subject.unitTitles.join(', ')}.` : ''
        }`,
        alternates: page.canonical ? { canonical: page.canonical } : undefined,
      };
    }
  }
}

export default async function CatalogPage({ params }: { params: Params }) {
  const page = await loadPage(params);

  let content: React.ReactNode;
  switch (page.kind) {
    case 'program': {
      const subjectCounts: Record<string, number> = {};
      for (const branch of page.branches) {
        subjectCounts[branch.id] = page.subjects.filter((s) =>
          s.offerings.some((o) => o.branchId === branch.id || o.branchId === '*')
        ).length;
      }
      content = <ProgramView program={page.program} branches={page.branches} subjectCounts={subjectCounts} />;
      break;
    }
    case 'branch': {
      const semesterCounts: Record<number, number> = {};
      for (let semester = 1; semester <= page.program.semesters; semester++) {
        semesterCounts[semester] = page.subjects.filter((s) => subjectOfferedIn(s, page.branch.id, semester)).length;
      }
      content = <BranchView program={page.program} branch={page.branch} semesterCounts={semesterCounts} />;
      break;
    }
    case 'semester':
      content = (
        <SemesterView
          program={page.program}
          branch={page.branch}
          semester={page.semester}
          subjects={page.subjects}
          passOptions={semesterPassOption(page.program, page.branch, page.semester)}
        />
      );
      break;
    case 'subject':
      content = (
        <SubjectView
          program={page.program}
          branch={page.branch}
          semester={page.semester}
          subject={page.subject}
          resources={page.resources}
          materialLocked={page.materialLocked}
          passOptions={subjectPassOptions(page.program, page.branch, page.semester, page.subject)}
        />
      );
      break;
  }

  return <PageShell>{content}</PageShell>;
}

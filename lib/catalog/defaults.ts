import { Branch, DEFAULT_BRANCH_ID, Program, ProgramLevel } from './types';
import type { IconName } from '@/app/components/Icon';
// Shared with scripts/seed-catalog.mjs, which loads the same programs plus the AKTU subjects
import seed from './seed/programs.json';

// Loaded by Admin → Programs → "Add default programs". Everything can be edited afterwards.
// Durations follow AKTU's usual schemes; BCA/BBA are 3-year here (some colleges run 4 under NEP).
export const DEFAULT_PROGRAMS: Program[] = seed.programs.map((p) => ({ ...p, level: p.level as ProgramLevel, active: true }));

const branch = (programId: string, id: string, shortName: string, name: string, order: number): Branch => ({
  id,
  programId,
  name,
  shortName,
  order,
  active: true,
});

export const DEFAULT_BRANCHES: Branch[] = [
  ...Object.entries(seed.branches).flatMap(([programId, list]) =>
    list.map((b, i) => branch(programId, b.id, b.shortName, b.name, i + 1))
  ),
  // Branchless programs keep their program-wide pass on a hidden branch
  ...DEFAULT_PROGRAMS.filter((p) => !p.hasBranches).map((p) => branch(p.id, DEFAULT_BRANCH_ID, p.name, p.fullName, 1)),
];

interface ProgramStyle {
  icon: IconName;
  // Background + text colour pair for the icon tile and duration badge
  tint: string;
  // One line on the home page program cards
  blurb: string;
}

// Display-only styling, keyed by program id
const PROGRAM_STYLES: Record<string, ProgramStyle> = {
  btech: {
    icon: 'engineering',
    tint: 'bg-brand-soft text-brand-ink',
    blurb: 'CSE, IT, AI & ML, Data Science, ECE, Electrical, Mechanical, Civil, Chemical and Biotech.',
  },
  bpharm: {
    icon: 'medication',
    tint: 'bg-leaf-soft text-leaf-ink',
    blurb: 'Pharmaceutics, pharmacology, pharmacognosy and medicinal chemistry, on PCI guidelines.',
  },
  bca: {
    icon: 'terminal',
    tint: 'bg-surface-strong text-ink',
    blurb: 'C, C++, Java and Python, web technology, databases, networks and AI.',
  },
  bba: {
    icon: 'bar_chart',
    tint: 'bg-sun-soft text-sun-ink',
    blurb: 'Management, accounting, marketing and HR, with five specializations in year three.',
  },
  mba: {
    icon: 'analytics',
    tint: 'bg-sun-soft text-sun-ink',
    blurb: 'Core management in year one, then two specializations such as marketing, finance or HR.',
  },
  mca: {
    icon: 'code_blocks',
    tint: 'bg-brand-soft text-brand-ink',
    blurb: 'Programming, algorithms, databases and software engineering, with electives like AI and cloud.',
  },
  mtech: {
    icon: 'precision_manufacturing',
    tint: 'bg-surface-strong text-ink',
    blurb: 'Specializations in CSE, ECE, Mechanical and Civil engineering.',
  },
};

export function programStyle(programId: string): ProgramStyle {
  return PROGRAM_STYLES[programId] || { icon: 'school', tint: 'bg-surface-strong text-ink', blurb: '' };
}

// Academic session whose AKTU schemes lib/catalog/seed follows; update it when re-seeding
export const SYLLABUS_SESSION = '2026-27';

// Program ids become top-level URLs, so they must not clash with site pages
export const RESERVED_PROGRAM_IDS = ['admin', 'api', 'about', 'blog', 'contact', 'home', 'privacy-policy', 'search', 'terms', 'refund-policy'];

// Subject search shared by the header box (client) and the /search page (server)

export interface SearchEntry {
  code: string;
  name: string;
  program: string;
  branch: string; // short name, "All branches", or '' for branchless programs
  semester: number;
  url: string;
}

// Matches a code prefix (bcs3 → BCS301…) or every word of the name.
// Code matches rank first, then name matches, each in code order.
export function searchSubjects(entries: SearchEntry[], query: string, limit = 50): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const compactQuery = q.replace(/\s+/g, '');
  const words = q.split(/\s+/).filter(Boolean);

  const scored = entries
    .map((entry) => {
      const code = entry.code.toLowerCase();
      const name = entry.name.toLowerCase();
      if (code === compactQuery) return { entry, score: 0 };
      if (code.startsWith(compactQuery)) return { entry, score: 1 };
      if (words.every((word) => name.includes(word))) return { entry, score: name.startsWith(words[0]) ? 2 : 3 };
      if (code.includes(compactQuery)) return { entry, score: 4 };
      return null;
    })
    .filter((match): match is { entry: SearchEntry; score: number } => match !== null);

  return scored
    .sort((a, b) => a.score - b.score || a.entry.code.localeCompare(b.entry.code, undefined, { numeric: true }))
    .slice(0, limit)
    .map((match) => match.entry);
}

export function describeEntry(entry: SearchEntry): string {
  return [entry.program, entry.branch, `Sem ${entry.semester}`].filter(Boolean).join(' · ');
}

// A student's reading history: one entry per file or project document they opened, newest
// first. Stored at users/{uid}/history/{id} by the server; only that student can see it.

export type HistoryKind = 'resource' | 'project';

export interface HistoryEntry {
  // `${kind}-${itemId}`, so opening the same file again moves it to the top instead of repeating it
  id: string;
  kind: HistoryKind;
  title: string;
  // Where it came from, such as "BCS301 · Data Structure" or the project's title
  context: string;
  // What it is, such as "Notes" or "Project guide"
  label: string;
  // The page that opens it again (?read=<id> opens the file straight away)
  path: string;
  // ISO date
  openedAt: string;
}

// What the History page shows
export const HISTORY_SHOWN = 100;

// Item ids are made of these characters only
export const SAFE_ID = /^[A-Za-z0-9_-]{1,150}$/;

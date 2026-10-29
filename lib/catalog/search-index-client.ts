import type { SearchEntry } from './search';

// Every subject's code, name and page URL from /api/search-index, fetched once per page view
// and shared by the header search and the home page's "Your passes"
let indexPromise: Promise<SearchEntry[]> | null = null;

export function loadSearchIndex(): Promise<SearchEntry[]> {
  if (!indexPromise) {
    indexPromise = fetch('/api/search-index')
      .then((response) => (response.ok ? response.json() : []))
      .catch(() => {
        indexPromise = null;
        return [];
      });
  }
  return indexPromise;
}

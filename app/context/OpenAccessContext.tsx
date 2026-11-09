'use client';

import { createContext, useContext } from 'react';

const OpenAccessContext = createContext(false);

// Free access (settings/site.openAccess, read in the root layout): anyone can read everything
// without an account, and nothing is on sale. Display only: the server checks it on every request.
export function OpenAccessProvider({ open, children }: { open: boolean; children: React.ReactNode }) {
  return <OpenAccessContext.Provider value={open}>{children}</OpenAccessContext.Provider>;
}

export function useOpenAccess() {
  return useContext(OpenAccessContext);
}

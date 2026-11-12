'use client';

import { createContext, useContext } from 'react';

const ReadWithoutAccountContext = createContext(false);

// True while visitors can open files without an account: free access is on and the owners have
// turned sign-in off (read in the root layout). Display only: the server checks it on every request.
export function ReadWithoutAccountProvider({ value, children }: { value: boolean; children: React.ReactNode }) {
  return <ReadWithoutAccountContext.Provider value={value}>{children}</ReadWithoutAccountContext.Provider>;
}

export function useReadWithoutAccount() {
  return useContext(ReadWithoutAccountContext);
}

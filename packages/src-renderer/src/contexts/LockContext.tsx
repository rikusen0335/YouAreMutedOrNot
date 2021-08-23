import { createContext } from 'preact'

interface ILockContext {
  isLock: boolean;
}

export const LockContext = createContext<ILockContext>({ isLock: false })

import { h, createContext, ComponentChildren } from 'preact'
import { useState, StateUpdater } from 'preact/hooks'

interface ILockContext {
  isLock: boolean;
  setIsLock: StateUpdater<boolean>| null
}

export const LockContext = createContext<ILockContext>({ isLock: false, setIsLock: null })
export const LockProvider = ({ children }: { children: ComponentChildren }): h.JSX.Element => {
  const [isLock, setIsLock] = useState<boolean>(false)

  return (
    <LockContext.Provider value={{ isLock, setIsLock }} children={children} />
  )
}

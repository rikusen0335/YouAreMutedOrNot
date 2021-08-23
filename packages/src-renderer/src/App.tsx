import { h } from 'preact'
import { WindowTitlebar } from './components/WindowTitlebar'
import { LockContext, LockProvider } from './contexts/LockContext'
import { useContext } from 'preact/hooks'

import { WindowManager } from '@tauri-apps/api/window'

export const App = () => {
  return (
    <LockProvider children={<Home />} />
  )
}

const Home = () => {
  const { isLock, setIsLock } = useContext(LockContext)

  const appWindow: WindowManager = window.__TAURI__.window.appWindow
  appWindow.setResizable(true)

  return ([
    <WindowTitlebar />,
    <div style={{ marginTop: 30 }}>
      <p style={{ color: '#fff' }}>aiueo</p>
      <p>{isLock && 'Locked'}</p>
      <button onClick={() => setIsLock(state => !state)}>Change lock</button>
    </div>
  ])
}

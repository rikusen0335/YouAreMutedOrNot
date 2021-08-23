import { h } from 'preact'
import { WindowTitlebar } from './components/WindowTitlebar'
import { LockContext } from './contexts/LockContext'
import { useContext, useEffect } from 'preact/hooks'

import { WindowManager } from '@tauri-apps/api/window'

export const App = () => {
  return (
    <LockContext.Provider value={{ isLock: false }} children={<Home />} />
  )
}

const Home = () => {
  const { isLock } = useContext(LockContext)

  const appWindow: WindowManager = window.__TAURI__.window.appWindow
  appWindow.setResizable(true)

  return ([
    <WindowTitlebar />,
    <div style={{ marginTop: 30 }}>
      <p style={{ color: '#fff' }}>aiueo</p>
      <p>{isLock}</p>
    </div>
  ])
}

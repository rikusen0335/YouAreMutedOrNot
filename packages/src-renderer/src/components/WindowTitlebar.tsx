import { h } from 'preact'
import { WindowManager } from '@tauri-apps/api/window'

export const WindowTitlebar = () => {
  const appWindow: WindowManager = window.__TAURI__.window.appWindow

  return (
    <div data-tauri-drag-region="" class="titlebar">
      <div class="titlebar-button" onClick={() => appWindow.minimize()}>
        <img
          src="https://api.iconify.design/mdi:window-minimize.svg"
          alt="minimize"
        />
      </div>
      <div class="titlebar-button" onClick={() => appWindow.toggleMaximize()}>
        <img
          src="https://api.iconify.design/mdi:window-maximize.svg"
          alt="maximize"
        />
      </div>
      <div class="titlebar-button" onClick={() => appWindow.close()}>
        <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
      </div>
    </div>
  )
}

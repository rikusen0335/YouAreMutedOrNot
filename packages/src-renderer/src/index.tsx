import { h, render } from 'preact'
import { App } from './App'

import './style.css'

const el = document.querySelector('body')

if (el) {
  render(<App />, el)
}

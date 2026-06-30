import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../vendor/aurora/reset.css'
import '../vendor/aurora/globals.css'
import '../vendor/aurora/classes.css'
import '../vendor/aurora/themes.css'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/plus-jakarta-sans'
import App from './App'
import { initAnalytics } from './lib/analytics'
import './styles/global.css'

// Só carrega GA/Pixel se os IDs estiverem configurados (ver src/config/analytics.ts).
initAnalytics()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

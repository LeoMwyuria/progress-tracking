import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/index.css'
import App from './App.tsx'
import './Styles/Header.css'
import './Styles/TasksPage.css'
import './Styles/Dropdown.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

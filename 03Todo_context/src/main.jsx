import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoProvider } from './contexts/TodoContexts.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
  </StrictMode>,
)

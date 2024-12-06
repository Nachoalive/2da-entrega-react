import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { ThemeProvider } from './context/context.jsx';


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>

)
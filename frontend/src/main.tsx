import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <AuthProvider>
      <App /> 
    </AuthProvider>
  </StrictMode>,
)


// this is due to provide a protected enviroment to the  App Component so that will render only when AuthProvider is  provided. 
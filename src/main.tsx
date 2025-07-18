import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// This is the entry point for the React application, rendering the App component into the root element of the HTML document.
// The global styles are imported to apply consistent styling across the application.
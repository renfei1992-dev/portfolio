import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Environment variable check
console.log('🔑 API Key Check:', import.meta.env.VITE_OPENAI_API_KEY ? 'LOADED ✅' : 'MISSING ❌');
if (import.meta.env.VITE_OPENAI_API_KEY) {
  console.log('   First 20 chars:', import.meta.env.VITE_OPENAI_API_KEY.substring(0, 20) + '...');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

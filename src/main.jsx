import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ResetGlobalStyles } from './ResetGlobalStyles/resetStyles';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetGlobalStyles/>
    <App />
  </React.StrictMode>,
)

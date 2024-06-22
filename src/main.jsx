import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {NewsProvider} from './context/NewsContext.jsx'
import './index.css'
import "./assets/FontAwesome.js"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsProvider>
        <App />
    </NewsProvider>
  </React.StrictMode>
)

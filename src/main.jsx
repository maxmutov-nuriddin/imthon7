import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { CountryProvider } from './context/Context';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <CountryProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CountryProvider>
)

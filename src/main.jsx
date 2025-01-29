import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './main.min.css'

import App from './App.jsx'
import Projects from './Projects.jsx'
import Contacts from './Contacts.jsx'
import Order from './Order.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route index element={<App />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/order" element={<Order />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>
)

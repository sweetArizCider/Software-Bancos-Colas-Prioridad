import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import Banco from './assets/components/Banco.jsx'
import Operaciones from './assets/components/Operaciones.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/banco" element={<Banco/>}/>
      <Route path="/operaciones" element={<Operaciones/>}/>
      <Route path="/" element={<Banco/>}/>
      <Route path="*" element={<Banco/>}/>
    </Routes>
  </BrowserRouter>,
)

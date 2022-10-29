import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate, useNavigation } from 'react-router-dom'
import Navbar from './components/Navbar'
import './index.css'
import CrearBudget from './pages/CrearBudget'
import CuentaAws from './pages/CuentaAws'
import Inicio from './pages/Inicio'
import MultiFactorAuth from './pages/MultiFactorAuth'
import UsuarioIAM from './pages/UsuarioIAM'

function App() {
  let navigate = useNavigate()
  useEffect(() => {
    navigate("/inicio")
  }, [])
  

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route
          path="inicio"
          element={<Inicio />}
        />
        <Route path="cuenta_aws" element={<CuentaAws />} />
        <Route path="mfa" element={<MultiFactorAuth />} />
        <Route path="usuario_iam" element={<UsuarioIAM />} />
        <Route path="crear_budget" element={<CrearBudget />} />
      </Route>
    </Routes>
  )
}

export default App

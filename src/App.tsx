import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './index.css'
import CuentaAws from './pages/CuentaAws'
import GruposIAM from './pages/GruposIAM'
import Inicio from './pages/Inicio'
import MultiFactorAuth from './pages/MultiFactorAuth'
import UsuarioIAM from './pages/UsuarioIAM'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route
          path="inicio"
          element={<Inicio />}
        />
        <Route path="cuenta_aws" element={<CuentaAws />} />
        <Route path="mfa" element={<MultiFactorAuth />} />
        <Route path="grupo_iam" element={<GruposIAM />} />
        <Route path="usuario_iam" element={<UsuarioIAM />} />
      </Route>
    </Routes>
  )
}

export default App

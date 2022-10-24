import React, { useReducer } from 'react'
import { NavLink, Outlet } from 'react-router-dom';

type Props = {}

const reducer = (openNavBar: number): boolean[] => {
  switch (openNavBar) {
    case 1:
      return [true, false, false, false]
      break;
    case 2:
      return [false, true, false, false]
      break;
    case 3:
      return [false, false, true, false]
      break;
    case 4:
      return [false, false, false, true]
      break;

    default:
      return InitialValue
      break;
  }
}
const InitialValue = [false, false, false, false]

export default function Navbar({ }: Props) {


  const [state, dispatch] = useReducer(reducer, InitialValue as never)



  return (<>
    <main>
      <nav>
        <ul>
          <li><NavLink to={"inicio"}>Inicio</NavLink></li>
          <li><NavLink to={"cuenta_aws"}>Cuenta AWS</NavLink></li>
          <li><NavLink to={"mfa"}>MFA</NavLink></li>
          <li><NavLink to={"grupo_iam"}>Grupo IAM</NavLink></li>
          <li><NavLink to={"usuario_iam"}>Usuario IAM</NavLink></li>
        </ul>
      </nav>
      <div>
        <h1>Tutorial para crear una cuenta AWS y crear un usuario administrador</h1>
        <Outlet />
      </div>

    </main>
  </>
  )
}
import React from 'react'

type Props = {}

export default function Inicio({ }: Props) {
  return (
    <div>
      <h2>Inicio</h2>
      <p>
        Soy desarrollador web y desarrollador de bases de datos. He realizado este tutorial para aquellos clientes que desean que les algún servicio y se los configure en la nube de AWS
      </p>
      <p>AWS es el proveedor de servicios más fiable y asequible, con una gran documentación y gran fiabilidad, es por eso que me gusta trabajar con ellos.</p>
      <p>
        En este tutorial vamos a crear:
      </p>
      <ol>
        <li>Una cuenta AWS</li>
        <li>Asegurarla con Multifactor Autentication</li>
        <li>Crearemos un grupo administrador</li>
        <li>Y un usuario administrador</li>
      </ol>
      <p>Con esto, el dueño de la cuenta AWS podrá tener control de su aplicación, aún a pesar de que haya contratado freelancers extras y desconocidos en cualquier paso de la construcción de su aplicación.</p>
    </div>
  )
}
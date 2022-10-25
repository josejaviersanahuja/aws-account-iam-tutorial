import React from 'react'

type Props = {}

export default function Inicio({ }: Props) {
  return (
    <div>
      <h2>Inicio</h2>
      <p>
        Soy desarrollador web y desarrollador de bases de datos. He realizado este tutorial para aquellos clientes que desean que les levante y configuere servicios en la nube de AWS
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
      <p>Con esto, el dueño de la cuenta AWS podrá tener control de su aplicación, podrá controlar a cada freelancer en cualquier paso de la construcción de su aplicación.</p>
      <p>Siempre podrás encontrar Cloud Practitioners que te ayuden en cualquier gestión, y la forma de colaborar con ellos, es a través de este tutorial. ¡¡¡Vamos a ello!!!</p>
    </div>
  )
}
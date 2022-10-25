import React from 'react'

type Props = {}

export default function UsuarioIAM({ }: Props) {
  return (
    <div>
      <h2>UsuarioIAM</h2>
      <p>
        En este último paso vas a lograr configurar un usuario administrador, que si va a poder realizar cualquier trabajo en tu nube AWS, pero recuerda que tu siempre serás el dueño y la persona con el poder de cambiar los permisos de este nuevo usuario.
      </p>
      <p>
        Vamos a empezar iniciando sesión, y si ya la has iniciado, vamos al buscador de servicios y buscas "IAM"
      </p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/buscador_servicios_aws.JPG'
        alt='aws_inicio_cuenta'
      />
      <p>
        Una vez dentro del servicio quiero que ubiques en el menú de la izquierda lo siguiente: "Usuarios" y "Grupos"
      </p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/servicio_iam_aws.JPG'
        alt='aws_inicio_cuenta'
      />
      <p>
        En la imagen AWS me chivó que habilitara MFA, pero ya tu la tienes habilitada seguro. Has click en "Usuarios" y verás el siguiente cuadro:
      </p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/agregar_usuario_aws.JPG'
        alt='aws_inicio_cuenta'
      />
      <p>
        Haces click en agregar usuarios y ahora empieza la configuración de un nuevo usuario, y en el medio de esta configuración, configuraremos un grupo administrador.
      </p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/pasos_creacion_usuario_1.JPG'
        alt='aws_inicio_cuenta'
      />
      <p>
        Haces click en agregar usuarios y ahora empieza la configuración de un nuevo usuario, y en el medio de esta configuración, configuraremos un grupo administrador.
      </p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/pasos_creacion_usuario_1.JPG'
        alt='aws_inicio_cuenta'
      />
      <p>
        Una vez rellenas los campos tal como sale en la imagen, puede seguir adelante y lo siguiente que toca es la creación del grupo de administradores.
      </p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/pasos_creacion_usuarios_2.JPG'
        alt='aws_inicio_cuenta'
      />
      <p>
        Una vez le da click en crear grupo, esto es lo que le va a aparecer:
      </p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/pasos_creacion_usuarios_3.JPG'
        alt='aws_inicio_cuenta'
      />
      <p>
        De nombre vas a poner administradores y activas el primer permiso disponible que se llama AdministratorAccess
      </p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/pasos_creacion_usuarios_4.JPG'
        alt='aws_inicio_cuenta'
      />
      <p>
        Ya podemos continuar con la creación del usuario, ya está asignado al grupo administrador. Así que damos siguiente: Etiquetas
      </p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/pasos_creacion_usuarios_4.JPG'
        alt='aws_inicio_cuenta'
      />
      <p>
        Las etiquetas están asociadas a los usuarios que creamos. En una empresa grande esto tiene mucho sentido, como el ejemplo de la imagen de abajo, podemos asignar la etiqueta de ingenieria al usuario que creamos, pero para nuestro caso podemos dar una etiqueta más directa. "trabajo" y "freelancer que me arreglo el fallo de la app en Agosto de 2022" Lo que desees.
      </p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/pasos_creacion_usuario_5.JPG'
        alt='aws_inicio_cuenta'
      />
      <p>
        Visualizamos un preview de todo lo configurado y seguimos con crear usuario.
      </p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/pasos_creacion_usuarios_6.JPG'
        alt='aws_inicio_cuenta'
      />
      <p>
        Este es un paso crítico e importante... Vamos a ver las credenciales que hemos generado. La url de donde podemos iniciar sesión y todos estos datos son bastante sensibles.
      </p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/pasos_creacion_usuario_7.JPG'
        alt='aws_inicio_cuenta'
      />
      <p>La estrategia a partir de aquí es descargar el csv y guardarlo en un lugar superseguro, ordenador personal, protegido por contraseñas buenas, y que sea un sitio que no vayas a perderlo o extraviarlo.</p>
      <p>Yo por ejemplo, tengo una cuenta muy segura de OneDrive que no he compartido con nadie y solo la tengo en mis pcs personales. Siempre la llevo conmigo porque está en la nube y puedo compartir la información facilmente.</p>
      <p>Para concluir, el desarrollador que requiera de esa credencial, va a necesitar que se las envíe. Si su email es seguro, puede usarlo sin problemas, si no lo es, envíelo y borre el email enviado.</p>
      <p>Los trabajadores de la nube saben lo delicadas que son las credenciales y sabrán resguardarlas bien.</p>
      <p><b>Felicidades por completar este tutorial, por hacer crecer su proyecto, dentro de poco ya lo tendrá disponible en todo el mundo!!! 😉</b></p>
    </div>
  )
}
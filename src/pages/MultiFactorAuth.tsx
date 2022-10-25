import React from 'react'

type Props = {}

export default function MultiFactorAuth({ }: Props) {
  return (
    <div>
      <h2>MultiFactorAuth</h2>
      <p>
        Lo primero que empezaremos es por iniciar sesión como usuario raíz en la consola de AWS. <a href='https://aws.amazon.com/es/' target='_blank' rel='noreferrer'>Aquí</a> <b>Esta vez deja seleccionado usuario raíz e introduce tu email y le damos a siguiente</b>
      </p>
      <img 
        src='https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2Faws_inicio_cuenta.JPG?alt=media&token=f3391820-5064-458c-b71e-a621aa91824b'
        alt='aws_inicio_cuenta'
      />
      <p>
        Luego nos pedirá la contraseña que hemos configurado
      </p>
      <img 
        src='https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2Finiciamos_sesion_aws.JPG?alt=media&token=d27ef420-3d5f-4b1f-9b68-d475d4da0d3e'
        alt='aws_inicio_cuenta'
      />
      <p>
        Ahora vamos a la configuración de nuestra cuenta arriba a la derecha
      </p>
      <img 
        src='https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2Fconfiguracion_cuenta_credenciales_seguridad.JPG?alt=media&token=e2b1534a-bae6-488e-9476-b24f4d819702'
        alt='aws_inicio_cuenta'
      />
      <p>
        Y en las opciones de seguridad seleccionamos MFA. Pausamos aquí y vamos al móvil.
      </p>
      <img 
        src='https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2FActivar_MFA.JPG?alt=media&token=c3da3613-7ac2-412d-ad18-e9699554fee1'
        alt='aws_inicio_cuenta'
      />
      <p>
        Ahora busca tu smartphone y descarga alguna aplicación como Authy, Authenticator o cualquiera. Yo uso Microsoft Authenticator pero muchos pueden servir.
      </p>
      <img 
        src='https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2FScreenshot_20221025_012113.jpg?alt=media&token=3b2e9fff-eccf-4d8b-bcde-4be1288ee0b2'
        alt='aws_inicio_cuenta'
      />
      <p>Descárgalo y configuralo en tu móvil. <a href='https://www.microsoft.com/es-es/security/mobile-authenticator-app' target={'_blank'} rel='noreferrer'>Link</a></p>
      <p>Una vez descargado presionas el botón de +</p>
      <img
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/microsoft_auth_add_new.JPG'
        alt='auth_add'
      />
      <p>Ahora en la aplicación móvil debes seleccionar otras cuentas, y te va a pedir que scanees un código QR que te va a mostrar AWS en el ordenador.</p>
      <img
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/pasos_finales_auth.JPG'
        alt='auth_add'
      />
      <p>Casi simultáneamente, das click en el ordenador para ver el QR, y con el móvil lo scaneas. Las aplicaciones MFA de los móviles van generando claves aleatorias cada 30 segundos. Estas claves aleatorias ayudan a identificar tu móvil con tu cuenta de AWS. Registras 2 claves seguidas y con esto quedará registrado el MFA.</p>
    </div>
  )
}
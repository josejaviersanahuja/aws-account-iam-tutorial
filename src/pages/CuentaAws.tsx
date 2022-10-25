import React from 'react'

type Props = {}

export default function CuentaAws({ }: Props) {
  return (
    <div>
      <h2>CuentaAws</h2>
      <p>
        Empezaremos por ir a la página web de creación de una cuenta AWS <a href='https://aws.amazon.com/es/' target='_blank' rel='noreferrer'>Aquí</a> y damos click al botón superior derecho que dice "Inicio de sesión en la consola" Y debes llegar a la siguiente imagen.
      </p>
      <img 
        src='https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2Faws_inicio_cuenta.JPG?alt=media&token=f3391820-5064-458c-b71e-a621aa91824b'
        alt='aws_inicio_cuenta'
      />
      <p>
        Das click en "Crear una cuenta de AWS"
      </p>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2Faws_singup_cuenta.JPG?alt=media&token=a7e4a0e3-0ffc-4b00-bc59-b35954a58344'
        alt='aws_singup_cuenta'
      />
      <p>Una vez ingresamos email y el nombre de la cuenta debemos rellenar un captcha de seguridad</p>
      <img 
        src='https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2Fcaptcha_seguridad.JPG?alt=media&token=384d2867-a7ba-430a-a139-09dee425b00d'
        alt='captcha'
      />
      <p>Ahora toca validar el email</p>
      <img 
        src='https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2FValidamos_email.JPG?alt=media&token=ccad9876-112e-457e-9960-9c83dd17f10e'
        alt='validar email'
      />
      <p>Introducimos una contreseña segura. Observa bien la imágen porque pide 4 tipos diferentes de caracteres. En realidad 3 de esos 4 tipos</p>
      <img 
        src='https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2Fpassword_aws_cuenta.JPG?alt=media&token=a565e354-eae9-4127-b9e6-e5a65a2a07a6'
        alt='password'
      />
      <p>Ahora toca un registro de datos adicionales. Uso personal, Nombre real, Teléfono real, País real, Estos datos pueden mantener segura tu cuenta.</p>
      <img 
        src='https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2Fregistro_aws_cuenta.JPG?alt=media&token=0ee71ddc-e0fd-493d-b51b-44083cef32f7'
        alt='registro'
      />
      <p>Una vez ya has colocado todos tus datos, toca poner la tarjeta de crédito. <b>¡¡Advertencia!!</b> Van a cobrar 1$ que luego devolverán a tu tarjeta. Recomiendo que coloques una tarjeta recargable para esta página web.</p>
      <img 
        src='https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2Ftarjeta_de_credito_aws.JPG?alt=media&token=83c2782a-d312-4d5e-98c8-e26affc58327'
        alt='registro'
      />
      <p>Última verificación a través de un teléfono móvil. No te van a cobrar ni te van a hacer spam</p>
      <img 
        src='https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2Fultima_verificacion_aws.JPG?alt=media&token=4ef0e637-55ad-4246-8a5c-7615339b0acf'
        alt='registro'
      />
      <p>Finalizamos el registro haciendo click en soporte básico gratis.</p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/soporte_basico_gratis.JPG'
        alt='registro'
      />
      <p><b>¡Felicidades! Has completado tu cuenta de AWS.</b> Ahora toca protegerla. Ve a MFA en el menú de la izquierda</p>
      <img 
        src='https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2Ffinalizado_aws_signedup.JPG?alt=media&token=4f88c56e-ebe6-47f6-b0a9-718326f7f870'
        alt='registro'
      />
    </div>
  )
}
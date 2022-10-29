import React from 'react'

type Props = {}

export default function CrearBudget({}: Props) {
  return (
    <div>
        <h2>Crear un Budget</h2>
      <p>
        Esto consiste en crear una alerta de facturación. Es conocido de casos donde los servicios de AWS son explotados de forma maliciosa por hackers, o por un uso irresponsable o ingenuo de los servicios de AWS.
      </p>
      <p>
        Adicional al motivo anterior, resulta que las facturaciones, costos y budgets de los servicios de AWS, vienen deshabilitados para todos los usuarios que no son ROOT. Por ese motivo, es el usuario dueño de la cuenta de AWS el que debería crear una alerta de facturación que es un servicio gratuito del que podemos beneficiarnos.
      </p>
      <p> 
        Ve al menú de tu usuario en la esquina superior derecha.
      </p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/assets_aws_tutorial/panel_facturacion_aws_1.JPG'
        alt='aws_inicio_cuenta'
      />
      <p>
        Ahora ve al menú de la izquierda y toca la opción de budget
      </p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/assets_aws_tutorial/panel_facturacion_aws_2.JPG'
        alt='aws_inicio_cuenta'
      />
      <p>
        Observa la siguiente imagen, y si puedes hazle zoom
      </p>
      <img 
        src='https://assets-zitrojj.s3.eu-west-1.amazonaws.com/assets_aws_tutorial/panel_facturacion_aws_budget.JPG'
        alt='aws_inicio_cuenta'
      />
      <p>
        Vamos a crear una plantilla simplificada que consta de 5 pasos antes de darle a botón de crear budget.
        <ol>
          <li>Selecciona uso de plantilla simplificada</li>
          <li>Presupuesto de costo mensual</li>
          <li>El nombre del budget, por defecto es My Monthly Cost Budget... pero lo puede cambiar si lo desea.</li>
          <li>Para empezar a levantar y desarrollar un proyecto pequeño, un budget de 5$ es más que suficiente. Seguramente en producción este budget habrá que modificarlo.</li>
          <li>Coloca los emails que deben recibir esta alerta. En un comienzo, si yo estoy creando todo el proyecto, me gustaría recibirlo yo también. así que por favor añádame si lo desea. josejaviersanahuja@gmail.com más su email separados por comas.</li>
          <li>Le damos click a crear budget y con eso quedaría creado.</li>
        </ol>
      </p>
      <p>
        Ahora ya tendremos la confianza de que seremos notificados si nuestros costos en AWS se salen de nuestro control y podremos tomar medidas a tiempo.
      </p>
    </div>
  )
}
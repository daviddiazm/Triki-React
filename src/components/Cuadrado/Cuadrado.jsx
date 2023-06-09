import React, { useState } from 'react'
import './Cuadrado.css'

const Cuadrado = ({turnoDeJugador}) => {

  // const [opction, setOpction] = useState("")

  console.log(turnoDeJugador);

  const elTurno = turnoDeJugador

  return (
    <div className='cuadrado'>
      <div className='fondo'></div>
      <div className='fondo2'></div>
      <h2 className='texto' >{elTurno}</h2>
    </div>
  )
}

export default Cuadrado
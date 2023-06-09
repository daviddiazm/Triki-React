import React, { useState } from 'react'
import './Cuadrado.css'

const Cuadrado = (turnoDeJugador) => {

const [option, setOption] = useState("")

const changeOption = () => {
  setOption(turnoDeJugador.turnoDeJugador)
}

console.log(turnoDeJugador.turnoDeJugador);

  return (
    <div className='cuadrado' onClick={changeOption}>
      <div className='fondo'></div>
      <div className='fondo2'></div>
      <h2 className='texto' >{option}</h2>
    </div>
  )
}

export default Cuadrado
import { useState } from 'react'
import './App.css'
import Cuadrado from './components/Cuadrado/Cuadrado'

function App() {
  const [count, setCount] = useState(0)
  const [isSelected, setIsSelected] = useState(null)
  const [turno, setTurno] = useState("")

  const turnoDeJugador = () => {
    if(turno == false) return "X"
    if(turno == true) return "O"
  }

//ESTAS EN LA MIDUBRANCH
  // console.log(turno);
  // console.log(turnoDeJugador());

  return (
    <div className='app'>
      TRKI
      <div className='tablero' onClick={() => setTurno(!turno)}>
        <Cuadrado turnoDeJugador={turnoDeJugador()}/>
        <Cuadrado turnoDeJugador={turnoDeJugador()}/>
        <Cuadrado turnoDeJugador={turnoDeJugador()}/>
        <Cuadrado turnoDeJugador={turnoDeJugador()}/>
        <Cuadrado turnoDeJugador={turnoDeJugador()}/>
        <Cuadrado turnoDeJugador={turnoDeJugador()}/>
        <Cuadrado turnoDeJugador={turnoDeJugador()}/>
        <Cuadrado turnoDeJugador={turnoDeJugador()}/>
        <Cuadrado turnoDeJugador={turnoDeJugador()}/>
        {/* <p>praesentium.</p>
        <p>praesentium.</p>
        <p>praesentium.</p> */}
      </div>
      RESTART
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Cuadrado from './components/Cuadrado/Cuadrado'

function App() {
  const [count, setCount] = useState(0)
  const [isSelected, setIsSelected] = useState(null)
  const [turno, setTurno] = useState(true)

  const turnoDeJugador = () => {
    if (turno == true) {
      return "X"
    } else {
      return "O"
    }
  }

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
        {/* <Cuadrado />
        <Cuadrado />
        <Cuadrado /> */}
        <p>praesentium.</p>
        <p>praesentium.</p>
        <p>praesentium.</p>
      </div>
      RESTART
    </div>
  )
}

export default App

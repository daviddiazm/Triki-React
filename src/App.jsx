import { useEffect, useState } from 'react'
import './App.css'
// import Cuadrado from './components/Cuadrado/Cuadrado'

const TURNS = {
  X: "x",
  O: "o"
}

const GANADOR = {
  NO_DEFINIDO: "No definido",
  HAY_GANARDOR: null,
}

const Cuadrado = ({ children, estaSeleccionado, actualizarTabla, index }) => {
  const className = `square ${estaSeleccionado ? 'is-selected' : ''}`

  const handleClick = () => {
    actualizarTabla(index)
  }

  return (
    <div
      className={className}
      onClick={handleClick}>
      {children}
    </div>
  )
}

const COMBOS_GANADORES = [
  [0, 1, 2],
  [3, 4 ,5],
  [6, 7 ,8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4 ,8],
  [2, 4 ,6]
]


function App() {

  const [tablero, setTablero] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(TURNS.X);
  const [ganador, setGanador] = useState(null)


  const actualizarTabla = (index) => {
    if (tablero[index] || ganador) return 

    const nuevoTablero = [...tablero];
    nuevoTablero[index] = turno
    setTablero(nuevoTablero)

    const nuevoTurno = turno === TURNS.X ? TURNS.O : TURNS.X
    setTurno(nuevoTurno)

    const nuevoGanador = comprobarGanador(nuevoTablero)
    if(nuevoGanador) setGanador(nuevoGanador)
    else setGanador(null)
  }

  const comprobarGanador = (nuevoTablero) => {
    for (const combo of COMBOS_GANADORES) {
      const [index1, index2, index3] = combo
      if (nuevoTablero[index1] === nuevoTablero[index2] && nuevoTablero[index1] === nuevoTablero[index3] && nuevoTablero[index1] !== null) {
        return nuevoTablero[index1]
      }
    }
  }

  // useEffect(() => {
  //   comprobarGanador(tablero)
  // }, [tablero])



  return (
    <main className='board'>
      <section className='game'>
        {tablero.map((_, index) =>
          <Cuadrado
            key={index}
            index={index}
            actualizarTabla={actualizarTabla}>
            {tablero[index]}
          </Cuadrado>
        )}
      </section>

      <section className='turn'>
        <Cuadrado estaSeleccionado={turno === TURNS.X}>{TURNS.X}</Cuadrado>
        <Cuadrado estaSeleccionado={turno === TURNS.O}>{TURNS.O}</Cuadrado>
      </section>

      <section>
        {ganador ? `El ganador es ${ganador}` : "No hay gandor" }
      </section>
    </main>
  )
}

export default App

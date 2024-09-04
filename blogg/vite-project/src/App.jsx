import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main className="main">
      <section id="home">
        <h2>Bienvenidos a mi blog </h2>
      </section>
      <section id="about">
        <h2>benjamin Martinez</h2>
        <p>Estudiante de La Escuela Tecnica de Lugano.</p>
        <main>
      <img src="Escudo-ferro.png" />
    </main>
      </section>
      <section id="contact">
        <h2>Contacto</h2>
        <p>Detalles para ponerte en contacto con nosotros.</p>
      </section>
    </main>
    </>
  )
}

export default App



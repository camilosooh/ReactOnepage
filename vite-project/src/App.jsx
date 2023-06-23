import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompOne from '../../componentes/compOne';
import CompTwo from '../../componentes/compTwo';
import CompThree from '../../componentes/compThree';
import CompFour from '../../componentes/compFour';
import CompFive from '../../componentes/compFive';
import CompSix from '../../componentes/compSix';
import CompSeven from '../../componentes/compSeven';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img className="bg-img" src="./img/Isis.png" alt="" />
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <form className="d-flex" role="search">
              <button className="btn-outline-success" type="submit">🔎</button>
              <input className="" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </div>
      </div>

      <nav className="nav bg-green gap-3 p-2 fs-5 d-flex justify-content-center align-items-center">
        <a className="nav-link" href="#">Inicio</a>
        <a className="nav-link" onClick={() => window.scrollBy(0, 682)} href="#">Contexto</a>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Juego
          </a>
          <ul className="dropdown-menu menu-transition">
            <li><a className="dropdown-item" onClick={() => window.scrollBy(0, 1702)} href="#">Juego</a></li>
            <li><a className="dropdown-item" onClick={() => window.scrollBy(0, 2602)} href="#">Descripción</a></li>
            <li><a className="dropdown-item" onClick={() => window.scrollBy(0, 3320)} href="#">Personajes</a></li>
          </ul>
        </li>
        <a className="nav-link" href="#nosotros">Nosotros</a>
      </nav>

      <section className="section-inicio">
        <div className="container">
          <div className="row">
            <div className="col-12 ps-title">
              <h1 className="text-light mt-5 text-center">¿Qué es Isis?</h1>
              <p className="text-light mt-3 fs-5 col-8 paragraph-title">Un proyecto que busca capacitar e informar a todas aquellas personas que desconocen del tema sobre la salud humana y animal.<br /><br />Que ignoran el impacto que este tema puede llegar a tener en nuestras vidas, a causa de las malas prácticas que se pueden llegar a ver reflejadas en el día a día de cada persona</p>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <img className="imgpic" src="./img/world.png" alt="World" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <CompOne />
    <CompTwo />
    <CompThree />
    <CompFour />
    <CompFive />
    <CompSix />
    <CompSeven />
    </>
  )
}

export default App

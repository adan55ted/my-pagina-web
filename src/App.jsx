import { useState } from "react";
import "./App.css";
import { Listado } from "./componets/Listado";
import { Buscador } from "./componets/Buscador";
import { Crear } from "./componets/Crear";

const App = () => {
  const [listadoState, setListadoState] = useState([]);
  
  return (
    <div className="layout">
      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1 className="text-title">MisPelis</h1>
      </header>

      {/* Barra de navegación */}
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Películas</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <main className="content">
        <Listado listadoState={listadoState} setListadoState={setListadoState}/>
      </main>

      {/* Barra lateral */}
      <aside className="lateral">
        <Buscador listadoState={listadoState} setListadoState={setListadoState}/>
        <Crear setListadoState={setListadoState}/>
      </aside>

      {/* Pie de página */}
      <footer className="footer">
        &copy; Programacion web II -{" "}
        <a href="https://manuelhernandez.com.mx">manuelhernandez.com.mx</a>
      </footer>
    </div>
  );
};

export default App;

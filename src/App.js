import { useState } from "react";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import Listado from "./components/Listado";


function App() {

    const [listadoState, setListadoState]=useState([])

  return (
    <div className="layout">
    {/* <!--Cabecera--> */}
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        
        <h1>MisPelis</h1>
    </header>

    {/* <!--Barra de navegación--> */}
    <nav className="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>
    </nav>

    {/* <!--Contenido principal--> */}
    <section id="content" className="content">


    {/* listado de peliculas */}
        <Listado listadoState={listadoState} setListadoState={setListadoState}/>

    </section>

    {/* <!--Barra lateral--> */}
    <aside className="lateral">
        
        <Buscador />

        <Crear setListadoState={setListadoState}/>
    </aside>

    {/* <!--Pie de página--> */}
    <footer className="footer">
        &copy; Máster en React - <a href="https://pabloReyes.co">pabloReyes.co</a>
    </footer>

</div>
  );
}

export default App;

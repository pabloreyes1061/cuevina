// import logo from './logo.svg';

import Buscador from "./components/Buscador.js";
import { Listado } from "./components/Listado.js";
import Crear from './components/Crear.js'



function App() {
  return (
    
    <div className="layout">
        {/* <!--Cabecera--> */}
        <header className="header">
            <div classNameName="logo">
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

            {/* <!--aqui van las peliculas--> */}

            <Listado/>   
            <Crear/>

        </section>

        {/* <!--Barra lateral--> */}
        <aside className="lateral">

            <Buscador/>
            </aside>

        {/* <!--Pie de página--> */}
        <footer className="footer">
            &copy; Máster en React - <a href="/#">Pablo Reyes</a>
        </footer>

    </div>

  );
}

export default App;

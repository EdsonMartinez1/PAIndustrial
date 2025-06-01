import React from 'react';
import './App.css';
import { Inicio, Historia, ListaEventos, Ponentes, Contacto } from './secciones';

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">TECNM</div>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#historia">Historia</a></li>
          <li><a href="#programas">Lista de Eventos</a></li>
          <li><a href="#ponentes">Ponentes</a></li>
          <li><a href="#contacto" className="btn">Contáctanos</a></li>
        </ul>
      </nav>

      <div className="logo-bar">
        <img src="/logos/logo_sep.png" alt="Logo 1" />
        <img src="/logos/logo_indus.jpg" alt="Logo 2" />
        <img src="/logos/logo_tecnm.jpg" alt="Logo 3" />
        <img src="/logos/logo4.png" alt="Logo 4" />
      </div>

      {/* Usar los componentes importados */}
      <Inicio />
      <Historia />
      <ListaEventos />
      <Ponentes />
      <Contacto />
    </div>
  );
};

export default App;

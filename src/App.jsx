import React, { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Inicio, Historia, ListaEventos, Ponentes, Contacto, Legado, ContadorRegresivo } from './secciones';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // Refresh AOS cada vez que cambia el menú (importante si layout cambia)
  useEffect(() => {
    AOS.refresh();
  }, [menuOpen]);

  // Cierra el menú cuando se hace click en un enlace
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
  <img src="/logos/LOGOTIPO ANIVERSARIO COMPLETO.png" style={{ height: "40px", marginRight: "8px" }} />
  TecNM
</div>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><a href="#inicio" onClick={handleLinkClick}>Inicio</a></li>
          <li><a href="#historia" onClick={handleLinkClick}>Historia</a></li>
          <li><a href="#legado" onClick={handleLinkClick}>Legado</a></li>
          <li><a href="#programas" onClick={handleLinkClick}>Lista de Eventos</a></li>
          <li><a href="#ponentes" onClick={handleLinkClick}>Ponentes</a></li>
          <li><a href="#contacto" className="btn" onClick={handleLinkClick}>Contáctanos</a></li>
        </ul>
      </nav>
      
      <div className="logo-bar">
        <img src="/logos/logo_sep.png" alt="Logo 1" />
        <img src="/logos/logo_indus.jpg" alt="Logo 2" />
        <img src="/logos/logo_tecnm.jpg" alt="Logo 3" />
        <img src="/logos/logo_ITA.png" alt="Logo 4" />
      </div>

      <Inicio 
        titulo="Celebrando 50 años de excelencia académica"
        descripcion="Bienvenido a la página de 50 aniversario de Instituto Tecnológico de Aguascalientes."
        dataAos="fade-up"
      />
<br />
<br />
      <Historia dataAos="fade-up" />

      <ContadorRegresivo fechaObjetivo="2025-10-13T00:00:00" dataAos="zoom-in" />

      <Legado dataAos="fade-up" />

      <ListaEventos dataAos="fade-up" />

      <Ponentes dataAos="fade-up" />

      <Contacto
        titulo="CONTACTANOS"
        subtitulo="¡Platicanos de tus dudas, te escucharesmo!"
        direccion="Av. Adolfo López Mateos Ote. 1801, 20256 Aguascalientes, Aguascalientes · 05 km"
        email="ita@aguascalientes.tecnm.mx"
        telefono="Tel: +449 910 5002"
        mensajeGracias="¡Mensaje recibido, te contactaremos !"
        dataAos="fade-up"
      />
    </div>
  );
};

export default App;

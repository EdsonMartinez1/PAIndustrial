// App.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  Inicio,
  Historia,
  ListaEventos,
  Ponentes,
  Contacto,
  Legado,
  ContadorRegresivo,
  Registro
} from './secciones';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Inicializa AOS una sola vez
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // Refresca AOS cuando cambia el layout (ej. menú)
  useEffect(() => {
    AOS.refresh();
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <div className="app-root">
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="logo">
          <img
            src="/logos/LOGOTIPO ANIVERSARIO COMPLETO.png"
            alt="Logotipo 50 aniversario"
            style={{
              height: '40px',
              marginRight: '8px',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              padding: '4px'
            }}
          />
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-expanded={menuOpen}
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
          <li><a href="#registro" onClick={handleLinkClick}>Registro</a></li>
          <li><a href="#contacto" className="btn" onClick={handleLinkClick}>Contáctanos</a></li>
        </ul>
      </nav>

      <div className="logo-bar" aria-hidden="true">
        <img src="/logos/logo_sep.png" alt="Logo SEP" />
        <img src="/logos/logo_indus.jpg" alt="Logo Industria" />
        <img src="/logos/logo_tecnm.jpg" alt="Logo TECNM" />
        <img src="/logos/logo_ITA.png" alt="Logo ITA" />
      </div>

      <main>
        <Inicio 
          titulo="Celebrando 50 años de excelencia académica" 
          descripcion="Bienvenido a la página de 50 aniversario de Instituto Tecnológico de Aguascalientes." 
          dataAos="fade-up" 
        /> 
        <br/><br/> 
        <Historia 
          dataAos="fade-up" 
        /> 
        <ContadorRegresivo 
          fechaObjetivo="2025-10-13T00:00:00" 
          dataAos="zoom-in" 
        /> 
        <Legado 
          dataAos="fade-up" 
        /> 
        <ListaEventos 
          dataAos="fade-up" 
        />
        <Ponentes 
          dataAos="fade-up" 
        /> 
        <Registro
          dataAos="fade-up"
        />
        <Contacto 
          titulo="CONTACTANOS" 
          subtitulo="¡Platicanos de tus dudas, te escucharemos!" 
          direccion="Av. Adolfo López Mateos Ote. 1801, 20256 Aguascalientes, Aguascalientes · 05 km" 
          email="ita@aguascalientes.tecnm.mx" 
          telefono="Tel: +449 910 5002" 
          mensajeGracias="¡Mensaje recibido, te contactaremos !" 
          dataAos="fade-up" 
        />
      </main>
    </div>
  );
};

export default App;

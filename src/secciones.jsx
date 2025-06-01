// Secciones.js
import React from 'react';

export const Inicio = () => (
  <section id="inicio" className="section inicio">
    <h1>Celebrando 50 años de excelencia académica</h1>
    <p>Bienvenido a la página de 50 aniversario de Instituto Tecnológico de Aguascalientes.</p>
  </section>
);

export const Historia = () => (
  <section id="historia" className="section">
    <h2>Historia del Instituto Tecnológico de Aguascalientes</h2>
    <p>
      Fundado hace más de 50 años, el Instituto Tecnológico de Aguascalientes ha sido un pilar fundamental en la formación de profesionales de alta calidad para el desarrollo industrial y tecnológico de la región.
    </p>
    <p>
      Desde sus inicios, el instituto se ha enfocado en la innovación educativa, promoviendo una educación técnica y superior que responde a las necesidades del sector productivo y de la comunidad.
    </p>
    <p>
      A lo largo de estas cinco décadas, hemos evolucionado incorporando nuevas carreras, fortaleciendo la investigación y fomentando la vinculación con empresas nacionales e internacionales.
    </p>
    <p>
      Celebramos con orgullo este aniversario reafirmando nuestro compromiso con la excelencia académica y la formación integral de nuestros estudiantes.
    </p>
  </section>
);

export const ListaEventos = () => (
  <section id="programas" className="section">
    <h2>Lista de Eventos</h2>
    <ul style={{ listStyleType: 'disc', maxWidth: '700px', margin: '0 auto', textAlign: 'left', paddingLeft: '1.5rem' }}>
      <li><strong>Conferencia Inaugural:</strong> 1 de junio, 10:00 AM - Auditorio Principal</li>
      <li><strong>Taller de Innovación Tecnológica:</strong> 2 de junio, 2:00 PM - Sala de Computo</li>
      <li><strong>Panel de Expertos:</strong> 3 de junio, 11:00 AM - Sala de Conferencias A</li>
      <li><strong>Feria de Proyectos Estudiantiles:</strong> 4 de junio, 9:00 AM - Patio Central</li>
      <li><strong>Ceremonia de Clausura:</strong> 5 de junio, 6:00 PM - Auditorio Principal</li>
    </ul>
  </section>
);


export const Ponentes = () => (
  <section id="ponentes" className="section">
    Ponentes
  </section>
);

export const Contacto = () => (
  <section id="contacto" className="section">
    Contacto
  </section>
);

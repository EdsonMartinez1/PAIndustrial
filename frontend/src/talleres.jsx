


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ComponentesCSS/talleres.css';
import './ComponentesCSS/boton_ver_talleres.css';

// Datos de talleres (puedes cambiarlos o cargarlos desde backend después)
const talleres = 
[
  {
    id: 1,
    nombre: "Gestión de Proyectos con enfoque PMBOK y Liderazgo Profesional",
    Contacto: "fernandoortegagtz@gmail.com",
    instructor: "Juan Fernando Ortega Gutiérrez",
    horario: "Lunes, 16:00 - 18:00",
    aula: "Aula 63",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 2,
    nombre: "Sin nombre",
    Contacto: "sebislas99@gmail.com ",
    instructor: "Fernando Sebastián Islas Mercado",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula 64",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 3,
    nombre: "Kit de herramientas del profesional: de la teoria a la trazabilidad de materiales",
    Contacto: "Karla.ruvalcaba.luna@gmail.com",
    instructor: "Karla Alejandra Ruvalcaba Luna",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula 65",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 4,
    nombre: "Control De Calidad",
    Contacto: "cristoy_macias@hotmail.com",
    instructor: "Christopher Macias Estrada",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula 66",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 5,
    nombre: "Lean Manufacturing",
    Contacto: "Kevin.a.huerta.77@gmail.com",
    instructor: "Kevin Alexis Huerta González",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula 67",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 6,
    nombre: "Planeación y supervisión de proyectos",
    Contacto: "daniel.lpz.ing@gmail.com",
    instructor: "Daniel López Sosa",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula 68",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 7,
    nombre: "Cadena de suministro; planeacion de producción y materiales",
    Contacto: "diego_.aquino@hotmail.com.",
    instructor: "Diego Aquino Araiza",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula 69",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 8,
    nombre: "Lean manufacturing en taller de mantenimiento automotriz",
    Contacto: "jona.hdz.rmz02@gmail.com",
    instructor: "Jonathan Eduardo Hernandez Ramirez",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula 70",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 9,
    nombre: "Mejora continua y gestion de project management",
    Contacto: "ing.cruz1101@gmail.com",
    instructor: "Antonio Cruz López",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula 71",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 10,
    nombre: "Calidad en la industria automotriz",
    Contacto: "christiangabri.herreraponce@stellantis.com",
    instructor: "Christian Gabriel Herrera Ponce",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula 72",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 11,
    nombre: "Primer día: Los nuevos productos en la industria, Segundo día: Configuración y datos maestros en un ERP",
    Contacto: "mapilargtzo@yahoo.com",
    instructor: "Ma. Pilar Gutiérrez Olivares",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula 73",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 12,
    nombre: "7 herramientas de calidad",
    Contacto: "Ximenamoreno6406@gmail.com",
    instructor: "Ximena Moreno Valenzuela",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula 74",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 13,
    nombre: "Cadena de suministros: la logística como clave en la eficiencia de la industria actual",
    Contacto: "venegas.olivares.sebastian@gmail.com",
    instructor: "Sebastián Venegas Olivares",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula 75",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 14,
    nombre: "Mejora continua en la industria textil",
    Contacto: "diegoviveroita@gmail.com",
    instructor: "Diego Alberto Vivero Ibarra",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula 76",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 15,
    nombre: "Google apps para ingenieros industriales: Automatiza, optimiza y aplica lean manufacturing",
    Contacto: "marcoponce607@gmail.com",
    instructor: "Marco Antonio Ponce Marentes",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula 77",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 16,
    nombre: "Calidad en Acción: Estrategias para la Competitividad en Servicios",
    Contacto: "liliana.esqueda@aguascalientes.gob.mx ",
    instructor: "Liliana Esqueda Tagle",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula ",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 17,
    nombre: "Educación Financiera",
    Contacto: "",
    instructor: "María del Refugio Lara Herrera",
    horario: "Martes, 09:00 - 13:00",
    aula: "Aula 63",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 18,
    nombre: "Liderazgo Al",
    Contacto: "maciasfloriano@gmail.com",
    instructor: "Raúl Macías Floriano ",
    horario: "Martes, 09:00 - 13:00",
    aula: "Aula 64",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 19,
    nombre: "Resolución de problemas por medio de la metodología QC story",
    Contacto: "ccastilloluevano@gmail.com",
    instructor: "Claudia Castillo Luévano",
    horario: "Martes, 09:00 - 13:00",
    aula: "Aula 65",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 20,
    nombre: "Resistencia al cambio",
    Contacto: "david.silma@hotmail.com",
    instructor: "Josue David Silva maldonado",
    horario: "Martes, 09:00 - 13:00",
    aula: "Aula 66",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 21,
    nombre: "Los nuevos retos y paradigmas del ingeniero industrial",
    Contacto: "alanruizeduardogonzalez@hotmail.com ",
    instructor: "Alan Eduardo Ruiz González",
    horario: "Martes, 09:00 - 13:00",
    aula: "Aula 67",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 22,
    nombre: "AMEF & CP AIAG-VDA primera edición",
    Contacto: "delunaesparza@gmail.com",
    instructor: "Anhul Isai De Luna Esparza",
    horario: "Martes, 09:00 - 13:00",
    aula: "Aula 68",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 23,
    nombre: "Innovacion y cultura de mejora",
    Contacto: "andrealopezch@outlook.com",
    instructor: "Andrea Itzel Lopez Chavez",
    horario: "Martes, 09:00 - 13:00",
    aula: "Aula 69",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 24,
    nombre: "Monozukuri y Kaizen: El arte de crear valor con eficiencia",
    Contacto: "re-camacho@tachi-s.mx",
    instructor: "Rodrigo Enrique Camacho Pedroza",
    horario: "Martes, 09:00 - 13:00",
    aula: "Aula 70",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 25,
    nombre: "Procesos Clave en la Industria Automotriz con Enfoque en la Aplicación de ISO45001 y Gestión de Riesgos Laborales",
    Contacto: "Isaac.JaimeDeLaTorre1@nissan.com.mx",
    instructor: "Isaac Benjamín Jaime de la Torre",
    horario: "Martes, 09:00 - 13:00",
    aula: "Aula 71",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 26,
    nombre: "FALATA NOMBRE",
    Contacto: "lauraangieq@gmail.com",
    instructor: "Laura Angélica Quezada Chávez",
    horario: "Martes, 09:00 - 13:00",
    aula: "Aula 72",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 27,
    nombre: "Procesos que transforman ¿Cómo el ingeniero industrial puede cambiar el mundo?",
    Contacto: "esperanza.vela@rolcar.com.mx",
    instructor: "Esperanza Adriana Vela Macías",
    horario: "Martes, 09:00 - 13:00",
    aula: "Aula ",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 28,
    nombre: "Logística 4.0: La Ingeniería detrás de Amazon",
    Contacto: "Correo: burgosjalberto@gmail.com",
    instructor: "José Alberto Burgos González ",
    horario: "Martes, 09:00 - 13:00",
    aula: "Aula 73",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 29,
    nombre: "Mejora en la Cadena de Valor en los Productos y Servicios",
    Contacto: "filemon.munoz@soin3.com",
    instructor: "Filemón Muñoz Martínez",
    horario: "Martes, 09:00 - 13:00",
    aula: "Aula 74",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  },
  {
    id: 30,
    nombre: "FALTA NOMBRE",
    Contacto: "ylutiere@yluca.com",
    instructor: "Ylutiere Reyes Campos",
    horario: "Lunes, 15:00 - 19:00",
    aula: "Aula ",
    imagen: "https://i.imgur.com/xqwJrQ9.png"
  }
];


const Talleres = () => {
  const navigate = useNavigate();
  const [tallerSeleccionado, setTallerSeleccionado] = useState(null);

  return (
    <div className="nueva-pagina-container">
      <h1 className="nueva-pagina-title">Talleres de Ingeniería Industrial</h1>
      <p className="nueva-pagina-text">Explora los talleres que tenemos para ti 🚀</p>

      {/* Grid de talleres */}
      <div className="talleres-grid">
        {talleres.map((taller) => (
          <div 
            key={taller.id} 
            className="taller-card"
            onClick={() => setTallerSeleccionado(taller)}
          >
            <img src={taller.imagen} alt={taller.nombre} className="taller-img" />
            <h2 className="taller-nombre">{taller.nombre}</h2>
            
          </div>
        ))}
      </div>

      {/* Modal */}
      {tallerSeleccionado && (
        <div className="modal-overlay" onClick={() => setTallerSeleccionado(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{tallerSeleccionado.nombre}</h2>
            <p><strong>Instructor:</strong> {tallerSeleccionado.instructor}</p>
            <p><strong>Horario:</strong> {tallerSeleccionado.horario}</p>
            <p><strong>Aula:</strong> {tallerSeleccionado.aula}</p>
            <p><strong>Contacto:</strong> {tallerSeleccionado.Contacto}</p>
            <button onClick={() => setTallerSeleccionado(null)} className="modal-button">
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Botón para regresar */}
      <button
        onClick={() => navigate(-1)}
        className="nueva-pagina-button"
      >
        ← Regresar
      </button>
    </div>
  );
};

export default Talleres;


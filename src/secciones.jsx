// Secciones.js
import { useEffect, useState } from 'react';
import './App.css';


/*---------------
INICIO
----------------*/ 

export const Inicio = ({ titulo, descripcion, dataAos }) => (
  <section id="inicio" className="section inicio" data-aos={dataAos}>
    <h1>{titulo}</h1>
    <p>{descripcion}</p>
  </section>
);


/*---------------
HISTORIA
----------------*/ 

export const Historia = () => {
  const eventos = [
  {
    titulo: "Fundación del ITA",
    año: "1967",
    descripcion: "Se crea el Instituto Tecnológico de Aguascalientes, ofreciendo la carrera de Ingeniería Industrial en sus primeras modalidades."
  },
  {
    titulo: "Primera Generación de Egresados",
    año: "1974",
    descripcion: "Se gradúan los primeros ingenieros industriales del ITA en las especialidades de Mecánica y Electricidad."
  },
  {
    titulo: "Formación de la Academia de Ingeniería Industrial",
    año: "1975",
    descripcion: "Se establece formalmente la academia encargada del desarrollo académico de la carrera de Ingeniería Industrial."
  },
  {
    titulo: "Construcción de Laboratorios",
    año: "1980",
    descripcion: "Se inaugura el Laboratorio de Ingeniería de Métodos, fortaleciendo la práctica profesional en la carrera."
  },
  {
    titulo: "Reconocimiento Nacional ANFEI",
    año: "2024",
    descripcion: "El ITA es nombrado Mejor Escuela de Ingeniería en México por la ANFEI, con programas de Ingeniería Industrial acreditados nacional e internacionalmente."
  }
];


  return (
    <section id="historia" className="historia-wrapper">
      <h2 className="historia-title">Historia a través del tiempo</h2>
      <div className="historia-timeline">
        {eventos.map((evento, index) => (
          <div key={index} className="historia-evento">
            <div className="historia-linea-conectora" />
            <div className="historia-circulo">{index + 1}</div>
            <div className="historia-card">
              <h3 className="evento-titulo">{evento.titulo}</h3>
              <span className="evento-anio">{evento.año}</span>
              <p className="evento-desc">{evento.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/*
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
*/
/*---------------
LISTA EVENTOS
----------------*/ 
export const ListaEventos = () => (
  <section id="programas" className="programas-section">
    <p className="programas-subtitulo">NUESTROS PROGRAMAS</p>
    <h2 className="programas-titulo">Llevando tu educación al siguiente nivel</h2>
<div className="programas-grid">
  <div className="programa-item">
    <div className="icono icono-circulos"></div>
    <h3>Programas Académicos</h3>
    <p>Explora nuevas ideas, comparte conocimientos y aprende de los mejores. Únete a nuestras conferencias, talleres y encuentros con expertos que transformarán tu forma de pensar.</p>
  </div>
  <div className="programa-item">
    <div className="icono icono-paloma"></div>
    <h3>Orientación Profesional</h3>
    <p>Descubre tu camino con charlas inspiradoras, experiencias reales y asesoría personalizada que te impulsarán hacia un futuro brillante.</p>
  </div>
  <div className="programa-item">
    <div className="icono icono-cuadros"></div>
    <h3>Desarrollo Social</h3>
    <p>Conecta, compite y crece. Participa en torneos, eventos recreativos y actividades que unen el aprendizaje con la diversión y el compañerismo.</p>
  </div>
</div>


  </section>
);


/*---------------
PONENTES
----------------*/ 

export const Ponentes = () => {
  const [ponenteSeleccionado, setPonenteSeleccionado] = useState(null);

  const ponentes = [
    {
      nombre: "GABRIELA GUADALUPEZ ALCANTAR",
      imagen: "./ponentes/ponente1.jpg",
      titulo: "Aplicaciones de la ingeniería industrial",
      carrera: "Ingeniero industrial",
      descripcion: "Explora cómo se aplican principios de ingeniería industrial en sectores clave."
    },
    {
      nombre: "IVANNA SOPHIA CALZADA MARTINEZ",
      imagen: "./ponentes/ponente2.jpg",
      titulo: "Conceptos y usos de IA para la ingeniería industrial",
      descripcion: "Una introducción práctica a la inteligencia artificial en la ingeniería industrial."
    },
    {
      nombre: "JAVIER LOPEZ RODRIGUEZ",
      imagen: "./ponentes/ponente3.jpg",
      titulo: "Casos multidisciplinarios para la ingeniería industrial",
      descripcion: "Análisis de estudios de caso donde convergen distintas disciplinas en la industria."
    },
    {
      nombre: "RODOLFO PILATES",
      imagen: "./ponentes/ponente3.jpg",
      titulo: "Casos multidisciplinarios para la ingeniería industrial",
      descripcion: "Otra perspectiva sobre integración de conocimientos en ingeniería."
    },
    {
      nombre: "JESUS DE SANTIAGO LENK",
      imagen: "./ponentes/ponente3.jpg",
      titulo: "Casos multidisciplinarios para la ingeniería industrial",
      descripcion: "Visión amplia sobre colaboración entre áreas en proyectos industriales."
    }
  ];

  const abrirModal = (ponente) => {
    setPonenteSeleccionado(ponente);
  };

  const cerrarModal = () => {
    setPonenteSeleccionado(null);
  };

  return (
    <section id="ponentes" className="section section-ponentes">
      <div className="cartas-container">
        {ponentes.map((ponente, index) => (
          <section key={index} className="carta" tabIndex="0" onClick={() => abrirModal(ponente)}>
            <div className="tooltip">{ponente.nombre}</div>
            <img src={ponente.imagen} alt={ponente.nombre} className="txt-image" />
            <div className="txt-body">
              <p className="txt-titulo">{ponente.titulo}</p>
            </div>
          </section>
        ))}
      </div>

      {ponenteSeleccionado && (
        <div className="modal" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={cerrarModal}>&times;</span>
            <h2 id="modal-title">{ponenteSeleccionado.titulo}</h2>
            <p id="modal-description">{ponenteSeleccionado.descripcion}</p>
            <p><strong>Ponente:</strong> {ponenteSeleccionado.nombre}</p>
          </div>
        </div>
      )}
    </section>
  );
};


/*---------------
CONTACTO
----------------*/ 


// Componente de información de contacto
// Componente de información de contacto
export const InfoContacto = ({ titulo, subtitulo, direccion, email, telefono, dataAos }) => (
  <div className="info-contacto" data-aos={dataAos}>
    <h5>{titulo}</h5>
    <h2>{subtitulo}</h2>
    <p>{direccion}</p>
    <p>{email}</p>
    <p>{telefono}</p>
    <div className="social-icons">
      <i className="fab fa-facebook"></i>
      <i className="fab fa-twitter"></i>
    </div>

    <div className="mapa-container">
     <iframe
      title="Ubicación ITAB Aguascalientes"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3731.366132914335!2d-102.26259533885168!3d21.87844867056218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1717621234567!5m2!1ses!2smx"
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
/>

    </div>
  </div>
);


// Componente de formulario de contacto (visual vacío)
export const FormularioContacto = ({ dataAos }) => {
  return (
    <form className="formulario-contacto" data-aos={dataAos}>
      {/* Recuadro visual sin campos */}
    </form>
  );
};

export const Contacto = ({
  titulo,
  subtitulo,
  direccion,
  email,
  telefono,
  dataAosInfo,
  dataAosForm,
}) => {
  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-grid">
        <InfoContacto
          titulo={titulo}
          subtitulo={subtitulo}
          direccion={direccion}
          email={email}
          telefono={telefono}
          dataAos={dataAosInfo}
        />
        <FormularioContacto dataAos={dataAosForm} />
      </div>
    </section>
  );
};






/*---------------
RELOJ
----------------*/ 



/* export const Reloj = () => {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(timer); // Limpieza al desmontar
  }, []);

  const formatoHora = hora.toLocaleTimeString();

  return (
    <section id="reloj" className="reloj-container">
      <h2 className="reloj-titulo">Reloj en Vivo</h2>
      <p className="reloj-hora">{formatoHora}</p>
    </section>
  );

};

*/ 

/*---------------
LEGADO DESTACADO
----------------*/

export const Legado = () => (
  <section id="legado" className="legado-container">
    <h2 className="legado-titulo">50 Años de Legado Académico</h2>
    <div className="legado-grid">
      <div className="legado-card">
        <h3>50</h3>
        <p>Años de excelencia académica</p>
      </div>
      <div className="legado-card">
        <h3>150</h3>
        <p>Profesores comprometidos</p>
      </div>
      <div className="legado-card">
        <h3>20,000+</h3>
        <p>Graduados exitosos</p>
      </div>
      <div className="legado-card">
        <h3>Aguascalientes</h3>
        <p>Corazón de la educación tecnológica</p>
      </div>
    </div>
  </section>
);

/*---------------
CONTADOR REGRESIVO
----------------*/


export const ContadorRegresivo = ({ fechaObjetivo }) => {
  const calcularTiempoRestante = () => {
    const ahora = new Date().getTime();
    const destino = new Date(fechaObjetivo).getTime();
    const diferencia = destino - ahora;

    const segundos = Math.floor((diferencia / 1000) % 60);
    const minutos = Math.floor((diferencia / 1000 / 60) % 60);
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    return { dias, horas, minutos, segundos };
  };

  const [tiempoRestante, setTiempoRestante] = useState(calcularTiempoRestante());

 useEffect(() => {
  const calcularTiempoRestante = () => {
    const ahora = new Date().getTime();
    const destino = new Date(fechaObjetivo).getTime();
    const diferencia = destino - ahora;

    const segundos = Math.floor((diferencia / 1000) % 60);
    const minutos = Math.floor((diferencia / 1000 / 60) % 60);
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    return { dias, horas, minutos, segundos };
  };

  const intervalo = setInterval(() => {
    setTiempoRestante(calcularTiempoRestante());
  }, 1000);

  return () => clearInterval(intervalo);
}, [fechaObjetivo]);

  return (
    <section className="contador-contenedor">
      <h2 className="contador-titulo">Cuenta regresiva al evento principal</h2>
      <div className="contador-tiempo-contenedor">
        {['dias', 'horas', 'minutos', 'segundos'].map((unidad) => (
          <div key={unidad} className="contador-unidad-contenedor">
            <div className="contador-numero">{tiempoRestante[unidad].toString().padStart(2, '0')}</div>
            <div className="contador-etiqueta">{unidad.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

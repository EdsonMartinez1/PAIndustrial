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
        <p>Haz clic aquí para conocer más sobre nuestros programas educativos.</p>
      </div>
      <div className="programa-item">
        <div className="icono icono-paloma"></div>
        <h3>Orientación Profesional</h3>
        <p>Descubre cómo nuestra orientación profesional puede impulsar tu futuro.</p>
      </div>
      <div className="programa-item">
        <div className="icono icono-cuadros"></div>
        <h3>Desarrollo Integral</h3>
        <p>Conoce cómo nuestro enfoque integral en la formación académica te prepara para todo.</p>
      </div>
    </div>

  </section>
);


/*---------------
PONENTES
----------------*/ 

export const Ponentes = () => (
  <section id="ponentes" className="section">
    Ponentes
  </section>
);


/*---------------
CONTACTO
----------------*/ 


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
  </div>
);

// Componente de formulario de contacto
export const FormularioContacto = ({ mensajeGracias, dataAos }) => {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensajeEnviado(true);
  };

  return (
    <form className="formulario-contacto" onSubmit={handleSubmit} data-aos={dataAos}>
      <div className="nombre-apellido">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
      </div>
      <input type="email" placeholder="Correo electrónico *" required />
      <textarea placeholder="Déjanos un mensaje" rows="4"></textarea>
      <button type="submit">Enviar</button>
      {mensajeEnviado && <p className="gracias">{mensajeGracias}</p>}
    </form>
  );
};

// Componente principal con diseño limpio
export const Contacto = ({
  titulo,
  subtitulo,
  direccion,
  email,
  telefono,
  mensajeGracias,
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
        <FormularioContacto
          mensajeGracias={mensajeGracias}
          dataAos={dataAosForm}
        />
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

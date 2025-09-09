// secciones.jsx

import { useNavigate } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect, useCallback } from "react";

/*---------------  INICIO ----------------*/
export const Inicio = ({ titulo, descripcion, dataAos }) => (
  <section id="inicio" className="section inicio" data-aos={dataAos}>
    <h1>{titulo}</h1>
    <p>{descripcion}</p>
  </section>
);

/*---------------  HISTORIA ----------------*/
export const Historia = () => {
  const eventos = [
    {
      titulo: "Fundación del ITA",
      año: "1967",
      descripcion:
        "Se crea el Instituto Tecnológico de Aguascalientes, ofreciendo la carrera de Ingeniería Industrial en sus primeras modalidades."
    },
    {
      titulo: "Primera Generación de Egresados",
      año: "1974",
      descripcion:
        "Se gradúan los primeros ingenieros industriales del ITA en las especialidades de Mecánica y Electricidad."
    },
    {
      titulo: "Formación de la Academia de Ingeniería Industrial",
      año: "1975",
      descripcion:
        "Se establece formalmente la academia encargada del desarrollo académico de la carrera de Ingeniería Industrial."
    },
    {
      titulo: "Construcción de Laboratorios",
      año: "1980",
      descripcion:
        "Se inaugura el Laboratorio de Ingeniería de Métodos, fortaleciendo la práctica profesional en la carrera."
    },
    {
      titulo: "Reconocimiento Nacional ANFEI",
      año: "2024",
      descripcion:
        "El ITA es nombrado Mejor Escuela de Ingeniería en México por la ANFEI, con programas de Ingeniería Industrial acreditados nacional e internacionalmente."
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

/*---------------  LISTA EVENTOS ----------------*/
export const ListaEventos = () => {
  const navigate = useNavigate();

  return (
    <section id="programas" className="programas-section">
      <p className="programas-subtitulo">NUESTROS PROGRAMAS</p>
      <h2 className="programas-titulo">Llevando tu educación al siguiente nivel</h2>

      <div className="programas-grid">
        <div className="programa-item">
          <div className="icono icono-circulos"></div>
          <h3>Programas Académicos</h3>
          <p>
            Explora nuevas ideas, comparte conocimientos y aprende de los
            mejores. Únete a nuestras conferencias, talleres y encuentros con
            expertos que transformarán tu forma de pensar.
          </p>
        </div>
        <div className="programa-item">
          <div className="icono icono-paloma"></div>
          <h3>Orientación Profesional</h3>
          <p>
            Descubre tu camino con charlas inspiradoras, experiencias reales y
            asesoría personalizada que te impulsarán hacia un futuro brillante.
          </p>
        </div>
        <div className="programa-item">
          <div className="icono icono-cuadros"></div>
          <h3>Desarrollo Social</h3>
          <p>
            Conecta, compite y crece. Participa en torneos, eventos recreativos
            y actividades que unen el aprendizaje con la diversión y el
            compañerismo.
          </p>
        </div>
      </div>

      {/* Botón con navigate */}
      <div className="text-center mt-6">
        <button
          onClick={() => navigate('/talleres-industrial')}
          className="ver-programas-button"
        >
          Ver Talleres
        </button>
      </div>
    </section>
  );
};

/*---------------  PONENTES ----------------*/
export const Ponentes = () => {
  const [ponenteSeleccionado, setPonenteSeleccionado] = useState(null);

  const ponentes = [
    {
      nombre: "LUIS SOCONINI",
      imagen: "./ponentes/ponente1.jpg",
      titulo:
        "Metodología Lean Six Sigma e IA 4.0: innovación y Certificación para la competitividad Global",
      carrera: "Director General de Lean Six Sigma Institute",
      descripcion:
        "Explora cómo se aplican principios de ingeniería industrial en sectores clave.",
      fecha: "Miércoles 15 de octubre, 13:00 hrs."
    },
    {
      nombre: "ABRAHAM HERNÁNDEZ",
      imagen: "./ponentes/ponente2.jpg",
      titulo: "Innovación y Valor en la Logística",
      carrera: "Gerente Regional de Ing. Industrial NPW Nissan North America",
      descripcion:
        "Una introducción práctica a la inteligencia artificial en la ingeniería industrial.",
      fecha: "Miércoles 15 de octubre, 16:00 hrs"
    },
    {
      nombre: "ALEJANDRO LARA",
      imagen: "./ponentes/ponente3.jpg",
      titulo:
        "Innovación, Liderazgo y Disciplina: Claves de un Camino Profesional",
      carrera:
        "Director de control de producción y Cadena de Suministro - COMPAS",
      descripcion:
        "Análisis de estudios de caso donde convergen distintas disciplinas en la industria.",
      fecha: "Jueves 16 de octubre, 16:00 hrs"
    },
    {
      nombre: "RODRIGO MAGALLANES DEL RIO",
      imagen: "./ponentes/ponente3.jpg",
      titulo:
        "Del caos al control: estrategias para transformar la crisis en éxito",
      carrera: "Head of Operations (Continental)",
      descripcion:
        "Otra perspectiva sobre integración de conocimientos en ingeniería.",
      fecha: "Viernes 17 de octubre, 13:00 hrs"
    },
    {
      nombre: "ROMEO MUÑOZ",
      imagen: "./ponentes/ponente3.jpg",
      titulo: "Kikubari Kaizen: el detalle invisible que transforma la manufactura",
      carrera: "Consultor CX 6 sigma y NPS",
      descripcion:
        "Visión amplia sobre colaboración entre áreas en proyectos industriales.",
      fecha: "Jueves 16 de octubre, 13:00 hrs"
    },
    {
      nombre: "PANEL",
      imagen: "./ponentes/ponente3.jpg",
      titulo: "Mujeres Industriales: Legado y Futuro",
      carrera: "",
      descripcion:
        "Visión amplia sobre colaboración entre áreas en proyectos industriales.",
      fecha: "Martes 14 de octubre, 19:00 hrs"
    },
    {
      nombre: "CONFERENCIAS VIRTUALES",
      imagen: "./ponentes/ponente3.jpg",
      titulo: "Egresados en la Modalidad a Distancia",
      carrera: "Consultor CX 6 sigma y NPS",
      descripcion:
        "Visión amplia sobre colaboración entre áreas en proyectos industriales.",
      fecha: "Lunes 13 al Viernes 17 de octubre, 12:00 hrs"
    }
  ];

  const abrirModal = (ponente) => setPonenteSeleccionado(ponente);
  const cerrarModal = () => setPonenteSeleccionado(null);

  return (
    <section id="ponentes" className="section section-ponentes">
      <div className="cartas-container">
        {ponentes.map((ponente, index) => (
          <section
            key={index}
            className="carta"
            tabIndex="0"
            onClick={() => abrirModal(ponente)}
          >
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
            <span className="close" onClick={cerrarModal}>
              &times;
            </span>
            <p className="modal-date">{ponenteSeleccionado.fecha}</p>
            <h2 id="modal-title">{ponenteSeleccionado.titulo}</h2>
            <p id="modal-description">{ponenteSeleccionado.descripcion}</p>
            <p>
              <strong>Ponente:</strong> {ponenteSeleccionado.nombre}
            </p>
            <p>{ponenteSeleccionado.carrera}</p>
          </div>
        </div>
      )}
    </section>
  );
};

/*---------------   REGISTRO COMPLETO ----------------*/
export const Registro = () => {
  const [modalRegistroAbierto, setModalRegistroAbierto] = useState(false);
  const [modalClavesAbierto, setModalClavesAbierto] = useState(false);
  const [usuario, setUsuario] = useState({});
  const [clavesAcceso, setClavesAcceso] = useState({ usuario: "", password: "" });
  const [mensajeBackend, setMensajeBackend] = useState("");

  const abrirRegistro = () => setModalRegistroAbierto(true);
  const cerrarRegistro = () => setModalRegistroAbierto(false);
  const abrirClaves = () => setModalClavesAbierto(true);
  const cerrarClaves = () => setModalClavesAbierto(false);

  const hashPassword = async (texto) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(texto);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    const form = e.target;
    const datos = {
      nombre: form.nombre.value,
      apellidoPaterno: form.apellidoPaterno.value,
      apellidoMaterno: form.apellidoMaterno.value,
      curp: form.curp.value,
      fechaNacimiento: form.fechaNacimiento.value,
      nacionalidad: form.nacionalidad.value,
      codigoControl: form.codigoControl.value,
      correo: form.correo.value,
      telefono: form.telefono.value,
    };

    const curpPrimeros8 = datos.curp.slice(0, 8);
    const passwordHasheado = await hashPassword(curpPrimeros8);

    setUsuario(datos);
    setClavesAcceso({ usuario: datos.correo, password: passwordHasheado });

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/api/enviar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...datos, password: passwordHasheado }),
      });

      const data = await response.json();
      setMensajeBackend(data.mensaje);

      cerrarRegistro();
      abrirClaves();
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      setMensajeBackend("Error al conectar con el servidor.");
    }
  };

  return (
    <section id="registro" className="section-registro">
      <div className="registro-container">
        <p>
          ¿Eres egresado del <strong>Instituto Tecnológico de Aguascalientes</strong> en la carrera de Industrial? Haz clic en el botón de abajo:
        </p>
        <button className="registro-btn" onClick={abrirRegistro}>
          ¡Inscríbete aquí!
        </button>
      </div>

      {modalRegistroAbierto && (
        <div className="modal" onClick={cerrarRegistro}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={cerrarRegistro}>&times;</span>
            <h2>Registro de Egresados</h2>
            <form className="form-registro" onSubmit={handleRegistro}>
              <input type="text" name="nombre" placeholder="Nombre" required />
              <input type="text" name="apellidoPaterno" placeholder="Apellido Paterno" required />
              <input type="text" name="apellidoMaterno" placeholder="Apellido Materno" required />
              <input type="text" name="curp" placeholder="CURP" required />
              <input type="date" name="fechaNacimiento" required />
              <input type="text" name="nacionalidad" placeholder="Nacionalidad" required />
              <input type="text" name="codigoControl" placeholder="Código de Control" required />
              <input type="email" name="correo" placeholder="Correo" required />
              <input type="tel" name="telefono" placeholder="Teléfono" required />
              <button type="submit">Registrar</button>
            </form>
          </div>
        </div>
      )}

      {modalClavesAbierto && (
        <div className="modal" onClick={cerrarClaves}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={cerrarClaves}>&times;</span>
            <h2>Claves de Acceso</h2>
            <p>¡Felicidades {usuario.nombre}!</p>
            <p>{mensajeBackend}</p>
            <p><strong>Usuario:</strong> {clavesAcceso.usuario}</p>
            <p><strong>Contraseña:</strong> {clavesAcceso.password}</p>
          </div>
        </div>
      )}
    </section>
  );
};

/*---------------  CONTACTO ----------------*/
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

export const FormularioContacto = ({ dataAos }) => (
  <form className="formulario-contacto" data-aos={dataAos}>
    {/* Recuadro visual sin campos */}
  </form>
);

export const Contacto = ({ titulo, subtitulo, direccion, email, telefono, dataAosInfo, dataAosForm }) => (
  <>
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

    <section id="contacto" className="blog-section">
      <div className="blog-container">
        <p>
          Descubre las últimas noticias y artículos sobre el
          <span> Instituto Tecnológico de Aguascalientes</span>.
        </p>
        <a href="https://ita40.blogspot.com/2024/09/" className="blog-btn">Visítanos en →</a>
      </div>
    </section>
  </>
);

/*---------------  LEGADO DESTACADO ----------------*/
export const Legado = () => (
  <section id="legado" className="legado-container">
    <h2 className="legado-titulo">50 Años de Legado Académico</h2>
    <div className="legado-grid">
      <div className="legado-card">
        <h3>50</h3>
        <p>Años de excelencia académica</p>
      </div>
      <div className="legado-card">
        <h3>76</h3>
        <p>Profesores comprometidos</p>
      </div>
      <div className="legado-card">
        <h3>4,800+</h3>
        <p>Graduados exitosos</p>
      </div>
      <div className="legado-card">
        <h3>Aguascalientes</h3>
        <p>Corazón de la educación tecnológica</p>
      </div>
    </div>
  </section>
);



/*---------------  CONTADOR REGRESIVO ----------------*/
export const ContadorRegresivo = ({ fechaObjetivo }) => {
  const calcularTiempoRestante = useCallback(() => {
    const ahora = new Date().getTime();
    const destino = new Date(fechaObjetivo).getTime();
    const diferencia = destino - ahora;

    const segundos = Math.floor((diferencia / 1000) % 60);
    const minutos = Math.floor((diferencia / 1000 / 60) % 60);
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    return { dias, horas, minutos, segundos };
  }, [fechaObjetivo]); // 👈 depende solo de la fecha

  const [tiempoRestante, setTiempoRestante] = useState(calcularTiempoRestante());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempoRestante(calcularTiempoRestante());
    }, 1000);

    return () => clearInterval(intervalo);
  }, [calcularTiempoRestante]); // 👈 ya no marca error

  return (
    <section className="contador-contenedor">
      <h2 className="contador-titulo">Cuenta regresiva al evento principal</h2>
      <div className="contador-tiempo-contenedor">
        {["dias", "horas", "minutos", "segundos"].map((unidad) => (
          <div key={unidad} className="contador-unidad-contenedor">
            <div className="contador-numero">
              {tiempoRestante[unidad].toString().padStart(2, "0")}
            </div>
            <div className="contador-etiqueta">{unidad.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

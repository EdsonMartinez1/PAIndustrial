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
      nombre: "ROMEO MUÑOZ",
      imagen: "./ponentes/RomMuñozpng.png",
      titulo: "Kikubari Kaizen: el detalle invisible que transforma la manufactura",
      carrera: "Consultor CX 6 sigma y NPS",
      descripcion:
        "Visión amplia sobre colaboración entre áreas en proyectos industriales.",
      fecha: "Jueves 16 de octubre, 13:00 hrs"
    },
    {
      nombre: "ABRAHAM HERNÁNDEZ",
      imagen: "./ponentes/AbraHern.jpg",
      titulo: "Innovación y Valor en la Logística",
      carrera: "Gerente Regional de Ing. Industrial NPW Nissan North America",
      descripcion:
        "Una introducción práctica a la inteligencia artificial en la ingeniería industrial.",
      fecha: "Miércoles 15 de octubre, 16:00 hrs"
    },
    {
      nombre: "ALEJANDRO LARA",
      imagen: "./ponentes/AleLara.png",
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
      imagen: "./ponentes/RodMaga.png",
      titulo:
        "Del caos al control: estrategias para transformar la crisis en éxito",
      carrera: "Head of Operations (Continental)",
      descripcion:
        "Otra perspectiva sobre integración de conocimientos en ingeniería.",
      fecha: "Viernes 17 de octubre, 13:00 hrs"
    },

    {
      nombre: "PANEL",
      imagen: "https://i.imgur.com/xqwJrQ9.png",
      titulo: "Mujeres Industriales: Legado y Futuro",
      carrera: "",
      descripcion:
        "Visión amplia sobre colaboración entre áreas en proyectos industriales.",
      fecha: "Martes 14 de octubre, 19:00 hrs"
    },
    {
      nombre: "CONFERENCIAS VIRTUALES",
      imagen: "https://i.imgur.com/xqwJrQ9.png",
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
  const [modal1Abierto, setModal1Abierto] = useState(false);
  const [modal3Abierto, setModal3Abierto] = useState(false);
  const [modal2Abierto, setModal2Abierto] = useState(false);
  const [modal4Abierto, setModal4Abierto] = useState(false);
  const [modal5Abierto, setModal5Abierto] = useState(false);
  const [modal6Abierto, setModal6Abierto] = useState(false);
  const [modal7Abierto, setModal7Abierto] = useState(false);
  const abrirModal1 = () => setModal1Abierto(true);
  const cerrarModal1 = () => setModal1Abierto(false);
  const abrirModal6 = () => setModal6Abierto(true);
  const cerrarModal6 = () => setModal6Abierto(false);

  const abrirModal2 = () => {
    setModal1Abierto(false); // Cierra el modal 1 si está abierto
    setModal2Abierto(true);
  };
  const cerrarModal2 = () => setModal2Abierto(false);

  const abrirModal3 = () => {
    setModal1Abierto(false); // Cierra el modal 1 si está abierto
    setModal3Abierto(true);
  };
  const cerrarModal3 = () => setModal3Abierto(false);
    const abrirModal4 = () => {
    setModal2Abierto(false); // Cierra el modal 1 si está abierto
    setModal4Abierto(true);
  };
  const cerrarModal4 = () => setModal4Abierto(false);
  const abrirModal5 = () => {
    setModal4Abierto(false); // Cierra el modal 1 si está abierto
    setModal5Abierto(true);
  };
  const cerrarModal5 = () => setModal5Abierto(false);
    const abrirModal7 = () => {
    setModal6Abierto(false); // Cierra el modal 1 si está abierto
    setModal7Abierto(true);
  };
  const cerrarModal7 = () => setModal7Abierto(false);


  const [usuario, setUsuario] = useState({});
  const [clavesAcceso, setClavesAcceso] = useState({ usuario: "", password: "" });
  const [mensajeBackend, setMensajeBackend] = useState("");
  const [apiExterna, setApiExterna] = useState(null);

  // Valida un objeto de datos con reglas
  const validarCampos = (datos, reglas) => {
    for (const campo in reglas) {
      const valor = datos[campo]?.trim();

      // Campo requerido
      if (reglas[campo].required && !valor) {
        return `El campo "${campo}" es obligatorio.`;
      }

      // Email válido
      if (reglas[campo].type === "email" && valor) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(valor)) {
          return `El campo "${campo}" debe ser un correo válido.`;
        }
      }

      // Solo números
      if (reglas[campo].type === "number" && valor) {
        if (!/^\d+$/.test(valor)) {
          return `El campo "${campo}" debe contener solo números.`;
        }
      }

      // Longitud mínima
      if (reglas[campo].minLength && valor.length < reglas[campo].minLength) {
        return `El campo "${campo}" debe tener al menos ${reglas[campo].minLength} caracteres.`;
      }

      // Longitud máxima
      if (reglas[campo].maxLength && valor.length > reglas[campo].maxLength) {
        return `El campo "${campo}" no debe exceder ${reglas[campo].maxLength} caracteres.`;
      }
    }
    return null; // Sin errores
  };
  // Login de personal Externo
  const handlelogin = async (e) => {
  e.preventDefault();
  const form = e.target;
  const correo = form.correo.value;
  const password = form.password.value;
  const numeroControl = form.numeroControl.value;

  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    // Enviamos los datos como query params
    const login = await fetch(
      `${apiUrl}/api/login?correo=${encodeURIComponent(correo)}&password=${encodeURIComponent(password)}&numeroControl=${encodeURIComponent(numeroControl)}`
    );

    const respuesta = await login.json();
    if (respuesta.mensaje === "Credenciales inválidas" || respuesta.mensaje === "Error en login, porfavor vuelve a intentar" || respuesta.mensaje === "Correo, contraseña y número de control son obligatorios" ) {
      setMensajeBackend(respuesta.mensaje);
      return;
    }
    
    setMensajeBackend(respuesta.mensaje);
    setApiExterna(respuesta);


    cerrarModal2();
    abrirModal4();
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    setMensajeBackend("Error al conectar con el servidor.");
  }
  };
  // Registro al evento para alumnos
const handleForumularioAlumno = async (e) => {
    e.preventDefault();
  const form = e.target;

  const datos = {
    nombre: form.nombre.value,
    apellidoPaterno: form.apellidoPaterno.value,
    apellidoMaterno: form.apellidoMaterno.value,
    numeroControl: form.numeroControl.value,
    semestre: form.semestre.value,
    tallerElegir: form.tallerElegir.value,
    nss: form.nss.value,
    correo: form.correo.value,
    nombreEme: form.nombreEme.value,
    apellidoPaternoEme: form.apellidoPaternoEme.value,
    apellidoMaternoEme: form.apellidoMaternoEme.value,
    telefonoEme: form.telefonoEme.value,
    tallaChaleco: form.tallaChaleco.value,
    tallaPlayera: form.tallaPlayera.value,
  };

  // Validaciones
  const error = validarCampos(datos, {
    nombre: { required: true, minLength: 3 },
    apellidoPaterno: { required: true },
    apellidoMaterno: { required: true },
    numeroControl: { required: true, type: "number", minLength: 8 },
    semestre: { required: true, type: "number" },
    tallerElegir: { required: true },
    nss: { required: true, type: "number", minLength: 10 },
    correo: { required: true, type: "email" },
    nombreEme: { required: true },
    apellidoPaternoEme: { required: true },
    apellidoMaternoEme: { required: true },
    telefonoEme: { required: true, type: "number", minLength: 10, maxLength: 15 },
    tallaChaleco: { required: true },
    tallaPlayera: { required: true },
  });

  if (error) {
    setMensajeBackend(error);
    return;
  }

  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await fetch(`${apiUrl}/api/alumno`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    const data = await response.json();

    if (data.mensaje === "Error al registrar información, favor de intentarlo de nuevo") {
      setMensajeBackend(data.mensaje);
      return;
    }setMensajeBackend(data.mensaje || "Registro de alumno guardado correctamente");
    cerrarModal7();
    abrirModal5();
  } catch (error) {
    console.error("Error al enviar datos de alumno:", error);
    setMensajeBackend("Error al conectar con el servidor PUTO.");
  }
};
  // Registro al evento para externos
const handleForumularioExterno = async (e) => {
    e.preventDefault();
    const form = e.target;
    
      const datos = {
    nombre: form.nombre.value,
    apellidoPaterno: form.apellidoPaterno.value,
    apellidoMaterno: form.apellidoMaterno.value,
    numeroControl: form.numeroControl.value,
    generacion: form.generacion.value,
    correo: form.correo.value,
    telefono: form.telefono.value,
    tallaChaleco: form.tallaChaleco.value,
    tallaPlayera: form.tallaPlayera.value,
  };

  // Validaciones
  const error = validarCampos(datos, {
    nombre: { required: true, minLength: 3 },
    correo: { required: true, type: "email" },
    telefono: { required: true, type: "number", minLength: 10, maxLength: 15 },
    tallaChaleco: { required: true },
    tallaPlayera: { required: true },
  });

  if (error) {
    setMensajeBackend(error);
    return;
  }

  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await fetch(`${apiUrl}/api/externo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    const data = await response.json();
    if (data.mensaje === "Error al registrar informacion, favor de intentarlo de nuevo") {
      setMensajeBackend(data.mensaje);
      return;
    }
    setMensajeBackend(data.mensaje || "Registro enviado correctamente");
    cerrarModal4();
    abrirModal5();
  } catch (error) {
    console.error("Error al enviar datos externos:", error);
    setMensajeBackend("Error al conectar con el servidor.");
  }
};
const descargarExcel = async () => {
  try {
    const response = await fetch("http://localhost:5001/api/exportar-excel");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "alumnos_externos.xlsx";
    a.click();
  } catch (error) {
    console.error("Error al descargar Excel:", error);
  }
};
  // Login para alumnos
const handlealumno = async (e) => {
  e.preventDefault();
  const form = e.target;
  const numeroControl = form.numeroControl.value;

  try {
    if (numeroControl === "878787") {
      descargarExcel();
      return; // Evita abrir modal y romper apiExterna
    }

    const apiUrl = import.meta.env.VITE_API_URL;
    const buscar = await fetch(
      `${apiUrl}/api/loginAlumno?numeroControl=${encodeURIComponent(numeroControl)}`
    );

    const respuesta = await buscar.json();

    if (
      respuesta.mensaje === "Número de control corresponde a un externo. Intenta en el otro botón." ||
      respuesta.mensaje === "Número de control no asignado a un pago"
    ) {
      setMensajeBackend(respuesta.mensaje);
      return;
    }

    setMensajeBackend(respuesta.mensaje);
    setApiExterna(respuesta);

    cerrarModal6();
    abrirModal7();
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    setMensajeBackend("Error al conectar con el servidor.");
  }
};
  //Registro en la plataforma para externo
  const handleRegistro = async (e) => {
    e.preventDefault();
    const form = e.target;
    const datos = {
      nombre: form.nombre.value,
      curp: form.curp.value,
      correo: form.correo.value,
    };
      const error = validarCampos(datos, {
    nombre: { required: true, minLength: 3 },
    curp: { required: true, minLength: 18, maxLength: 18 },
    correo: { required: true, type: "email" },
  });

  if (error) {
    setMensajeBackend(error);
    return;
  }
    const curpPrimeros8 = datos.curp.slice(0, 8);

    setUsuario(datos);
    setClavesAcceso({ usuario: datos.correo, password: curpPrimeros8 });

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/api/enviar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...datos, password: curpPrimeros8 }),
      });

      const data = await response.json();
      if (data.mensaje === "Credenciales inválidas") {
        setMensajeBackend(data.mensaje);
        return;
      }
    setMensajeBackend(data.mensaje);
    setApiExterna(data.apiExterna);
    cerrarModal1();
    abrirModal3();
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      setMensajeBackend("Error al conectar con el servidor.");
    }


  };

  return (
    <section id="registro" className="section-registro">
      <div className="registro-container">
        <p className="registro-text">
          ¿Formas parte de la comunidad del 
          <strong> Instituto Tecnológico de Aguascalientes</strong> en la carrera de Ingeniería Industrial, 
          o eres un invitado externo interesado en participar en este evento?  
          Selecciona la opción correspondiente para continuar con tu registro:
        </p>

        <button className="registro-btn" onClick={abrirModal1}>
          Registro para Invitados Externos
        </button>
        
        <button className="registro-btn" onClick={abrirModal6}>
          Registro para Comunidad ITA
        </button>
      </div>
      {/* Registro */}
      {modal1Abierto && (
        <div className="modal-registro" onClick={cerrarModal1}>
          <div className="modal-content-registro" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => {cerrarModal1();window.location.reload();}}>&times;</span>
            {mensajeBackend && (
            <div className="notificacion-error">
              <p>{mensajeBackend}</p>
            </div>
            )}
            <h2>Registro de Egresados</h2>
            <p className="aviso-privacidad">
              Este registro es para uso exclusivo de la generación de la papeleta de pago.
              En caso de ser estudiante del ITA, toda la información será manejada en tu
              departamento correspondiente.
            </p>
            <form className="form-registro" onSubmit={handleRegistro}>
              <div className="form-group">
                <label>Nombre Completo</label>
                <input type="text" name="nombre" placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <label>CURP</label>
                <input type="text" name="curp" placeholder="CURP" required />
              </div>
              <div className="form-group">
                <label>Correo</label>
                <input type="email" name="correo" placeholder="Correo electrónico"  />
              </div>
              <div style={{ marginTop: '15px' }}>
                <button type="submit">Iniciar registro</button>
                <p>si ya cuentas con un cuenta haz clik aqui, <a style={{cursor: "pointer"}} onClick={abrirModal2}>Iniciar Sesión</a></p>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Inicio Sesion */}
      {modal2Abierto && (
        <div className="modal-registro" onClick={cerrarModal2}>
          <div className="modal-content-registro" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => {cerrarModal2();window.location.reload();}}>&times;</span>
            {mensajeBackend && (
              <div className="notificacion-error">
                <p>{mensajeBackend}</p>
              </div>
            )}
            <h2>Inicio de Sesión</h2>
            <p>Ingresa con tu correo y contraseña para acceder y revisar el estado de tu pago.</p>
            <form className="form-login" onSubmit={handlelogin}>
              <div className="form-group">
                <label>Correo</label>
                <input type="email" name='correo' placeholder="Correo electrónico" required />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input type="password" name='password' placeholder="Contraseña" required />
              </div>
              <div className="form-group">
                <label>Numero de Control</label>
                <input type="text" name='numeroControl' placeholder="Numero de Control" required />
              </div>
              <button type="submit">Revisar Validacion</button>
            </form>
          </div>
        </div>
      )}
      {/* Modal Claves de acceso */}
      {modal3Abierto && (
        <div className="modal-registro" onClick={cerrarModal3}>
          <div className="modal-content-registro" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => {cerrarModal3();window.location.reload();}}>&times;</span>
            <h2 className="modal-title">Claves de Acceso</h2>
            <p className="alerta-importante">
              ES MUY IMPORTANTE: Anota tu <strong>Número de Control</strong> y papeleta de pago. 
              Al cerrar esta ventana, se perderá esta información.
            </p>
            <div className="usuario-info">
              <p><span>¡Felicidades {usuario.nombre}!</span></p>
              <p><strong>Usuario:</strong> {clavesAcceso.usuario}</p>
              <p><strong>Contraseña:</strong> {clavesAcceso.password}</p>
              <p className="nota">¡Guarda esta información para iniciar sesión en el sistema!</p>
            </div>
            {apiExterna && apiExterna.data && (
              <div className="pago-info">
                <h3>Información del registro y pago</h3>
                <div className="detalle">
                  <p><strong>Número de Control:</strong> <span className="resaltado">{apiExterna.data.orden_externo.ncontrol}</span></p>
                  <p><strong>Servicio:</strong> {apiExterna.data.orden_externo.servicio_nombre}</p>
                  <p><strong>Monto:</strong> ${apiExterna.data.orden_caja.monto}</p>
                  <p><strong>Fecha Límite:</strong> {apiExterna.data.orden_externo.fecha_limite}</p>
                  <p><strong>PDF de pago:</strong> <a href={apiExterna.data.pdf_url} target="_blank" rel="noopener noreferrer">Descargar PDF</a></p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* validacion externo */}
      {modal4Abierto && (
        <div className="modal-registro" onClick={cerrarModal4}>
          <div className="modal-content-registro" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => {cerrarModal4();window.location.reload();}}>&times;</span>
            {mensajeBackend && (
              <div className="notificacion-error">
                <p>{mensajeBackend}</p>
              </div>
            )}
            {apiExterna && (
              <div className="api-container">
                <h3>Información del pago y registro del evento:</h3>
                {(() => {
                  if (apiExterna.data.estado_pago?.codigo === "VENCIDO") {
                    return <p className="estado-pago vencido">⚠ Pago vencido - referencia expirada</p>;
                  } 
                  else if (!apiExterna.data.fecha_validacion) {
                    return <p className="estado-pago no-validado">❌ Pago NO validado</p>;
                  } 
                  else {
                    if (apiExterna.data.formulario_completado==true){
                      return(
                      <>
                        <p className="estado-pago validado">✅ Formulario ya completado</p>
                        <p className="estado-pago validado">✅ Pago validado el {apiExterna.data.fecha_validacion}</p>
                      </> 
                    );  
                    }else{
                    return (
                      <div>
                        <p className="estado-pago validado">
                          ✅ Pago validado el {apiExterna.data.fecha_validacion}
                        </p>
                      <form className="form-login" onSubmit={handleForumularioExterno}>
                      <div className="form-group">
                        <label>Nombre Completo</label>
                        <input type="text" name='nombre' placeholder="Nombre" required />
                      </div>
                      <div className="form-group">
                        <label>Apellido Paterno</label>
                        <input type="text" name='apellidoPaterno' placeholder="Apellido Paterno" required />
                      </div>
                      <div className="form-group">
                        <label>Apellido Materno</label>
                        <input type="text" name='apellidoMaterno' placeholder="Apellido Materno" required />
                      </div>
                      <div className="form-group">
                        <label>Numero de Control</label>
                        <input type="text" name='numeroControl' placeholder="EXT000000" required />
                      </div>                
                      <div className="form-group">
                        <label>Generacion (opcional)</label>
                        <input type="text" name='generacion' placeholder="Generacion" />
                      </div>
                      <div className="form-group">
                        <label>Correo</label>
                        <input type="email" name='correo' placeholder="Correo" required />
                      </div>
                      <div className="form-group">
                        <label>Telefono</label>
                        <input type="text" name='telefono' placeholder="telefono" required />
                      </div>
                      <div className="form-group">
                        <img src="./select/chaleco.jpg" alt="" />
                        <label>Talla de Chaleco</label>
                        <select name="tallaChaleco" required>
                          <option value="">-- Selecciona tu talla --</option>
                          <option value="CH">CH</option>
                          <option value="M">M</option>
                          <option value="G">G</option>
                          <option value="EG">EG</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <img src="./select/playera.jpg" alt="" />
                        <label>Talla de Playera</label>
                        <select name="tallaPlayera" required>
                          <option value="">-- Selecciona tu talla --</option>
                          <option value="CH">CH</option>
                          <option value="M">M</option>
                          <option value="G">G</option>
                          <option value="EG">EG</option>
                          <option value="2EG">EG</option>
                          <option value="3EG">EG</option>
                        </select>
                      </div>
                      <button type="submit">Enviar</button>
                      </form>
                      </div>
                    );
                  }
                }
                })()}
              </div>
            )}
          </div>
        </div>
      )}
      {/* enviado el formulario */}
      {modal5Abierto && (
        <div className="modal-registro" onClick={cerrarModal5}>
          <div className="modal-content-registro" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => {cerrarModal5();window.location.reload();}}>&times;</span>

            {mensajeBackend && (
              <div className="notificacion-error">
                <p>{mensajeBackend}</p>
              </div>
            )}

            <div className="modal-header-registro">
              <h2>¡Registro exitoso 🎉!</h2>
            </div>

            <div className="modal-body-registro">
              <p>Tu registro fue procesado correctamente.</p>
              <p>Te esperamos con entusiasmo en el evento.</p>
              <p className="evento-fecha">
                📅 El evento será el <strong>13/10/2025</strong>  
                <br />
                ⏳ Faltan <strong>25 días</strong>
              </p>
            </div>

            <div className="modal-footer-registro">
            <button className="btn-primary" onClick={() => {cerrarModal5();window.location.reload();}}>    Continuar</button>
            </div>
          </div>
        </div>
      )}
      {/* login alumno */}
      {modal6Abierto && (
        <div className="modal-registro" onClick={cerrarModal6}>
          <div className="modal-content-registro" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => {cerrarModal6();window.location.reload();}}>&times;</span>
            {mensajeBackend && (
              <div className="notificacion-error">
                <p>{mensajeBackend}</p>
              </div>
            )}
            <h2>Inicio de Sesión</h2>
            <p>Ingresa tu numero de control y compueba el estado de tu pago y realizar tu registro.</p>
            <form className="form-login" onSubmit={handlealumno}>
              <div className="form-group">
                <label>Numero de Control</label>
                <input type="text" name='numeroControl' placeholder="Numero de Control" required />
              </div>
              <button type="submit">Revisar Validacion</button>
            </form>
          </div>
        </div>

      )}
      {/* validacion alumno*/}
      {modal7Abierto && (
        <div className="modal-registro" onClick={cerrarModal7}>
          <div className="modal-content-registroX" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => {cerrarModal7();window.location.reload();}}>&times;</span>
            {mensajeBackend && (
            <div className="notificacion-error">
              <p>{mensajeBackend}</p>
            </div>
            )}
            {apiExterna && (
              <div className="api-container">
              <h3>Información del pago y registro del evento:</h3>
                {(() => {
                  if (apiExterna.data.estado_pago?.codigo === "VENCIDO") {
                    return <p className="estado-pago vencido">⚠ Pago vencido - referencia expirada</p>;
                  } 
                  else if (!apiExterna.data.fecha_validacion) {
                    return <p className="estado-pago no-validado">❌ Pago NO validado</p>;
                  } 
                  else {
                    if (apiExterna.data.formulario_completado==true){
                      return(
                        <>
                          <p className="estado-pago validado">✅ Formulario ya completado</p>
                          <p className="estado-pago validado">✅ Pago validado el {apiExterna.data.fecha_validacion}</p>
                        </> 
                      );
                    }
                    return (
                      <div>
                        <p className="estado-pago validado">
                          ✅ Pago validado el {apiExterna.data.fecha_validacion}
                        </p>
                        <form className="form-login" onSubmit={handleForumularioAlumno}>
                          <div className="form-group">
                            <label>Nombre Completo</label>
                            <input type="text" name='nombre' placeholder="Nombre Completo" required />
                          </div>
                          <div className="form-group">
                            <label>Apellido Paterno</label>
                            <input type="text" name='apellidoPaterno' placeholder="Apellido Paterno" required />
                          </div>
                          <div className="form-group">
                            <label>Apellido Materno</label>
                            <input type="text" name='apellidoMaterno' placeholder="Apellido Materno" required />
                          </div>
                          <div className="form-group">
                            <label>Numero de Control</label>
                            <input type="text" name='numeroControl' placeholder="Numero de contro" required />
                          </div>
                          <div className="form-group">
                            <label>Semestre</label>
                            <input type="text" name='semestre' placeholder="Generacion" required />
                          </div>
                          <div className="form-group">
                            <label>Taller a elegir</label>
                            <select name="tallerElegir" required>
                              <option value="">-- Selecciona tu taller --</option>
                              {apiExterna.data.talleres && apiExterna.data.talleres.map((taller) => (
                                <option key={taller.id} value={taller.nombre}>
                                  {taller.nombre}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Numero de seguro social</label>
                            <input type="text" name='nss' placeholder="Numero de seguro social" required />
                          </div>
                          <div className="form-group">
                            <label>Correo electronico</label>
                            <input type="email" name='correo' placeholder="Correo Electronico" required />
                          </div>
                          <div className="form-group">
                            <label>Nombre de Contacto de Emergencia</label>
                            <input type="text" name='nombreEme' placeholder="Contacto " required />
                          </div>
                          <div className="form-group">
                            <label>Apellido Paterno de Contacto de Emergencia</label>
                            <input type="text" name='apellidoPaternoEme' placeholder="Contacto" required />
                          </div>
                          <div className="form-group">
                            <label>Apellido Materno de Contacto de Emergencia</label>
                            <input type="text" name='apellidoMaternoEme' placeholder="Contacto" required />
                          </div>
                          <div className="form-group">
                            <label>Telefono de Contacto de Emergencia</label>
                            <input type="text" name='telefonoEme' placeholder="Telefono Contacto" required />
                          </div>
                          <div className="form-group">
                            <img src="./select/chaleco.jpg" alt="" />
                            <label>Talla de Chaleco</label>
                            <select name="tallaChaleco" required>
                              <option value="" style={{color: "#ffffff"}}>-- Selecciona tu talla --</option>
                              <option value="CH">CH</option>
                              <option value="M">M</option>
                              <option value="G">G</option>
                              <option value="EG">EG</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <img src="./select/playera.jpg" alt="" />
                            <label>Talla de Playera</label>
                            <select name="tallaPlayera" required>
                              <option value="">-- Selecciona tu talla --</option>
                              <option value="CH">CH</option>
                              <option value="M">M</option>
                              <option value="G">G</option>
                              <option value="EG">EG</option>
                              <option value="2EG">EG</option>
                              <option value="3EG">EG</option>
                            </select>
                          </div>
                          <button type="submit">Enviar</button>
                        </form>
                      </div>
                    );
                  }
                })()}
              </div>
            )}
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

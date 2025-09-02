import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ComponentesCSS/talleres.css';
import './ComponentesCSS/boton_ver_talleres.css';




const NuevaPagina = () => {
  const navigate = useNavigate();

  return (
    <div className="nueva-pagina-container">
      <h1 className="nueva-pagina-title">Nueva Página</h1>
      <p className="nueva-pagina-text">Aquí puedes diseñar el contenido que quieras 🚀</p>

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

export default NuevaPagina;

import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [respuestaPost, setRespuestaPost] = useState("");

  useEffect(() => {
    const cargarMensaje = async () => {
      try {
        const respuesta = await axios.get("http://localhost:5000/");
        setMensaje(respuesta.data); // El backend devuelve "¡Servidor funcionando!"
      } catch (error) {
        console.error("Error al conectar con el servidor:", error);
        setMensaje("Error al conectar con el servidor.");
      }
    };

    cargarMensaje();
  }, []); // El array vacío [] hace que esto se ejecute solo una vez al montar el componente.

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/enviar", { nombre });
      setRespuestaPost(res.data.mensaje);
    } catch (error) {
      console.error("Error enviando datos:", error);
      setRespuestaPost("Error al enviar datos.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Conexión React + Node</h1>
      <h2>{mensaje}</h2>

      <form onSubmit={manejarEnvio} style={{ marginTop: "30px" }}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre"
        />
        <button type="submit">Enviar</button>
      </form>

      <h3 style={{ marginTop: "20px" }}>{respuestaPost}</h3>
    </div>
  );
}

export default App;

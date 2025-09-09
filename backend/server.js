// backend/server.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import pool from "./db.js";

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// Test de conexión
const testConexion = async () => {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS resultado");
    console.log("Conexión a MySQL OK:", rows[0].resultado);
  } catch (err) {
    console.error("Error de conexión MySQL:", err);
  }
};

testConexion();

// Ruta POST para registrar usuario
app.post("/api/enviar", async (req, res) => {
  const {
    nombre, apellidoPaterno, apellidoMaterno,
    curp, fechaNacimiento, nacionalidad,
    codigoControl, correo, telefono, password
  } = req.body;

  try {
    const [resultado] = await pool.execute(
      `INSERT INTO usuarios 
      (nombre, apellidoPaterno, apellidoMaterno, curp, fechaNacimiento, nacionalidad, codigoControl, correo, telefono, password)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [nombre, apellidoPaterno, apellidoMaterno, curp, fechaNacimiento, nacionalidad, codigoControl, correo, telefono, password]
    );

    console.log("Usuario guardado con ID:", resultado.insertId);

    res.json({ mensaje: `Hola, ${nombre}. Datos guardados correctamente en la base de datos.` });
  } catch (error) {
    console.error("Error al guardar en la base de datos:", error);
    res.status(500).json({ mensaje: "Error al guardar los datos en la base de datos." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor backend corriendo en puerto ${PORT}`));

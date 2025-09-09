// server.js
import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Crear pool de conexión MySQL usando variables de entorno
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "industrialsql",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Middleware
app.use(cors());
app.use(express.json());

// Función para testear la conexión
const testConexion = async () => {
  try {
    const [rows] = await pool.query("SELECT 1");
    console.log("Conexión MySQL exitosa");
  } catch (error) {
    console.error("Error de conexión MySQL:", error);
  }
};

// Endpoint POST para guardar usuarios
app.post("/api/enviar", async (req, res) => {
  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    curp,
    fechaNacimiento,
    nacionalidad,
    codigoControl,
    correo,
    telefono,
    password,
  } = req.body;

  try {
    const sql = `
      INSERT INTO usuarios 
      (nombre, apellidoPaterno, apellidoMaterno, curp, fechaNacimiento, nacionalidad, codigoControl, correo, telefono, password)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    await pool.query(sql, [
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      curp,
      fechaNacimiento,
      nacionalidad,
      codigoControl,
      correo,
      telefono,
      password,
    ]);

    res.json({ mensaje: "Usuario guardado correctamente" });
  } catch (error) {
    console.error("Error al guardar usuario:", error);
    res.status(500).json({ mensaje: "Error al guardar los datos en la base de datos." });
  }
});

// Iniciar servidor
app.listen(PORT, async () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
  await testConexion();
});

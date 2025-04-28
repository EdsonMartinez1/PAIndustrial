// backend/server.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Servidor funcionando!");
});

// Ruta POST para recibir datos
app.post('/api/enviar', (req, res) => {
  const { nombre } = req.body;
  console.log('Nombre recibido:', nombre);

  res.json({ mensaje: `Hola, ${nombre}. Datos recibidos correctamente.` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
});

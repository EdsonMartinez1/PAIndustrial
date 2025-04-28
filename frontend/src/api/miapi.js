import axios from "axios";

const API_URL = "http://localhost:5000";

export const obtenerDatos = async () => {
  const respuesta = await axios.get(`${API_URL}/`);
  return respuesta.data;
};

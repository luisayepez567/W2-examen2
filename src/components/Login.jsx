import React, { useState } from 'react';
import Button from './Button'; 
import { guardarReserva } from '../helpers/local-storage';
import { alertExito, alertError } from '../helpers/alerts';
import { generarIdReserva, generarFechaActual } from '../helpers/generators';

const Login = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    experiencia: 'Principiante (Nunca he tenido un Bonsái)',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) {
      alertError();
      return;
    }

    const nuevaReserva = {
      id: generarIdReserva(),
      fechaRegistro: generarFechaActual(),
      ...formData
    };

    guardarReserva(nuevaReserva);
    alertExito();
    setFormData({ nombre: '', email: '', experiencia: 'Principiante (Nunca he tenido un Bonsái)', mensaje: '' });
  };

  const labelStyle = { display: "block", marginBottom: "8px", fontWeight: "600", color: "#1a2a1a" };
  const inputStyle = {
    display: "block", width: "100%", maxWidth: "500px", padding: "12px",
    marginBottom: "20px", border: "1px solid #ccc", borderRadius: "4px",
    fontFamily: "'Inter', sans-serif"
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <label style={labelStyle}>Nombre completo</label>
      <input name="nombre" value={formData.nombre} onChange={handleChange} style={inputStyle} type="text" />
      
      <label style={labelStyle}>Correo electrónico</label>
      <input name="email" value={formData.email} onChange={handleChange} style={inputStyle} type="email" />
      
      <label style={labelStyle}>Nivel de experiencia</label>
      <select name="experiencia" value={formData.experiencia} onChange={handleChange} style={inputStyle}>
        <option value="Principiante (Nunca he tenido un Bonsái)">Principiante (Nunca he tenido un Bonsái)</option>
        <option value="Intermedio (Tengo algunos árboles)">Intermedio (Tengo algunos árboles)</option>
        <option value="Avanzado (Busco perfeccionar técnicas)">Avanzado (Busco perfeccionar técnicas)</option>
      </select>

      <label style={labelStyle}>Mensaje (Opcional)</label>
      <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} style={{ ...inputStyle, height: "100px", resize: "none" }} />

      <Button text="Enviar Solicitud" type="submit" />
    </form>
  );
};

export default Login;
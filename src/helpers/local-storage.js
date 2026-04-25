const KEY = 'reservasBonsai';

export const guardarReserva = (formData) => {
  const reservas = obtenerReservas();
  reservas.push(formData);
  localStorage.setItem(KEY, JSON.stringify(reservas));
  

  console.log("Nueva reserva capturada y guardada:", formData);
  console.log("Lista completa de reservas en Storage:", reservas);
};

export const obtenerReservas = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};
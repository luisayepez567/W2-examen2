import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login';

function Reservas() {
  const mainStyle = {
    flex: 1,
    paddingLeft: "25%",
    paddingTop: "200px",
    paddingBottom: "100px",
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#f8f6f6",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      
      <main style={mainStyle}>
        <h1 style={{ fontSize: "4rem", color: "#1a2a1a", margin: 0, lineHeight: "1.1" }}>
          Reserva un <br /> Taller
        </h1>
        <p style={{ maxWidth: "500px", color: "#4a5d4a", margin: "20px 0 30px 0", fontSize: "1.1rem" }}>
          Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
        </p>

        <Login />
      </main>

      <Footer />
    </div>
  );
}

export default Reservas;
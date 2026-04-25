import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button' 

function Inicio() {
  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f8f6f6",
  };

  const mainStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: " 5%",
    paddingTop: "200px",
    paddingBottom: "100px",
      fontFamily: "'Inter', sans-serif",
  };

  return (
    <div style={pageStyle}>
      <Header />

      <main style={mainStyle}>
        <h1 style={{ fontSize: "4rem", color: "#1a2a1a", margin: 0, fontFamily: "'Inter', sans-serif" }}>
          El arte de la <br /> paciencia
        </h1>
        <p style={{ maxWidth: "450px", color: "#4a5d4a", margin: "20px 0" }}>
          Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
        </p>
        
        <Button text="Reserva un taller" onClick={() => console.log("Click!")} />
      </main>

      <Footer />
    </div>
  );
}

export default Inicio;
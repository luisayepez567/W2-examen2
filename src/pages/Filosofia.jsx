import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Filosofia() {
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
    paddingLeft: "25%", 
    paddingTop: "200px", 
    paddingBottom: "100px",
    fontFamily: "'Inter', sans-serif",
  };

  const titleStyle = {
    fontSize: "4rem", 
    color: "#1a2a1a",
    margin: 0,
    fontFamily: "'Inter', sans-serif",
    lineHeight: "1.1"
  };

  const textContainerStyle = {
    maxWidth: "700px", 
    color: "#4a5d4a",
    marginTop: "40px",
    fontSize: "18px",
    textAlign: "align", 
    lineHeight: "1.6"
  };

  return (
    <div style={pageStyle}>
      <Header />

      <main style={mainStyle}>
        <h1 style={titleStyle}>
          Menos es más
        </h1>

        <div style={textContainerStyle}>
          <p style={{ marginBottom: "20px" }}>
          Nuestra filosofía se centra en la observación y el respeto por los ritmos naturales. Creemos que cultivar un Bonsái no es solo jardinería, sino una meditación activa.
          </p>

          <p style={{ marginBottom: "20px" }}>
          En nuestro estudio, te enseñamos a escuchar al árbol, entendiendo que cada corte y cada alambrado debe tener un propósito. Buscamos el equilibrio perfecto entre la intervención humana y la expresión salvaje de la naturaleza.
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Filosofia;
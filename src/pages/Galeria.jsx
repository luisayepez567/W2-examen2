import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

function Galeria() {
  const nombresBonsai = [
    "Arce Japonés",
    "Pino Negro",
    "Ficus Retusa",
    "Olmo Chino",
     "Enebro",
    "Azalea"
  ];

  const mainStyle = {
    flex: 1,
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "180px",
    paddingBottom: "100px",
    backgroundColor: "#f8f6f6",
    minHeight: "100vh"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "40px"
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      
      <main style={mainStyle}>
        <h1 style={{ fontSize: "3rem", color: "#1a2a1a", margin: 0, fontFamily: "'Inter', sans-serif", paddingLeft: "33%",lineHeight: "1.6" }}>
          Nuestra Colección
        </h1>
        <p style={{ color: "#4a5d4a", marginTop: "10px", fontFamily: "'Inter', sans-serif", paddingLeft: "30%",lineHeight: "1.6" }}>
          Un vistazo a algunos de los ejemplares en los que hemos trabajado. <br />Cada árbol cuenta una historia de tiempo y paciencia.
        </p>

        <section style={gridStyle}>
          {nombresBonsai.map((nombre, index) => (
            <Card key={index} titulo={nombre} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Galeria;
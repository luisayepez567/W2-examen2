import React from 'react';

const Card = ({ titulo }) => {
  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    height: "200px", 
    display: "flex",
    alignItems: "center",    
    justifyContent: "center", 
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    border: "1px solid #e0e0e0",
    padding: "20px",
    transition: "transform 0.2s ease"
  };

  const titleStyle = {
    margin: 0,
    fontSize: "1.4rem",
    color: "#1a2a1a",
    textAlign: "center",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "400"
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
    >
      <h3 style={titleStyle}>{titulo}</h3>
    </div>
  );
};

export default Card;
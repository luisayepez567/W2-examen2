import React from 'react';

const Button = ({ text, onClick }) => {
    const buttonStyle = {
        padding: "15px 30px",
        backgroundColor: "#2d3a2d", // Verde oscuro tipo bosque
        color: "#ffffff",
        border: "none",
        fontSize: "16px",
        fontWeight: "500",
        cursor: "pointer",
        width: "fit-content",
        transition: "background-color 0.3s ease",
        fontFamily: "sans-serif"
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
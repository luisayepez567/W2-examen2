const Footer = () => {
    const footerStyles = {
        footer: {
            width: "100%", 
            backgroundColor: "#fdfcf9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px 0", 
            marginTop: "40px", 
            fontFamily: "sans-serif"
        },
        text: {
            fontSize: "14px",
            color: "#1a2a1a",
            margin: 0,
            opacity: 0.7
        }
    };

    return (
        <footer style={footerStyles.footer}>
            <p style={footerStyles.text}>© 2026 Zenith Bonsai Studio.</p>
        </footer>
    );
}

export default Footer;
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "50px 5%", 
        backgroundColor: "#fdfcf9", 
        fontFamily: "'Inter', sans-serif", 
        position: "absolute", 
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000
    },
    logoContainer: {
        cursor: "pointer"
    },
    logoText: {
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "3px", 
        fontSize: "1.25rem",
        color: "#1a2a1a", 
        margin: 0 
    },
    ul: {
        display: "flex",         
        listStyle: "none",      
        margin: 0,              
        padding: 0,             
        gap: '40px' 
    },
    li: {
        cursor: "pointer",
        fontSize: "17px",
        color: "#1a2a1a",
        fontWeight: "500",
        transition: "opacity 0.3s ease"
    }
};
    return (
        <header style={styles.header}>
            <div style={styles.logoContainer} onClick={() => navigate("/")}>
                <h1 style={styles.logoText}>ZENITH BONSAI</h1>
            </div>
            <nav>
                <ul style={styles.ul}>
                    <li className="nav-item" onClick={() => navigate("/filosofia")}>Filosofía</li>
                    <li className="nav-item" onClick={() => navigate("/galeria")}>Galería</li>
                    <li className="nav-item" onClick={() => navigate("/reservas")}>Reservas</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
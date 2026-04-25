import React from 'react'
import Footer from '../components/Footer'
import Button from '../components/Button' 

function Reservas() {



    const Reservas = () => {
        const [getNombre, setNombre] = useState("")
        const [getEmail, setEmail] = useState("")
        const [getExperiencia, setExperiencia] = useState("")
        const [getMensaje, setMensaje] = useState("")
        const [getUsers, setUsers] = useState([])

        function fetchUsers() {
            fetch(end_points.users)
                .then((response) => response.json())
                .then((data) => setUsers(data))
                .catch((error) => console.log(error))
        }

        useEffect(() => {
            fetchUsers()
        }, [])

        return (
            <div>Reservas</div>
        )
    }

    }

    export default Reservas
import './NavBar.css'
export const NavBar = ({titulo}) => {
    return (
        <nav>
            <h1>{titulo}</h1>
            <a href=""><p>Turnos de espera</p></a>
            <a href=''><p>Operaciones</p></a>
        </nav>
    )
}
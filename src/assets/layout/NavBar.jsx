import './NavBar.css'
export const NavBar = ({titulo}) => {
    return (
        <nav>
            <h1>{titulo}</h1>
            <a href="/banco"><p>Turnos de espera</p></a>
            <a href='/operaciones'><p>Operaciones</p></a>
        </nav>
    )
}
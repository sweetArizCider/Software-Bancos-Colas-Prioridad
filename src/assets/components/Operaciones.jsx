import {NavBar} from "../layout/NavBar"
import './App.css'
import { InputOperaciones } from "../layout/operaciones/InputOperaciones"
import { ResultOperacioens } from "../layout/operaciones/ResultOperaciones"
function Operaciones(){
    return (
        <>
            <NavBar titulo="Pilas y Colas" />
            <main className="main-app">
                <InputOperaciones/>
                <ResultOperacioens/>
            </main>
        </>
        
    )
}


export default Operaciones
import {NavBar} from "../layout/NavBar"
import './App.css'
import { InputOperaciones } from "../layout/operaciones/InputOperaciones"
import { ResultOperacioens } from "../layout/operaciones/ResultOperaciones"
import { PosfijaProvider } from "../../controllers/operaciones/PosfijaContext";

function Operaciones(){
    return (
        <>
            <NavBar titulo="Pilas y Colas" />
            <main className="main-app">
                <PosfijaProvider>
                    <InputOperaciones/>
                    <ResultOperacioens/>
                </PosfijaProvider>
            </main>
        </>
        
    )
}


export default Operaciones
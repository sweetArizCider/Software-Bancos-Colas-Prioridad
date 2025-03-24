import { ResultPosfija } from "./ResultPosfija"
import { Posfija } from "./Posfija"
import "./ResultOperaciones.css"

export const ResultOperacioens = () => {
    return(
        <>
            <section id="result-operaciones-section">
                <Posfija/>
                <ResultPosfija/>
            </section>
        </>
    )
}
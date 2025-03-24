import './InputOperaciones.css'

export const InputOperaciones = () => {
    return(
        <section id="operaciones-input-section">
            <article id="operaciones-input-article">
                <label >Ingrese la operacion infija:</label>
                <input type="text" placeholder='4 + 7 - (4 * 5 / 3) - 10'/>
            </article>
                <button className="operaciones-button" id="selected">Ingresar</button>
                <button className="operaciones-button">Cancelar</button>
        </section>
    )
}
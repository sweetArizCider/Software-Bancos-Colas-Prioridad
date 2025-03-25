import './InputOperaciones.css';
import { useState, useContext } from 'react';
import { PosfijaContext } from '../../../controllers/operaciones/PosfijaContext.jsx';
import { PosfijaUtils } from '../../../controllers/operaciones/PosfijaUtils.js';

export const InputOperaciones = () => {
    const [operacion, setOperacion] = useState('');
    const [resultadoInfija, setResultadoInfija] = useState(null);
    const { setResultadoPosfija, setResultadoEvaluacion } = useContext(PosfijaContext);

    const manejarIngreso = () => {
        const resultado = eval(operacion); 
        setResultadoInfija(resultado); 
        const resultadoPosfijo = PosfijaUtils.convertirAPosfija(operacion);
        setResultadoPosfija(resultadoPosfijo);

        const resultadoEvaluado = PosfijaUtils.evaluarPosfija(resultadoPosfijo);
        setResultadoEvaluacion(resultadoEvaluado);
        setOperacion('');
    };

    return (
        <section id="operaciones-input-section">
            <article id="operaciones-input-article">
                <label>Ingrese la operacion infija:</label>
                <input
                    type="text"
                    placeholder="4 + 7 - (4 * 5 / 3) - 10"
                    value={operacion}
                    onChange={(e) => setOperacion(e.target.value)}
                />
                <label>Resultado de la operacion infija: <span>
                        {resultadoInfija !== null ? `${resultadoInfija}` : ''}
                    </span></label>
            </article>
            <button className="operaciones-button" id="selected" onClick={manejarIngreso}>
                Ingresar
            </button>
            <button className="operaciones-button" onClick={() => setOperacion('')}>
                Cancelar
            </button>
        </section>
    );
};
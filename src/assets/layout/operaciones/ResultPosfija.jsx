import './ResultPosfija.css';
import { useContext } from 'react';
import { PosfijaContext } from '../../../controllers/operaciones/PosfijaContext.jsx';

export const ResultPosfija = () => {
    const { resultadoEvaluacion } = useContext(PosfijaContext);

    return (
        <article id="posfija-result-article">
            <label>Resultado de la operacion posfija:</label>
            <h1>{resultadoEvaluacion !== null ? resultadoEvaluacion.toFixed(3) : '-5.333'}</h1>
        </article>
    );
};
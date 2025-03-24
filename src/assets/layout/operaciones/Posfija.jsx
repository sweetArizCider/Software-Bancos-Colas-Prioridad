import './Posfija.css';
import { useContext } from 'react';
import { PosfijaContext } from '../../../controllers/operaciones/PosfijaContext.jsx';

export const Posfija = () => {
    const { resultadoPosfija } = useContext(PosfijaContext);
    const regex = /\s+/g
    return (
        <article id="posfija-article">
            <label>Operacion posfija:</label>
            <p>{resultadoPosfija.replace(/\s+/g, '') || '47+45*3/-10-'}</p>
        </article>
    );
};
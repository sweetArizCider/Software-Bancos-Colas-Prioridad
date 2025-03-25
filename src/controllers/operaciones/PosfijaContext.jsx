import { createContext, useState } from 'react';

export const PosfijaContext = createContext();

export const PosfijaProvider = ({ children }) => {
    const [resultadoPosfija, setResultadoPosfija] = useState('');
    const [resultadoEvaluacion, setResultadoEvaluacion] = useState(null);

    return (
        <PosfijaContext.Provider value={{ resultadoPosfija, setResultadoPosfija, resultadoEvaluacion, setResultadoEvaluacion }}>
            {children}
        </PosfijaContext.Provider>
    );
};
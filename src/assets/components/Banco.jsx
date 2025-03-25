import './App.css';
import { useState } from 'react';
import { NavBar } from '../layout/NavBar';
import { InputSection } from '../layout/InputSection';
import { ResultSection } from '../layout/ResultSection';

function Banco() {
    const [cola, setCola] = useState([]); 

    return (
        <>
            <NavBar titulo="Pilas y Colas" />
            <main className='main-app'>
                <InputSection setCola={setCola} />
                <ResultSection cola={cola} setCola={setCola} />
            </main>
        </>
    );
}

export default Banco;
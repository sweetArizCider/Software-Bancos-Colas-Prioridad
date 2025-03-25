import './InputSection.css';
import { useState } from 'react';
import { colaBanco } from '../../controllers/banco/BancoController';

export const InputSection = ({ setCola }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [tipo, setTipo] = useState('P'); 

    const handleIngresar = () => {
        if(nombre === '' || apellido === '') {
            return
        }
        const nombreCompleto = `${nombre} ${apellido}`;
        const colaActualizada = colaBanco.agregarCliente(tipo, nombreCompleto);
        setCola(colaActualizada); 
        setNombre('');
        setApellido('');
    };

    return (
        <section className='input-section'>
            <header className='button-header'>
                <button
                    id={tipo === 'P' ? 'selected2' : undefined}
                    onClick={() => setTipo('P')}
                >
                    P0
                </button>
                <button
                    id={tipo === 'C' ? 'selected2' : undefined}
                    onClick={() => setTipo('C')}
                >
                    C0
                </button>
                <button
                    id={tipo === 'N' ? 'selected2' : undefined}
                    onClick={() => setTipo('N')}
                >
                    N0
                </button>
            </header>
            <main className='input-main'>
                <div className="input-field">
                    <label>Nombre (s)</label>
                    <input
                        type='text'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label>Primer apellido</label>
                    <input
                        type='text'
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                </div>
            </main>
            <footer className="input-footer">
                <button id="selected" onClick={handleIngresar}>Ingresar</button>
                <button onClick={() => { setNombre(''); setApellido(''); }}>Cancelar</button>
            </footer>
        </section>
    );
};
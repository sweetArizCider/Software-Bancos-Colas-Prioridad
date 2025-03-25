import './ResultSection.css';
import { BancoResult } from './BancoResult';
import { colaBanco } from '../../controllers/banco/BancoController'; 

export const ResultSection = ({ cola, setCola }) => {
    const handleClienteAtendido = () => {
        const resultado = colaBanco.sacarCliente(); 
        if (resultado) {
            setCola(resultado.colaActual); 
        }
    };

    return (
        <section className="result-section">
            <article className="result-article">
                <header className='result-header'>
                    <p>Turno</p>
                    <p>Cliente</p>
                    <p>Estatus</p>
                </header>
                <main className='result-main'>
                    {cola.map((cliente, index) => (
                        <BancoResult
                            key={index}
                            turno={index + 1}
                            cliente={cliente.nombre}
                            estatus={cliente.display}
                        />
                    ))}
                </main>
            </article>
            <footer className="result-footer">
                <button id="selected" onClick={handleClienteAtendido}>
                    Cliente Atendido
                </button>
            </footer>
        </section>
    );
};
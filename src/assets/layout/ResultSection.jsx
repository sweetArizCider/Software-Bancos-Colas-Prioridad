import './ResultSection.css'
import { BancoResult } from './BancoResult'

export const ResultSection = () => {
    return(
        <section className="result-section">
            <article className="result-article">
                <header className='result-header'>
                    <p>Turno</p>
                    <p>Cliente</p>
                    <p>Estatus</p>
                </header>
                <main className='result-main'>
                    <BancoResult turno="1" cliente="Carlos Arizpe" estatus="P1"/>
        
                    <BancoResult turno="1" cliente="Carlos Arizpe" estatus="P1"/>
                    <BancoResult turno="1" cliente="Carlos Arizpe" estatus="P1"/>
                    <BancoResult turno="1" cliente="Carlos Arizpe" estatus="P1"/>
                    <BancoResult turno="1" cliente="Carlos Arizpe" estatus="P1"/>
                    <BancoResult turno="1" cliente="Carlos Arizpe" estatus="P1"/>
                    <BancoResult turno="1" cliente="Carlos Arizpe" estatus="P1"/>
                </main>
            </article>
            <footer className="result-footer">
                <button id="selected">Cliente Atendido</button>
            </footer>
        </section>
    )
}
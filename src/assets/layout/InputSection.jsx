import './InputSection.css'

export const InputSection = () => {
    return(
        <section className='input-section'>
            <header className='button-header'>
                <button id="selected2">P0</button>
                <button>R0</button>
                <button>C0</button>
            </header>
            <main className='input-main'>
                <div className="input-field">
                    <label>Nombre (s)</label>
                    <input type='text'/>
                </div>
                <div className="input-field">
                    <label>Primer apellido</label>
                    <input type='text'/>
                </div>
            </main>
            <footer className="input-footer">
                <button id="selected">Ingresar</button>
                <button>Cancelar</button>
            </footer>
        </section>
    )
}
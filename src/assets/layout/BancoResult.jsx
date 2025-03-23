import './BancoResult.css'

export const BancoResult = ({turno, cliente, estatus}) => {
    return(
        <section className='banco-result-section'>
            <div className="divisor-result">
                <p className='turno'>{turno}</p>
            </div>
            <div className="divisor-result">
                 <p className='cliente'>{cliente}</p>
            </div>
            <div className="divisor-result">
                <p className='estatus'>{estatus}</p>
            </div>
        </section>
    )
}
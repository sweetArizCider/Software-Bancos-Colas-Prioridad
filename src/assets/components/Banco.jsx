import './App.css'
import { NavBar } from '../layout/NavBar'
import { InputSection } from '../layout/InputSection'
import { ResultSection } from '../layout/ResultSection'
function Banco() {

  return (
    <>
      <NavBar titulo="Pilas y Colas" />
      <main className='main-app'>
        <InputSection />
        <ResultSection />
      </main>

    </>
  )
}

export default Banco

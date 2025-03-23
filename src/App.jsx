import './App.css'
import { NavBar } from './assets/layout/NavBar'
import { InputSection } from './assets/layout/InputSection'
import { ResultSection } from './assets/layout/ResultSection'
function App() {

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

export default App

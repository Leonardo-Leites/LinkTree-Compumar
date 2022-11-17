import fachada from './assets/fachada.jpeg'
import icone from './assets/icone.png'

import { Cards } from './components/cards'

import { CircleWavyCheck } from 'phosphor-react'


function App() {

  return (
    <>
      <main className='relative'>
        <div className="absolute w-full"> {/* div background */}
            <img src={fachada} className="w-full h-screen blur-md brightness-75" />
        </div>
        
        <section className="relative w-48 top-20 m-auto"> {/* main section */} 
            <img src={icone}  className="bg-black p-2 w-36 rounded-full m-auto"/>
            <a href='https://www.compumar.com.br' style={{display: "ruby"}} target={'_blank'}><h1 className='w-36 text-center text-white text-xl mt-1'>Compumar.com.br</h1>
              <CircleWavyCheck size={28} color="white" className='ml-8' weight="bold" /></a>
        </section>

        <section className='relative m-auto top-28'> {/* cards links */} 
            <Cards />
        </section>
      </main>

    </>
  )
}

export default App

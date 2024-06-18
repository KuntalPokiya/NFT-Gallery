import {Artworks} from "./components/Artworks"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Transaction from "./components/Transaction"

const App = () => {
  return (
    <div className="min-h-screen">
      <div  className='gradient-bg-hero'>
        <Header/>
        <Hero /> 
      </div>
      <Artworks />
      <Transaction />
    </div>
  )
}

export default App

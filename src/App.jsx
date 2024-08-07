import { useEffect } from "react"
import Alert from "./components/Alert"
import {Artworks} from "./components/Artworks"
import { CreateNFT } from "./components/CreateNFT"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Loading from "./components/Loading"
import ShowNFT from "./components/ShowNFT"
import Transaction from "./components/Transaction"
import UpdateNFT from "./components/UpdateNFT"
import { getAllNFTs, isWallectConnected } from "./Blockchain.services"

const App = () => {
  useEffect(async()=>{
    await isWallectConnected()  // will check whether account is connected or not
    await getAllNFTs()
  },[])
  return (
    <div className="min-h-screen">
      <div  className='gradient-bg-hero'>
        <Header/>
        <Hero /> 
      </div>
      <Artworks />
      <Transaction />
      <Footer />
      <CreateNFT />
      <ShowNFT />
      <UpdateNFT />
      <Loading />
      <Alert />
    </div>
  )
}

export default App

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"

function App() {

  return (
    <>
      <main className="bg-black">
        {/* Bsic Setup */}
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Model/>
        {/* Ideas For Future Work:
              -Features Page
              -GamePlay Page ig
              -Footer (contact, info, external links and stuff)
        */}
      </main>
    </>
  )
}

export default App

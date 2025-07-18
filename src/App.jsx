import Hero from "./Componants/Hero"
import ImgComponant from "./Componants/ImgComponant"
import Info from "./Componants/AboutHome"
import Intro from "./Componants/Intro"
import Navbar from "./Componants/Navbar"
import AboutHome from "./Componants/AboutHome"
import Footer from "./Componants/Footer"
import Gallary from "./Componants/Gallary"



function App() {
  return (
    <div className="w-full h-full overflow-hidden">
    <Navbar/>
    <Hero/>
    <Intro/>
    <ImgComponant/>
    {/* <Info/> */}
    <AboutHome/>
    <div className="w-full flex justify-center items-center">
    <Gallary/>
    </div>
    <Footer/>
    </div>
  )
}

export default App

import Navbar from './Navbar'
import Home from './home';
import About from './about';
import Projects from './projects';
import Fotter from './fotter';
const Main = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Fotter/>
    </div>
  )
}

export default Main

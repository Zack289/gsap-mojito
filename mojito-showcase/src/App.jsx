import {ScrollTrigger, SplitText} from 'gsap/all'
import { gsap } from 'gsap/gsap-core'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './Menu';
import Contact from './Contact';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  )
}

export default App

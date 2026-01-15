import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { navLinks } from "../../constants"


const Navbar = () => {


        useGSAP(()=>{
            const navTween = gsap.timeline({  //tween is a core concept in animation, UI motion, and game/dev libraries.
                scrollTrigger: {
                    trigger: 'nav', //start item 
                    start: 'bottom top'  //it means from buttom to top
                }
            });

            navTween.fromTo('nav', { backgroundColor: 'transparent'}, {
                backgroundColor: '#00000050',
                backgroundFilter: 'blur(50px)',
                duration: 1,
                ease: 'power1.inOut'
            })
        })

  return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-2">
             <img src="/public/images/logo.png" alt="logo" />
                <span>Velvet Pour</span>
            </a>

            <ul>
                {navLinks.map((link)=>(
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar

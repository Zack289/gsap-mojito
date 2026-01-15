import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { cocktailLists, mockTailLists } from '../../constants'

function Cocktails() {

    useGSAP(()=>{
       const parallaxTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#cocktails',
                start: 'top 30',  //when the top of the section reaches the 30% of the screen
                end: 'bottom 80%',  //when the bottom section reaches the 80% of the screen
                scrub: true  //means to animate when scroll
            }
        })

        parallaxTimeline
            .from('#c-left-leaf',{
                x: -100, y: 100
            })
            .from('#c-right-leaf',{
                x: 100, y: 100
            })
    })

  return (
    <section id='cocktails' className='noisy'>
      <img src="/public/images/cocktail-left-leaf.png"  alt="left-leaf" id='c-left-leaf' />
      <img src="/public/images/cocktail-right-leaf.png"  alt="right-leaf" id='c-right-leaf'/>

      <div className="list">
        <div className="popular">
            <h2>Most Popular Cocktails:</h2>

            <ul>
                {cocktailLists.map((drink)=>{
                    return(
                    <li key={drink.name}>
                        <div className="md:me-28">
                            <h3>{drink.name}</h3>
                            <p>{drink.country} || {drink.detail}</p>
                        </div>
                        <span>{drink.price}</span>
                    </li>)
                })}
            </ul>
        </div>
        {/* popular lists */}
        <div className="loved">
            <h2>Most Loved Cocktails:</h2>

            <ul>
                {mockTailLists.map((drink)=>{
                    return(
                    <li key={drink.name}>
                        <div className="me-28">
                            <h3>{drink.name}</h3>
                            <p>{drink.country} || {drink.detail}</p>
                        </div>
                        <span>{drink.price}</span>
                    </li>)
                })}
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Cocktails

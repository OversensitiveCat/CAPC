import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Quote
const lieuQuote = () => {
  const para = document.querySelector('.lieu-quote-para')
  const circles = gsap.utils.toArray('.quote-circle')

  gsap.set(circles, { opacity: 0, scale: 0.95 })
  let tl = gsap.timeline({ paused: true, delay: 0.25 })
  tl.to(
    circles,
    { opacity: 1, scale: 1, duration: 0.5, stagger: { amount: 1 } },
    '<0.2'
  )

  ScrollTrigger.create({
    trigger: para,
    start: 'top 80%',
    onEnter: () => tl.play(),
  })

  ScrollTrigger.create({
    trigger: para,
    start: 'top bottom',
    onLeaveBack: () => tl.pause(0),
  })
}

export default lieuQuote

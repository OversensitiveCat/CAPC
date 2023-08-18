import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const about = () => {
  // Create shape
  const shape = () => {
    const parent = document.querySelector('.about-quote-shape-container')

    let a = 5
    for (let i = 0; i < 14; i++) {
      let r = document.createElement('div')
      r.classList.add('about-quote-rayon')
      parent.appendChild(r)
      gsap.set(r, { rotate: a })
      a += 13
    }
  }
  shape()

  // Quote
  const quote = () => {
    const para = document.querySelector('.about-quote-para')
    const circle = document.querySelector('.about-quote-shape')
    let rayons = gsap.utils.toArray('.about-quote-rayon')
    gsap.set(circle, { opacity: 0, scale: 0.5 })
    gsap.set(rayons, { height: 0 })

    let tl = gsap.timeline({ paused: true, delay: 0.25 })
    tl.to(circle, { opacity: 1, scale: 1 }, 0.3).to(
      rayons,
      { height: '100%', duration: 1.2 },
      0.6
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

  quote()
}

export default about

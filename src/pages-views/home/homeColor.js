/* eslint-disable no-unused-vars */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let instance

const homeColor = () => {
  let pink = '#efc2d0',
    white = '#fcf8ef',
    wrapper = document.querySelector('.wrapper'),
    ticketHole = document.querySelectorAll('.ticket-hole'),
    ticketBorders = document.querySelectorAll('.ticket-border'),
    hides = document.querySelectorAll('.img-hide')

  function color(c) {
    gsap.to(wrapper, { backgroundColor: c, duration: 0.8, overwrite: true })
    gsap.to(ticketHole, { backgroundColor: c, duration: 0.8, overwrite: true })
    gsap.to(ticketBorders, {
      backgroundColor: c,
      duration: 0.8,
      overwrite: true,
    })
    gsap.to(hides, { backgroundColor: c, duration: 0.8 })
  }

  instance = ScrollTrigger.create({
    trigger: '.home-expo',
    start: 'top 75%',
    end: 'bottom 75%',
    onEnter: () => color(pink),
    onLeave: () => color(white),
    onEnterBack: () => color(pink),
    onLeaveBack: () => color(white),
  })
}
const homeClean = () => {
  instance.kill()
}

export { homeColor, homeClean }

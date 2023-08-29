import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const navHover = () => {
  let red = '#e65d35',
    white = '#fcf8ef'

  const links = gsap.utils.toArray('.nav-link')
  function hoverLink(text, dash, path, arrow, color, enter) {
    gsap.to(text, { color: color, duration: 0.3 })
    gsap.to(dash, { backgroundColor: color, duration: 0.3 })
    gsap.to(path, { fill: color, duration: 0.3 })

    enter
      ? gsap.to(arrow, { xPercent: 25, duration: 0.3 })
      : gsap.to(arrow, { xPercent: -25, duration: 0.3 })
  }

  links.forEach((link) => {
    let t = link.querySelector('.nav-text'),
      d = link.querySelector('.white-dash'),
      p = link.querySelector('.menu-path'),
      a = link.querySelector('.nav-arrow-container')

    link.addEventListener('mouseenter', () => hoverLink(t, d, p, a, red, true))
    link.addEventListener('mouseleave', () =>
      hoverLink(t, d, p, a, white, false)
    )
  })

  const socials = gsap.utils.toArray('.social-link')
  socials.forEach((social) => {
    let path = social.querySelectorAll('.menu-path')
    social.addEventListener('mouseenter', () => {
      gsap.to(path, { fill: red, duration: 0.3 })
      gsap.to(social, { yPercent: -10, scale: 1.05, duration: 0.3 })
    })
    social.addEventListener('mouseleave', () => {
      gsap.to(path, { fill: white, duration: 0.3 })
      gsap.to(social, { yPercent: 0, scale: 1, duration: 0.3 })
    })
  })

  const ham = document.querySelector('.ham-close')
  const lines = gsap.utils.toArray('.line-close1, .line-close2')

  ham.addEventListener('mouseenter', () => {
    gsap.to(lines, { backgroundColor: red, duration: 0.3 })
    gsap.to(lines[0], { rotate: 45, duration: 0.3 })
    gsap.to(lines[1], { rotate: -45, duration: 0.3 })
    gsap.to(ham, { borderColor: red, duration: 0.3 })
  })
  ham.addEventListener('mouseleave', () => {
    gsap.to(lines, { backgroundColor: white, duration: 0.3 })
    gsap.to(lines[0], { rotate: -45, duration: 0.3 })
    gsap.to(lines[1], { rotate: 45, duration: 0.3 })
    gsap.to(ham, { borderColor: white, duration: 0.3 })
  })
}

export default navHover

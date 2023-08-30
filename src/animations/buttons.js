import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function buttonFadeIn(button) {
  let tl = gsap.timeline({ paused: true })
  tl.fromTo(button, { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0 })

  ScrollTrigger.create({
    trigger: button,
    start: 'top 85%',
    onEnter: () => tl.play(),
  })
  ScrollTrigger.create({
    trigger: button,
    start: '-120% bottom',
    onLeaveBack: () => tl.pause(0),
  })
}

function buttonHover(button) {
  let tl = gsap.timeline({ paused: true })
  tl.to(button, {
    backgroundColor: '#e65d35',
    scale: 1.05,
    color: '#fcf8ef',
    duration: 0.3,
  })

  button.addEventListener('mouseenter', () => tl.play())
  button.addEventListener('mouseleave', () => tl.reverse())
}

const buttons = () => {
  const buttons = gsap.utils.toArray('[data-anim="button"]')

  buttons.forEach((button) => {
    buttonFadeIn(button)
    buttonHover(button)
  })
}

export default buttons

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const buttons = () => {
  const buttons = gsap.utils.toArray('[data-anim="button"]')

  buttons.forEach((button) => {
    let tl = gsap.timeline({ paused: true })
    tl.fromTo(
      button,
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0 }
    )

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
  })
}

export default buttons

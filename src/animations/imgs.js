import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const imgs = () => {
  const box = gsap.utils.toArray('.img-box')
  box.forEach((b) => {
    let hide = b.querySelector('.img-hide')
    let img = b.querySelector('img')
    gsap.set(hide, {
      scale: 2,
      transformOrigin: 'left top',
    })

    let tl = gsap.timeline({ paused: true })
    tl.to(hide, {
      xPercent: 100,
      duration: 1,
    }).from(
      img,
      {
        scale: 1.1,
        transformOrigin: 'left top',
        duration: 1,
      },
      '<'
    )

    ScrollTrigger.create({
      trigger: b,
      start: 'top 75%',
      onEnter: () => tl.play(),
    })
    ScrollTrigger.create({
      trigger: b,
      start: 'top bottom',
      onLeaveBack: () => tl.pause(0),
    })
  })
}

export default imgs

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { touchDevice } from '../../utilities/utilities'
gsap.registerPlugin(ScrollTrigger)

const exposEyes = () => {
  // eyeClose
  let eyeClose = document.querySelector('.eye-close')
  let close = gsap.timeline({ paused: true })
  close
    .fromTo(
      '#eye-close-svg',
      {
        rotate: 0,
        yPercent: -100,
      },
      {
        rotate: -16,
        yPercent: 0,
        transformOrigin: 'center center',
        duration: 0.7,
      }
    )
    .from(
      '.eye-close-red',
      {
        opacity: 0,
        scale: 0,
        transformOrigin: 'center center',
      },
      0
    )

    .from(
      '.eye-close-eyelashes',
      {
        opacity: 0,
        duration: 0.2,
        stagger: { amount: 0.5 },
      },
      0
    )

  ScrollTrigger.create({
    trigger: eyeClose,
    start: 'top 80%',
    onEnter: () => close.play(),
  })

  ScrollTrigger.create({
    trigger: eyeClose,
    start: 'top bottom',
    onLeaveBack: () => close.pause(0),
  })

  function replay() {
    gsap.to(eyeClose, { opacity: 0, duration: 0.2 }).then(() => {
      close.pause(0)
      gsap.to(eyeClose, { opacity: 1, duration: 0.2 })
      close.play()
    })
  }
  gsap.set(eyeClose, { opacity: 1 })

  // Eye open movement
  let pupil = document.querySelector('.eye-open-black')
  let iris = document.querySelector('.eye-open-red')
  let snap = gsap.utils.snap(0.1)
  let x = gsap.utils.mapRange(0, window.innerWidth, -5, 5)
  let y = gsap.utils.mapRange(0, window.innerHeight, -5, 5)
  let h = 0,
    v = 0
  gsap.set(pupil, { x: h, y: v })

  function onMove(e) {
    h = snap(x(e.clientX))
    v = snap(y(e.clientY))
    gsap.to(pupil, { xPercent: h, yPercent: v, duration: 0.4 })
    gsap.to(iris, { xPercent: h, yPercent: v, duration: 0.4 })
  }

  if (!touchDevice()) {
    eyeClose.addEventListener('click', replay)
    window.addEventListener('mousemove', onMove)
  }
}
export default exposEyes

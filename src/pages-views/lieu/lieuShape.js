/* eslint-disable no-unused-vars */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { touchDevice } from '../../utilities/utilities'

gsap.registerPlugin(ScrollTrigger)

const arrowShape = () => {
  const container = document.querySelector('.lieu-shape-container')
  const one = {
    container: document.querySelector('.rec4'),
    cBlue: document.querySelector('.circle9'),
    cPink: document.querySelector('.circle10'),
  }
  const two = {
    container: document.querySelector('.rec5'),
    cRed: document.querySelector('.circle11'),
    cWhite: document.querySelector('.circle12'),
  }

  const three = {
    tBlue: document.querySelector('.tri3'),
    tHide: document.querySelector('.tri3-hide'),
  }

  const four = {
    cPink: document.querySelector('.circle13'),
    tBlack: document.querySelector('.tri4'),
  }
  const five = {
    cYellow: document.querySelector('.circle14'),
    cPink: document.querySelector('.circle15'),
  }

  gsap.set(container, { rotate: 19 })

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
    },
  })
  tl.from(one.cPink, {
    xPercent: -50,
    yPercent: -50,
    scale: 0.8,
    duration: 0.4,
  })
    .to(
      one.cBlue,
      {
        transformOrigin: 'bottom left',
        rotate: 90,
        ease: 'none',
        duration: 0.4,
      },
      '-=0.2'
    )
    .to(
      two.cRed,
      {
        transformOrigin: 'bottom left',
        rotate: -90,
        ease: 'none',
        duration: 0.4,
      },
      '-=0.02'
    )
    .to(
      three.tHide,
      {
        yPercent: 100,
        ease: 'none',
        duration: 0.4,
      },
      '-=0.05'
    )
    .from(
      four.cPink,
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.25,
      },
      '-=0.1'
    )
    .from(
      five.cYellow,
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.25,
      },
      '-=0.4'
    )
    .from(
      four.cPink,
      {
        yPercent: 60,
        ease: 'none',
        duration: 0.4,
      },
      '<'
    )
    .from(
      four.tBlack,
      {
        yPercent: -60,
        ease: 'none',
        duration: 0.4,
      },
      '<'
    )
    .from(
      five.cYellow,
      {
        xPercent: -100,
        ease: 'none',
        duration: 0.4,
      },
      '<'
    )
    .from(
      five.cPink,
      {
        xPercent: 100,
        ease: 'none',
        duration: 0.4,
      },
      '<'
    )

  gsap.set(container, { opacity: 1 })

  function replay() {
    gsap.to(container, { opacity: 0, duration: 0.2 }).then(() => {
      tl.pause(0)
      gsap.to(container, { opacity: 1, duration: 0.2 })
      tl.play()
    })
  }

  if (!touchDevice()) {
    container.addEventListener('click', replay)
  }
}

export default arrowShape

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const trigger = (tri, tl) => {
  ScrollTrigger.create({
    trigger: tri,
    start: 'top 75%',
    onEnter: () => tl.play(),
  })
  ScrollTrigger.create({
    trigger: tri,
    start: '-50% bottom',
    onLeaveBack: () => tl.pause(0),
  })
}

const one = (tri) => {
  let mm = gsap.matchMedia(),
    breakPoint = 768
  mm.add(
    {
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    },
    (context) => {
      let { isDesktop, isMobile } = context.conditions

      let white = document.querySelector('#home-shape1-circle-white'),
        pink = document.querySelector('.home-shape1-circles-left'),
        yellow = document.querySelector('.home-shape1-circles-right')

      const pinkCircles = gsap.utils
        .toArray('.home-shape1-circle-pink-path')
        .reverse()

      // From state
      gsap.set(white, { xPercent: isDesktop ? -125 : -150 })
      gsap.set(pink, { xPercent: -25 })
      if (isMobile) {
        gsap.set(yellow, { xPercent: 25 })
      }

      let tl = gsap.timeline({ paused: true })
      tl.from(pinkCircles, {
        opacity: 0,
        scale: 0.95,
        stagger: { amount: 0.5 },
      })
        .from(
          yellow,
          {
            opacity: 0,
            scale: 0.5,
            duration: 1,
          },
          '<'
        )
        .to(pink, { xPercent: 25, ease: 'power1.inOut', duration: 0.7 })
        .to(white, { xPercent: -50, ease: 'power1.inOut', duration: 0.7 }, '<')
        .to(yellow, { xPercent: -25, ease: 'power1.inOut', duration: 0.7 }, '<')

      trigger(tri, tl)
    }
  )
}

const two = (tri) => {
  let tl = gsap.timeline({ paused: true })
  tl.from('.home-shape2-1', { xPercent: -100, opacity: 0, duration: 1 })
    .from('.home-shape2-2', { yPercent: -100, opacity: 0, duration: 1 }, '<')
    .from('.home-shape2-3', { yPercent: 100, opacity: 0, duration: 1 }, '<')

  trigger(tri, tl)
}

const three = (tri) => {
  let tl = gsap.timeline({ paused: true })
  tl.from('.home-shape3-circle-red', { yPercent: -50, opacity: 0, duration: 1 })
    .from(
      '.home-shape3-blue-dash-container',
      { yPercent: 50, opacity: 0, duration: 1 },
      '<'
    )
    .from(
      '.home-yellow-dash',
      { xPercent: -100, opacity: 0, stagger: { amount: 1 }, duration: 1 },
      '<'
    )
    .from(
      '.home-blue-dash',
      { xPercent: -100, opacity: 0, stagger: { amount: 1 }, duration: 1 },
      '<'
    )

  trigger(tri, tl)
}

const shapes = () => {
  const containers = gsap.utils.toArray(
    '.home-shape1, .home-shape2, .home-shape3'
  )
  one(containers[0])
  two(containers[1])
  three(containers[2])
}

export default shapes

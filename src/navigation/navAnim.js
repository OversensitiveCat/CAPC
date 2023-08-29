import { gsap } from 'gsap'

import { lenis } from '../global-views/lenis'
import { isDesktop } from '../utilities/utilities'

const navOpen = () => {
  lenis.stop()
  let ham = document.querySelector('.ham-close')
  gsap.set(ham, { xPercent: 0, opacity: 1 })
  let h = window.innerHeight
  gsap.set(ham, { y: -h })

  let desktop = isDesktop()

  let links,
    chars = []

  desktop
    ? (links = gsap.utils.toArray('.nav-link, .menu-credits-link'))
    : (links = gsap.utils.toArray('.nav-link'))

  links.forEach((link) => {
    chars.push(link.querySelectorAll('.char'))
  })

  let tl = gsap.timeline()
  tl.set('.menu', {
    zIndex: 50,
  })
    .to('.menu', {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      yPercent: 0,
      duration: 2,
      ease: 'power3.inOut',
    })
    .to(
      ham,
      {
        y: 0,
        duration: 2,
        ease: 'power3.inOut',
      },
      '<'
    )
    .to('.white-dash', { width: '100%', duration: 0.7 }, 2)
    .to('.nav-arrow-hide', { xPercent: 100, duration: 0.7 }, 2)
    .to(
      '.social-link',
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.2,
        stagger: { amount: 0.5 },
      },
      2
    )
  chars.forEach((arr) => {
    tl.to(
      arr,
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.2,
        stagger: { amount: 0.5 },
      },
      2
    )
  })

  if (desktop) {
    tl.to('.nav-photo-hide', { xPercent: 100, duration: 0.7 }, 2)
  }
}

//

const navClose = () => {
  let ham = document.querySelector('.ham-close')
  let h = window.innerHeight

  let desktop = isDesktop()

  let links,
    chars = [],
    socials = gsap.utils.toArray('.social-link').reverse()

  desktop
    ? (links = gsap.utils.toArray('.nav-link, .menu-credits-link'))
    : (links = gsap.utils.toArray('.nav-link'))

  links.forEach((link) => {
    chars.push(Array.from(link.querySelectorAll('.char')).reverse())
  })

  let tl = gsap.timeline()
  tl.to('.white-dash', { width: '0%', duration: 0.7 })
    .to('.nav-arrow-hide', { xPercent: 0, duration: 0.7 }, '<')
    .to(
      socials,
      {
        xPercent: -100,
        opacity: 0,
        duration: 0.2,
        stagger: { amount: 0.5 },
      },
      '<'
    )
    .to('.menu', {
      borderTopLeftRadius: desktop ? '30%' : 45,
      borderTopRightRadius: desktop ? '30%' : 45,
      yPercent: 100,
      duration: 2,
      ease: 'power3.inOut',
    })
    .to(
      ham,
      {
        y: -h,
        duration: 2,
        ease: 'power3.inOut',
      },
      '<'
    )
    .set('.menu', {
      zIndex: -50,
    })
  chars.forEach((arr) => {
    tl.to(
      arr,
      {
        xPercent: -100,
        opacity: 0,
        duration: 0.2,
        stagger: { amount: 0.5 },
      },
      0
    )
  })

  if (desktop) {
    tl.to('.nav-photo-hide', { xPercent: 0, duration: 0.7 }, 0)
  }
  tl.then(() => lenis.start())
}

export { navOpen, navClose }

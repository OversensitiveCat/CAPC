import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

import { navOpen, navClose } from './navAnim'
import navMove from './navMove'

const nav = (namespace) => {
  let header = document.querySelector('header')
  let hamOpen = document.querySelector('.ham-open')
  let hamClose = document.querySelector('.ham-close')

  let hero = true,
    footer = false,
    active = false

  ScrollTrigger.create({
    trigger: header,
    endTrigger: '.container',
    start: 'top top',
    end: 'bottom bottom',
    pin: header,
    pinSpacing: false,
    onEnter: () => {
      hero = false
    },
    onLeave: () => {
      footer = true
    },
    onEnterBack: () => {
      footer = false
    },
    onLeaveBack: () => {
      hero = true
    },
  })

  const open = () => {
    if (active) {
      return
    }

    active = true
    gsap.delayedCall(3, () => {
      active = false
    })

    if (namespace == 'home' && hero) {
      gsap.to(window, {
        scrollTo: header,
        duration: 0.75,
        ease: 'power1.inOut',
        onComplete: () => navOpen(),
      })
    } else if (footer) {
      gsap.to(window, {
        scrollTo: header,
        duration: 0.5,
        ease: 'power1.inOut',
        onComplete: () => navOpen(),
      })
    } else {
      navOpen()
    }

    window.addEventListener('mousemove', navMove)
  }

  const close = () => {
    if (active) {
      return
    }

    active = true
    gsap.delayedCall(3, () => {
      active = false
    })

    navClose()

    window.removeEventListener('mousemove', navMove)
  }

  // Events
  hamOpen.addEventListener('click', open)
  hamClose.addEventListener('click', close)
}

export default nav

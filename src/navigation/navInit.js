import { gsap } from 'gsap'
import SplitType from 'split-type'

import { isDesktop } from '../utilities/utilities'

const navInit = () => {
  let text = new SplitType('.nav-text, .menu-credits-link', {
    types: 'chars',
    tagName: 'span',
  })
  let chars = []
  text.elements.forEach((link) => {
    chars.push(link.querySelectorAll('.char'))
  })

  let desktop = isDesktop()
  // From state
  gsap.set('.menu', {
    borderTopLeftRadius: desktop ? '30%' : 45,
    borderTopRightRadius: desktop ? '30%' : 45,
    yPercent: 100,
  })

  chars.forEach((c) => gsap.set(c, { xPercent: -100, opacity: 0 }))
  gsap.set('.social-link', { xPercent: -100, opacity: 0 })
  gsap.set('.white-dash', { width: 0 })
  gsap.set('.line-close1', { rotate: -45 })
  gsap.set('.line-close2', { rotate: 45 })
}

export default navInit

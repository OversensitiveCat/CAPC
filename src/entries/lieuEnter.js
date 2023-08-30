import { gsap } from 'gsap'
import SplitType from 'split-type'

import header from '../animations/header'

const lieuEnter = () => {
  const heading = new SplitType('.lieu-hero h1, .lieu-hero .h1-subheading', {
    type: '.chars',
    tagName: 'span',
  })
  let chars = [
    heading.chars.slice(0, 4).reverse(),
    heading.chars.slice(4, 5),
    heading.chars.slice(5, 9),
    heading.chars.slice(9),
  ]

  const para = new SplitType('.hero-para', {
    type: '.words',
    tagName: 'span',
  })

  window.addEventListener('resize', () => para.revert())

  let tl = gsap.timeline({ paused: true })
  tl.from(chars[0], {
    xPercent: -150,
    yPercent: -75,
    scale: 0.8,
    rotate: 30,
    opacity: 0,
    duration: 0.35,
    stagger: { amount: 0.45 },
  })
    .from(
      chars[1],
      {
        yPercent: -75,
        scale: 0.8,
        opacity: 0,
        duration: 0.35,
      },
      '<'
    )
    .from(
      chars[2],
      {
        xPercent: 150,
        yPercent: -75,
        scale: 0.8,
        opacity: 0,
        duration: 0.35,
        stagger: { amount: 0.45 },
      },
      '<'
    )
    .from(
      chars[3],
      {
        opacity: 0,
        duration: 0.2,
        stagger: { amount: 0.5 },
      },
      '-=0.2'
    )
    .from(
      para.words,
      {
        opacity: 0,
        yPercent: 80,
        xPercent: -10,
        duration: 0.6,
        stagger: { amount: 1.5 },
      },
      '<'
    )

  gsap.set('.lieu-hero', { opacity: 1 })

  header()
  tl.play()
}

export default lieuEnter

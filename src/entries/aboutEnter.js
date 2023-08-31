import { gsap } from 'gsap'
import SplitType from 'split-type'

import header from '../animations/header'

const aboutEnter = () => {
  const heading = new SplitType('.about-hero h1, .about-hero .h1-subheading', {
    type: '.chars',
    tagName: 'span',
  })
  let chars = [
    heading.chars.slice(0, 3).reverse(),
    heading.chars.slice(3, 6),
    heading.chars.slice(6),
  ]

  const para = new SplitType('.about-hero-para', {
    type: '.words',
    tagName: 'span',
  })

  let tl = gsap.timeline({ paused: true, delay: 0.2 })
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
      chars[2],
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
    .from('.about-description > *', { opacity: 0, yPercent: 50 }, '>-=0.5')

  gsap.set('[data-anim]', { opacity: 1 })

  header()
  tl.play()
}

export default aboutEnter

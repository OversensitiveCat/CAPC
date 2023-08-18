import { gsap } from 'gsap'
import SplitType from 'split-type'

const aboutEnter = () => {
  // Header
  const bar = document.querySelector('.header')
  const logo = new SplitType('.header-logo', {
    types: 'chars',
    tagName: 'span',
  })
  let up = [logo.chars[0], logo.chars[2]],
    down = [logo.chars[1], logo.chars[3]]

  // Headings
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

  window.addEventListener('resize', () => para.revert())

  let tl = gsap.timeline({ paused: true })
  tl.from(up, {
    yPercent: -100,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  })
    .from(
      down,
      { yPercent: 100, opacity: 0, duration: 0.3, stagger: 0.2 },
      '-=0.3'
    )
    .from(
      '.ham-open',
      {
        opacity: 0,
        xPercent: -200,
        duration: 0.6,
      },
      '-=0.6'
    )
    .from(
      chars[0],
      {
        xPercent: -150,
        yPercent: -75,
        scale: 0.8,
        rotate: 30,
        opacity: 0,
        duration: 0.35,
        stagger: { amount: 0.45 },
      },
      '-=0.4'
    )
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

  gsap.set(bar, { opacity: 1 })
  gsap.set('.about-hero', { opacity: 1 })
  tl.play()
}

export default aboutEnter

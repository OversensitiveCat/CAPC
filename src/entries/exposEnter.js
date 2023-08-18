import { gsap } from 'gsap'
import SplitType from 'split-type'

const exposEnter = () => {
  // Header
  const bar = document.querySelector('.header')
  const logo = new SplitType('.header-logo', {
    types: 'chars',
    tagName: 'span',
  })
  let up = [logo.chars[0], logo.chars[2]],
    down = [logo.chars[1], logo.chars[3]]

  // Headings
  const heading = new SplitType('.expos-hero h1, .expos-hero .h1-subheading', {
    type: '.chars',
    tagName: 'span',
  })
  let chars = [
    heading.chars.slice(0, 5).reverse(),
    heading.chars.slice(5, 6),
    heading.chars.slice(6, 11),
    heading.chars.slice(11),
  ]

  const headingTwo = new SplitType('#next-expos h2', {
    type: 'chars',
    tagName: 'span',
  })

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
      headingTwo.chars,
      {
        opacity: 0,
        duration: 0.2,
        xPercent: -100,
        stagger: { amount: 0.3 },
      },
      1
    )
  // eyeOpen
  let eyeOpen = document.querySelector('.eye-open')

  let open = gsap.timeline({ paused: true })
  open
    .fromTo(
      '#eye-open-svg',
      {
        rotate: 0,
        yPercent: -100,
      },
      {
        rotate: 13,
        yPercent: 0,
        transformOrigin: 'center center',
        duration: 1,
      }
    )
    .from(
      '.eye-open-yellow',
      {
        opacity: 0,
        scale: 0,
        transformOrigin: 'center center',
      },
      0
    )
    .from(
      '.eye-open-red',
      {
        opacity: 0,
        scale: 0,
        transformOrigin: 'center center',
      },
      0.25
    )
    .from(
      '.eye-open-black',
      {
        opacity: 0,
        scale: 0,
        transformOrigin: 'center center',
      },
      0.5
    )
    .from(
      '.eye-open-eyelashes',
      {
        opacity: 0,
        duration: 0.2,
        stagger: { amount: 0.5 },
      },
      0.3
    )

  gsap.set(bar, { opacity: 1 })
  gsap.set('.expos-hero', { opacity: 1 })
  gsap.set(eyeOpen, { opacity: 1 })
  gsap.set('#next-expos h2', { opacity: 1 })

  function replay() {
    gsap.to(eyeOpen, { opacity: 0, duration: 0.2 }).then(() => {
      open.pause(0)
      gsap.to(eyeOpen, { opacity: 1, duration: 0.2 })
      open.play()
    })
  }

  eyeOpen.addEventListener('click', replay)

  tl.play()
  gsap.delayedCall(1, () => open.play())
}

export default exposEnter

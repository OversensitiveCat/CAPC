import { gsap } from 'gsap'
import SplitType from 'split-type'

const infosEnter = () => {
  // Header
  const bar = document.querySelector('.header')
  const logo = new SplitType('.header-logo', {
    types: 'chars',
    tagName: 'span',
  })
  let up = [logo.chars[0], logo.chars[2]],
    down = [logo.chars[1], logo.chars[3]]

  // Headings
  const heading = new SplitType('.infos-hero h1', {
    type: '.chars',
    tagName: 'span',
  })
  let chars = [
    heading.chars.slice(0, 6).reverse(),
    heading.chars.slice(6, 12),
    heading.chars.slice(12, 16).reverse(),
    heading.chars.slice(16, 17),
    heading.chars.slice(17),
  ]

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
        rotate: -30,
        opacity: 0,
        duration: 0.35,
        stagger: { amount: 0.45 },
      },
      '<'
    )
    .from(
      chars[2],
      {
        xPercent: -150,
        yPercent: 75,
        scale: 0.8,
        rotate: -30,
        opacity: 0,
        duration: 0.35,
        stagger: { amount: 0.45 },
      },
      '<'
    )
    .from(
      chars[3],
      {
        yPercent: -75,
        scale: 0.8,
        opacity: 0,
        duration: 0.35,
        stagger: { amount: 0.45 },
      },
      '<'
    )
    .from(
      chars[4],
      {
        xPercent: 150,
        yPercent: 75,
        scale: 0.8,
        rotate: 30,
        opacity: 0,
        duration: 0.35,
        stagger: { amount: 0.45 },
      },
      '<'
    )

  // Shape
  let shapeContainer = document.querySelector('.infos-shape-container')
  let tlShape = gsap.timeline({ paused: true })
  tlShape
    .from('.infos-shape-top-square', { opacity: 0, yPercent: -50 })
    .from('.infos-shape-bottom-square', { opacity: 0, yPercent: 50 }, '<')
    .from('.infos-shape-circle-pink', {
      opacity: 0,
      xPercent: -100,
      yPercent: 100,
      duration: 0.75,
    })
    .from(
      '.infos-shape-circle-red',
      { opacity: 0, xPercent: 100, yPercent: -100, duration: 0.75 },
      '<'
    )
    .from(
      '.infos-shape-circle-blue-container',
      {
        rotate: -90,
        transformOrigin: 'bottom left',
        ease: 'none',
        duration: 0.75,
      },
      '+=0.25'
    )
    .from('.infos-shape-circle-black-container', {
      rotate: 90,
      transformOrigin: 'top right',
      ease: 'none',
      duration: 0.75,
    })

  gsap.set(bar, { opacity: 1 })
  gsap.set('.infos-hero', { opacity: 1 })
  gsap.set(shapeContainer, { opacity: 1 })

  tl.play()
  tlShape.play()

  function replay() {
    gsap.to(shapeContainer, { opacity: 0, duration: 0.2 }).then(() => {
      tlShape.pause(0)
      gsap.to(shapeContainer, { opacity: 1, duration: 0.2 })
      tlShape.play()
    })
  }
  shapeContainer.addEventListener('click', replay)
}

export default infosEnter

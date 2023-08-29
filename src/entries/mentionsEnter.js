import { gsap } from 'gsap'
import SplitType from 'split-type'

import { touchDevice } from '../utilities/utilities'

const mentionsEnter = () => {
  // Header
  const bar = document.querySelector('.header')
  const logo = new SplitType('.header-logo', {
    types: 'chars',
    tagName: 'span',
  })
  let up = [logo.chars[0], logo.chars[2]],
    down = [logo.chars[1], logo.chars[3]]

  // Headings
  const heading = new SplitType('.mentions-hero h1', {
    type: '.chars',
    tagName: 'span',
  })
  let chars = [
    heading.chars.slice(0, 4).reverse(),
    heading.chars.slice(4, 8),
    heading.chars.slice(8, 12).reverse(),
    heading.chars.slice(12, 16),
    heading.chars.slice(16, 19).reverse(),
    heading.chars.slice(19, 20),
    heading.chars.slice(20),
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
        scale: 0.8,
        rotate: 30,
        opacity: 0,
        duration: 0.35,
        stagger: { amount: 0.45 },
      },
      '<'
    )
    .from(
      chars[3],
      {
        xPercent: 150,
        scale: 0.8,
        rotate: -30,
        opacity: 0,
        duration: 0.35,
        stagger: { amount: 0.45 },
      },
      '<'
    )
    .from(
      chars[4],
      {
        xPercent: -150,
        yPercent: 75,
        scale: 0.8,
        rotate: 30,
        opacity: 0,
        duration: 0.35,
        stagger: { amount: 0.45 },
      },
      '<'
    )
    .from(
      chars[5],
      {
        yPercent: 75,
        scale: 0.8,
        opacity: 0,
        duration: 0.35,
      },
      '<'
    )
    .from(
      chars[6],
      {
        xPercent: 150,
        yPercent: 75,
        scale: 0.8,
        opacity: 0,
        duration: 0.35,
        stagger: { amount: 0.45 },
      },
      '<'
    )
    .from(
      '.mention-item',
      {
        opacity: 0,
        yPercent: 100,
        duration: 0.75,
        stagger: 0.1,
      },
      '-=0.5'
    )

  // Shape
  let shapeContainer = document.querySelector('.mentions-shape-container')
  let tlShape = gsap.timeline({ paused: true })
  tlShape
    .from(
      '.mentions-middle-circle',
      { opacity: 0, scale: 0.5, duration: 0.75 },
      0
    )
    .from(
      '.mentions-square',
      { opacity: 0, yPercent: -100, duration: 0.75 },
      0.5
    )
    .from(
      '.mentions-middle-circle-black',
      { opacity: 0, yPercent: 110, duration: 0.75 },
      0.5
    )
    .from(
      '.mentions-top-circle-red-container',
      { opacity: 0, yPercent: -100, rotate: 90, duration: 0.75 },
      0.5
    )
    .from(
      '.mentions-top-circle-pink-container',
      { opacity: 0, yPercent: -100, rotate: 90, duration: 0.75 },
      0.5
    )
    .from(
      '.mentions-bottom-circle-red',
      { opacity: 0, yPercent: 100, duration: 0.75 },
      0.5
    )
    .from(
      '.mentions-bottom-circle-pink',
      { opacity: 0, yPercent: 100, duration: 0.75 },
      0.5
    )
    .from('.mentions-dash', { opacity: 0, yPercent: 150, duration: 0.75 }, 1.25)
    .from(
      '.mentions-dash-blue',
      { opacity: 0, yPercent: 150, duration: 0.75 },
      1.25
    )
    .from(
      '.mentions-dash-red',
      { opacity: 0, yPercent: 150, duration: 0.75 },
      1.25
    )
    .from(
      '.mentions-dash-black',
      { opacity: 0, yPercent: 150, duration: 0.75 },
      1.25
    )

  gsap.set(bar, { opacity: 1 })
  gsap.set('.mentions-hero', { opacity: 1 })
  gsap.set('.mentions-wrapper', { opacity: 1 })
  gsap.set('.mentions-shape-container', { opacity: 1 })

  tl.play()
  tlShape.play()

  function replay() {
    gsap.to(shapeContainer, { opacity: 0, duration: 0.2 }).then(() => {
      tlShape.pause(0)
      gsap.to(shapeContainer, { opacity: 1, duration: 0.2 })
      tlShape.play()
    })
  }

  if (!touchDevice()) {
    shapeContainer.addEventListener('click', replay)
  }
}

export default mentionsEnter

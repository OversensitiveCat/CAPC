import { gsap } from 'gsap'
import SplitType from 'split-type'

import { touchDevice } from '../utilities/utilities'

const homeEnter = () => {
  const hero = document.querySelector('.home-hero')

  if (touchDevice()) {
    gsap.set(hero, { height: window.innerHeight })
  }

  const heading = new SplitType('.home-heading, .home-subheading', {
    types: 'chars',
    tagName: 'span',
  })

  let chars = [
    heading.chars.slice(0, 3).reverse(),
    heading.chars.slice(3, 6),
    heading.chars.slice(6, 12).reverse(),
    heading.chars.slice(12, 21),
    heading.chars.slice(21, 28).reverse(),
    heading.chars.slice(28, 34),
    heading.chars.slice(34),
  ]

  let middle = gsap.timeline({ paused: true })
  middle
    .from(
      chars[0],
      {
        xPercent: -150,
        yPercent: -100,
        scale: 0.8,
        rotate: 30,
        opacity: 0,
        duration: 0.25,
        stagger: { amount: 0.25 },
      },
      '+=0.6'
    )
    .from(
      chars[1],
      {
        xPercent: 150,
        yPercent: -100,
        scale: 0.8,
        rotate: -30,
        opacity: 0,
        duration: 0.25,
        stagger: { amount: 0.25 },
      },
      '<'
    )
    .from(
      chars[2],
      {
        xPercent: -150,
        scale: 0.8,
        opacity: 0,
        duration: 0.25,
        stagger: { amount: 0.25 },
      },
      '-=0.3'
    )
    .from(
      chars[3],
      {
        xPercent: 150,
        scale: 0.8,
        opacity: 0,
        duration: 0.25,
        stagger: { amount: 0.25 },
      },
      '<'
    )
    .from(
      chars[4],
      {
        xPercent: -150,
        yPercent: 100,
        scale: 0.8,
        rotate: 30,
        opacity: 0,
        duration: 0.25,
        stagger: { amount: 0.25 },
      },
      '-=0.3'
    )
    .from(
      chars[5],
      {
        xPercent: 150,
        yPercent: 100,
        scale: 0.8,
        rotate: -30,
        opacity: 0,
        duration: 0.25,
        stagger: { amount: 0.25 },
      },
      '<'
    )
    .from(
      chars[6],
      {
        opacity: 0,
        duration: 0.2,
        stagger: { amount: 0.5 },
      },
      '+=0.5'
    )

  const one = {
    circleRed: document.querySelector('.circle1'),
    circleBlue: document.querySelector('.circle2'),
    recYellow: document.querySelector('.rec1'),
    quarterPink: document.querySelector('.quarter1'),
    quarterBlack: document.querySelector('.quarter2'),
  }

  let top = gsap.timeline({ paused: true })
  top
    .from(
      one.recYellow,
      {
        scale: 0,
        opacity: 0,
        duration: 1,
      },
      '+=0.6'
    )
    .from(one.circleRed, { yPercent: 100, opacity: 0, duration: 1 })
    .from(one.quarterPink, { yPercent: 100, opacity: 0, duration: 1 }, '<')
    .from(one.circleBlue, { xPercent: 100, opacity: 0, duration: 1 }, '<')
    .from(one.quarterBlack, { xPercent: 100, opacity: 0, duration: 1 }, '<')

  const two = {
    triBlue: document.querySelector('.tri1'),
    triBlack: document.querySelector('.tri2'),
    circlePink: document.querySelector('.circle3'),
    circleRed: document.querySelector('.circle8'),
    recYellowOne: document.querySelector('.rec2'),
    recYellowTwo: document.querySelector('.rec3'),
    quarterRed: document.querySelector('.circle5'),
    quarterPink: document.querySelector('.circle7'),
    largeBlack: document.querySelector('.circle4'),
    largeBlue: document.querySelector('.circle6'),
  }

  let bottom = gsap.timeline({ paused: true })
  bottom
    .from(two.recYellowOne, { yPercent: -50, opacity: 0 }, '+=0.6')
    .from(two.recYellowTwo, { yPercent: 50, opacity: 0 }, '<')
    .from(two.largeBlack, { yPercent: 50, opacity: 0 })
    .from(two.largeBlue, { yPercent: -50, opacity: 0 }, '<')
    .from(two.circleRed, { xPercent: -100, opacity: 0 })
    .from(two.quarterPink, { xPercent: -100, opacity: 0 }, '<')
    .from(two.circlePink, { xPercent: 100, opacity: 0 }, '<')
    .from(two.quarterRed, { xPercent: 100, opacity: 0 }, '<')
    .from(two.triBlue, { xPercent: 100, opacity: 0 })
    .from(two.triBlack, { xPercent: 100, opacity: 0 }, '<')

  gsap.set(hero, { opacity: 1 })
  top.play()
  middle.play()
  bottom.play()
}

export default homeEnter

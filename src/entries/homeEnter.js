import { gsap } from 'gsap'
import SplitType from 'split-type'

import { touchDevice } from '../utilities/utilities'

const homeEnter = () => {
  const hero = document.querySelector('.home-hero')

  if (touchDevice()) {
    gsap.set(hero, { minHeight: window.innerHeight })
  }

  const heading = new SplitType('.home-heading, .home-subheading', {
    types: 'chars',
    tagName: 'span',
  })

  let chars = [
    heading.chars.slice(0, 3).reverse(),
    heading.chars.slice(3, 6),
    heading.chars.slice(6, 15).reverse(),
    heading.chars.slice(15, 22),
    heading.chars.slice(22, 29).reverse(),
    heading.chars.slice(29, 36),
    heading.chars.slice(36),
  ]

  let middle = gsap.timeline({ paused: true, delay: 0.6 })
  middle
    .from(chars[0], {
      xPercent: -125,
      yPercent: -80,
      scale: 0.8,
      rotate: 30,
      opacity: 0,
      duration: 0.3,
      stagger: { amount: 0.3 },
    })
    .from(
      chars[1],
      {
        xPercent: 150,
        yPercent: -80,
        scale: 0.8,
        rotate: -30,
        opacity: 0,
        duration: 0.3,
        stagger: { amount: 0.3 },
      },
      '<'
    )
    .from(
      chars[2],
      {
        xPercent: -150,
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        stagger: { amount: 0.45 },
      },
      '-=0.1'
    )
    .from(
      chars[3],
      {
        xPercent: 150,
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        stagger: { amount: 0.45 },
      },
      '<'
    )
    .from(
      chars[4],
      {
        xPercent: -150,
        yPercent: 80,
        scale: 0.8,
        rotate: 30,
        opacity: 0,
        duration: 0.3,
        stagger: { amount: 0.45 },
      },
      '-=0.1'
    )
    .from(
      chars[5],
      {
        xPercent: 150,
        yPercent: 80,
        scale: 0.8,
        rotate: -30,
        opacity: 0,
        duration: 0.3,
        stagger: { amount: 0.45 },
      },
      '<'
    )
    .from(
      chars[6],
      {
        opacity: 0,
        duration: 0.2,
        stagger: { amount: 0.45 },
      },
      '+=0.3'
    )

  const one = {
    circleRed: document.querySelector('.circle1'),
    circleBlue: document.querySelector('.circle2'),
    recYellow: document.querySelector('.rec1'),
    quarterPink: document.querySelector('.quarter1'),
    quarterBlack: document.querySelector('.quarter2'),
  }

  let top = gsap.timeline({ paused: true, delay: 0.6 })
  top
    .from(one.recYellow, {
      scale: 0,
      opacity: 0,
      duration: 1,
    })
    .from(one.circleRed, { yPercent: 100, opacity: 0, duration: 0.925 })
    .from(one.quarterPink, { yPercent: 100, opacity: 0, duration: 0.925 }, '<')
    .from(one.circleBlue, { xPercent: 100, opacity: 0, duration: 0.925 })
    .from(one.quarterBlack, { xPercent: 100, opacity: 0, duration: 0.925 }, '<')

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

  let bottom = gsap.timeline({ paused: true, delay: 0.6 })
  bottom
    .from(two.recYellowOne, { yPercent: -50, opacity: 0, duration: 0.7125 })
    .from(two.recYellowTwo, { yPercent: 50, opacity: 0, duration: 0.7125 }, '<')
    .from(two.largeBlack, { yPercent: 50, opacity: 0, duration: 0.7125 })
    .from(two.largeBlue, { yPercent: -50, opacity: 0, duration: 0.7125 }, '<')
    .from(two.circleRed, { xPercent: -100, opacity: 0, duration: 0.7125 })
    .from(
      two.quarterPink,
      { xPercent: -100, opacity: 0, duration: 0.7125 },
      '<'
    )
    .from(two.circlePink, { xPercent: 100, opacity: 0, duration: 0.7125 }, '<')
    .from(two.quarterRed, { xPercent: 100, opacity: 0, duration: 0.7125 }, '<')
    .from(two.triBlue, { xPercent: 100, opacity: 0, duration: 0.7125 })
    .from(two.triBlack, { xPercent: 100, opacity: 0, duration: 0.7125 }, '<')

  gsap.set(hero, { opacity: 1 })
  top.play()
  middle.play()
  bottom.play()
  // console.log({
  //   top: top.totalDuration(),
  //   middle: middle.totalDuration(),
  //   bottom: bottom.totalDuration(),
  // })
}

export default homeEnter

/* eslint-disable no-unused-vars */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const trigger = (para, tl) => {
  ScrollTrigger.create({
    trigger: para,
    start: 'top 75%',
    onEnter: () => tl.play(),
  })
  ScrollTrigger.create({
    trigger: para,
    start: '-50% bottom',
    onLeaveBack: () => tl.pause(0),
  })
}

const one = (para) => {
  let tl = gsap.timeline({ paused: true })
  tl.from('.home-quote1-shape1', { xPercent: -100, opacity: 0, duration: 1 })
    .from(
      '.home-quote1-shape2',
      { yPercent: -100, opacity: 0, duration: 1 },
      '<'
    )
    .from(
      '.home-quote1-shape3',
      { yPercent: 100, opacity: 0, duration: 1 },
      '<'
    )

  trigger(para, tl)
}

const two = (para) => {
  let white = document.querySelector('#home-quote2-circle-white'),
    pink = document.querySelector('.home-quote2-circles-left'),
    yellow = document.querySelector('.home-quote2-circles-right')

  const pinkCircles = gsap.utils
    .toArray('.home-quote2-circle-pink-path')
    .reverse()

  gsap.set(white, { xPercent: -150 })
  gsap.set(pink, { xPercent: -25 })
  gsap.set(yellow, { xPercent: 25 })
  let tl = gsap.timeline({ paused: true })
  tl.from(pinkCircles, {
    opacity: 0,
    scale: 0.95,
    stagger: { amount: 0.5 },
  })
    .from(
      yellow,
      {
        opacity: 0,
        scale: 0.5,
        duration: 1,
      },
      '<'
    )
    .to(pink, { xPercent: 25, ease: 'power1.inOut', duration: 0.7 })
    .to(white, { xPercent: -50, ease: 'power1.inOut', duration: 0.7 }, '<')
    .to(yellow, { xPercent: -25, ease: 'power1.inOut', duration: 0.7 }, '<')

  trigger(para, tl)
}

const three = (para) => {
  let tl = gsap.timeline({ paused: true })
  tl.from('.home-quote3-circle-red', { yPercent: -50, opacity: 0, duration: 1 })
    .from(
      '.home-quote3-blue-dash-container',
      { yPercent: 50, opacity: 0, duration: 1 },
      '<'
    )
    .from(
      '.home-yellow-dash',
      { xPercent: -100, opacity: 0, stagger: { amount: 1 }, duration: 1 },
      '<'
    )
    .from(
      '.home-blue-dash',
      { xPercent: -100, opacity: 0, stagger: { amount: 1 }, duration: 1 },
      '<'
    )

  trigger(para, tl)
}

const shapes = () => {
  const paras = gsap.utils.toArray('.home-quote-para')

  one(paras[0])
  two(paras[1])
  three(paras[2])
}

export default shapes

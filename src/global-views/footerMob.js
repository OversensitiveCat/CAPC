/* eslint-disable no-unused-vars */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const footerMob = (box, chars, text, dash, smallLinks, svg) => {
  // Timelines
  let tlBottom = gsap.timeline({ paused: true })
  tlBottom
    .from(dash[3], { width: 0, duration: 0.6 })
    .from(
      chars[5],
      {
        opacity: 0,
        xPercent: -100,
        duration: 0.2,
        stagger: { amount: 0.4 },
      },
      '<'
    )
    .from(
      text[5],
      {
        opacity: 0,
        yPercent: 60,
        duration: 0.4,
      },
      '<'
    )

    .from(
      smallLinks[1],
      {
        opacity: 0,
        xPercent: -20,
        duration: 0.6,
      },
      '-=0.2'
    )
    .from(
      smallLinks[2],
      {
        opacity: 0,
        xPercent: -20,
        duration: 0.6,
      },
      '<'
    )
    .from(
      svg,
      {
        opacity: 0,
        yPercent: 20,
        duration: 0.6,
      },
      '<'
    )

  let tlMiddle = gsap.timeline({ paused: true })
  tlMiddle
    .from(dash[0], { width: 0, duration: 0.6 })
    .from(dash[1], { width: 0, duration: 0.6 }, '<')
    .from(
      chars[2],
      {
        opacity: 0,
        xPercent: -100,
        duration: 0.2,
        stagger: { amount: 0.4 },
      },
      '<'
    )
    .from(
      chars[3],
      {
        opacity: 0,
        xPercent: -100,
        duration: 0.2,
        stagger: { amount: 0.4 },
      },
      '<'
    )
    .from(
      text[2],
      {
        opacity: 0,
        yPercent: 60,
        duration: 0.4,
        stagger: { amount: 0.4 },
      },
      '<'
    )
    .from(
      text[3],
      {
        opacity: 0,
        yPercent: 60,
        duration: 0.4,
        stagger: { amount: 0.4 },
      },
      '<'
    )
    .from(
      smallLinks[0],
      {
        opacity: 0,
        xPercent: -20,
        duration: 0.6,
      },
      '-=0.2'
    )

  let tlTop = gsap.timeline({ paused: true })
  tlTop
    .from(
      chars[0],
      {
        opacity: 0,
        xPercent: -100,
        duration: 0.2,
        stagger: { amount: 0.4 },
      },
      '<'
    )
    .from(
      chars[1],
      {
        opacity: 0,
        xPercent: -100,
        duration: 0.2,
        stagger: { amount: 0.4 },
      },
      '<'
    )
    .from(
      text[0],
      {
        opacity: 0,
        yPercent: 60,
        duration: 0.4,
        stagger: { amount: 0.4 },
      },
      '<'
    )
    .from(
      text[1],
      {
        opacity: 0,
        yPercent: 60,
        duration: 0.4,
        stagger: { amount: 0.4 },
      },
      '<'
    )

  // Triggers
  let triggerBottom = box[5].getBoundingClientRect().bottom - 45
  let triggerMiddle = box[2].getBoundingClientRect().bottom - 45
  let triggerTop = box[0].getBoundingClientRect().bottom - 45

  function trigger(tl, tri) {
    ScrollTrigger.create({
      trigger: '.container',
      start: `bottom ${tri}`,
      onEnter: () => tl.play(),
    })

    ScrollTrigger.create({
      trigger: '.container',
      start: 'bottom bottom',
      onLeaveBack: () => tl.pause(0),
    })
  }

  trigger(tlBottom, triggerBottom)
  trigger(tlMiddle, triggerMiddle)
  trigger(tlTop, triggerTop)
}

export default footerMob

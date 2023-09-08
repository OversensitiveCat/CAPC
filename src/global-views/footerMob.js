import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { touchDevice } from '../utilities/utilities'

gsap.registerPlugin(ScrollTrigger)

const footerMob = (
  footer,
  box,
  chars,
  text,
  dash,
  smallLinks,
  svg,
  capcLogo
) => {
  // Timelines
  let tlBottom = gsap.timeline({ paused: true })
  tlBottom
    .from(dash[3], { xPercent: -100, duration: 0.6 })
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
      smallLinks,
      {
        opacity: 0,
        xPercent: -20,
        duration: 0.6,
        stagger: 0.05,
      },
      '-=0.2'
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
    .from(
      capcLogo,
      {
        opacity: 0,
        yPercent: 20,
        duration: 0.6,
      },
      '<'
    )

  let tlMiddle = gsap.timeline({ paused: true })
  tlMiddle
    .from(dash[0], { xPercent: -100, duration: 0.6 })
    .from(dash[1], { xPercent: -100, duration: 0.6 }, '<')
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
  let trigger = (tl, tri) => {
    ScrollTrigger.create({
      trigger: '.container',
      start: `bottom ${tri}`,
      invalidateOnRefresh: true,
      onEnter: () => tl.play(),
    })

    ScrollTrigger.create({
      trigger: '.container',
      start: 'bottom bottom',
      onLeaveBack: () => tl.pause(0),
    })
  }

  // When the screen is higher than the footer
  if (touchDevice()) {
    if (footer.offsetHeight > window.innerHeight - 75) {
      console.log(true)
      gsap.set(footer, { position: 'static' })
      triggerBottom = box[5]
      triggerMiddle = box[2]
      triggerTop = box[0]

      trigger = (tl, tri) => {
        ScrollTrigger.create({
          trigger: tri,
          start: 'top 80%',
          invalidateOnRefresh: true,
          onEnter: () => tl.play(),
        })

        ScrollTrigger.create({
          trigger: '.container',
          start: 'bottom bottom',
          onLeaveBack: () => tl.pause(0),
        })
      }
    }
  }

  trigger(tlBottom, triggerBottom)
  trigger(tlMiddle, triggerMiddle)
  trigger(tlTop, triggerTop)
}

export default footerMob

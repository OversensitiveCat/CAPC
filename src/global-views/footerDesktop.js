import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const footerDesktop = (logo, sublogo, chars, text, smallLinks, svg) => {
  // Timelines
  let tlBottom = gsap.timeline({ paused: true })
  tlBottom
    .from('.footer .dash', { width: 0, duration: 0.6 })
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
      chars[4],
      {
        opacity: 0,
        xPercent: -100,
        duration: 0.2,
        stagger: { amount: 0.4 },
      },
      '<'
    )
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
      text[2],
      {
        opacity: 0,
        yPercent: 60,
        duration: 0.4,
        stagger: { amount: 0.4 },
      },
      '-=0.2'
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
      text[4],
      {
        opacity: 0,
        yPercent: 60,
        duration: 0.4,
        stagger: { amount: 0.4 },
      },
      '<'
    )
    .from(
      text[5],
      {
        opacity: 0,
        yPercent: 100,
        duration: 0.6,
      },
      '<'
    )
    .from(
      '.footer-bottom > .footer-link-small',
      {
        opacity: 0,
        xPercent: -20,
        duration: 0.6,
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

  let tlTop = gsap.timeline({ paused: true })
  tlTop
    .from('.footer-dash-pointed', { width: 0, duration: 0.6 })
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
      '-=0.2'
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
    .from(
      logo,
      {
        opacity: 0,
        scale: 0.4,
        transformOrigin: 'bottom left',
        duration: 0.6,
        stagger: { amount: 0.6 },
      },
      0
    )
    .from(
      sublogo,
      {
        xPercent: 100,
        opacity: 0,
        duration: 0.4,
        stagger: { amount: 0.4 },
      },
      '<'
    )

  // Triggers

  let triggerBottom = text[5][0].getBoundingClientRect().bottom
  let triggerTop =
    document.querySelector('.footer-top').getBoundingClientRect().bottom - 30

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
  trigger(tlTop, triggerTop)
}

export default footerDesktop

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const sectionHeadings = () => {
  const arr = gsap.utils.toArray('[data-anim="section-heading"]')
  if (!arr.length) return

  const headings = new SplitType(arr, {
    types: 'chars',
    tagName: 'span',
  })

  headings.elements.forEach((h) => {
    let chars = h.querySelectorAll('.char')

    let tl = gsap.timeline({ paused: true })
    tl.from(chars, {
      opacity: 0,
      duration: 0.2,
      xPercent: -100,
      stagger: { amount: 0.3 },
    })

    ScrollTrigger.create({
      trigger: h,
      start: 'top 80%',
      onEnter: () => tl.play(),
    })
    ScrollTrigger.create({
      trigger: h,
      start: 'top bottom',
      onLeaveBack: () => tl.pause(0),
    })

    gsap.set(h, { opacity: 1 })
  })
}

export default sectionHeadings

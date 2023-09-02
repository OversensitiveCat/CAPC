import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const exposFadeIn = () => {
  // Next expos
  const nextItems = gsap.utils.toArray('#next-expos .expo-item')
  if (nextItems.length) {
    nextItems.forEach((e) => {
      let top = e.querySelector('.expo-item-top')
      let hide = top.querySelector('.img-hide')
      let bottom = e.querySelector('.expo-item-bottom')
      let now = bottom.querySelector('.expo-item-now')

      let tl = gsap.timeline({ paused: true })

      tl.to(hide, { xPercent: 100, duration: 1.5, ease: 'power2.inOut' }).from(
        bottom,
        { yPercent: 50, opacity: 0, duration: 1 },
        0
      )

      if (gsap.getProperty(now, 'display') !== 'none') {
        tl.fromTo(
          now,
          { rotate: 0, yPercent: -75, xPercent: 25, opacity: 0 },
          { rotate: 21, yPercent: 0, xPercent: 0, opacity: 1, duration: 0.7 },
          0.8
        )
      }

      ScrollTrigger.create({
        trigger: e,
        start: 'top 75%',
        onEnter: () => tl.play(),
      })
      ScrollTrigger.create({
        trigger: e,
        start: 'top bottom',
        onLeaveBack: () => tl.pause(0),
      })
    })
  }
  let empty = document.querySelector('.empty-text')
  if (empty) {
    gsap.from(empty, {
      yPercent: 100,
      opacity: 0,
      scrollTrigger: { trigger: empty, start: 'top 75%' },
    })
  }

  // Past expos
  const pastItems = gsap.utils.toArray('#past-expos .expo-item')
  pastItems.forEach((e) => {
    let bottom = e.querySelector('.expo-item-bottom')

    let tl = gsap.timeline({ paused: true })
    tl.from(bottom, { yPercent: 50, opacity: 0, duration: 1 })

    ScrollTrigger.create({
      trigger: e,
      start: 'top 75%',
      onEnter: () => tl.play(),
    })
    ScrollTrigger.create({
      trigger: e,
      start: 'top bottom',
      onLeaveBack: () => tl.pause(0),
    })
  })

  gsap.set('.next-expo-wrapper, .past-expo-wrapper', { opacity: 1 })
}

export default exposFadeIn

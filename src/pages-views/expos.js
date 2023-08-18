import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const expos = () => {
  // eyeClose
  let eyeClose = document.querySelector('.eye-close')
  let close = gsap.timeline({ paused: true })
  close
    .fromTo(
      '#eye-close-svg',
      {
        rotate: 0,
        yPercent: -100,
      },
      {
        rotate: -16,
        yPercent: 0,
        transformOrigin: 'center center',
        duration: 0.7,
      }
    )
    .from(
      '.eye-close-red',
      {
        opacity: 0,
        scale: 0,
        transformOrigin: 'center center',
      },
      0
    )

    .from(
      '.eye-close-eyelashes',
      {
        opacity: 0,
        duration: 0.2,
        stagger: { amount: 0.5 },
      },
      0
    )

  ScrollTrigger.create({
    trigger: eyeClose,
    start: 'top 80%',
    onEnter: () => close.play(),
  })

  ScrollTrigger.create({
    trigger: eyeClose,
    start: 'top bottom',
    onLeaveBack: () => close.pause(0),
  })

  function replay() {
    gsap.to(eyeClose, { opacity: 0, duration: 0.2 }).then(() => {
      close.pause(0)
      gsap.to(eyeClose, { opacity: 1, duration: 0.2 })
      close.play()
    })
  }
  eyeClose.addEventListener('click', replay)
  gsap.set(eyeClose, { opacity: 1 })

  // Eye open
  let pupil = document.querySelector('.eye-open-black')
  let iris = document.querySelector('.eye-open-red')
  let snap = gsap.utils.snap(0.1)
  let x = gsap.utils.mapRange(0, window.innerWidth, -5, 5)
  let y = gsap.utils.mapRange(0, window.innerHeight, -5, 5)
  let h = 0,
    v = 0
  gsap.set(pupil, { x: h, y: v })

  function onMove(e) {
    h = snap(x(e.clientX))
    v = snap(y(e.clientY))
    gsap.to(pupil, { xPercent: h, yPercent: v, duration: 0.4 })
    gsap.to(iris, { xPercent: h, yPercent: v, duration: 0.4 })
  }

  window.addEventListener('mousemove', onMove)

  // Next expos
  const nextItems = gsap.utils.toArray('#next-expos .expo-item')
  if (nextItems.length) {
    nextItems.forEach((e) => {
      let top = e.querySelector('.expo-item-top')
      let hide = top.querySelector('.img-hide')
      let bottom = e.querySelector('.expo-item-bottom')
      let now = bottom.querySelector('.expo-item-now')

      let tl = gsap.timeline({ paused: true })

      tl.to(hide, { xPercent: 100, duration: 1.5, ease: 'power2.out' }).from(
        bottom,
        { yPercent: 50, opacity: 0, duration: 1 },
        0
      )

      if (!now.style.display == 'none') {
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

export default expos

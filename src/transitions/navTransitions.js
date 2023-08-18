import { gsap } from 'gsap'
import imagesLoaded from 'imagesloaded'

import { lenis } from '../global-views/lenis'
import navMove from '../navigation/navMove'

const navLeave = (data, done) => {
  const links = gsap.utils.toArray('.nav-link, .menu-credits-link')
  let socials = gsap.utils.toArray('.social-link').reverse()
  let chars = []
  links.forEach((link) => {
    chars.push(Array.from(link.querySelectorAll('.char')).reverse())
  })

  let tl = gsap.timeline()
  tl.to('.white-dash', { width: '0%', duration: 0.7 })
    .to('.nav-arrow-hide', { xPercent: 0, duration: 0.7 }, '<')
    .to('.nav-photo-hide', { xPercent: 0, duration: 0.7 }, '<')
    .to(
      socials,
      {
        xPercent: -100,
        opacity: 0,
        duration: 0.2,
        stagger: { amount: 0.5 },
      },
      '<'
    )
    .to(
      '.ham-close',
      {
        xPercent: -200,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.inOut',
      },
      '<'
    )
  chars.forEach((arr) => {
    tl.to(
      arr,
      {
        xPercent: -100,
        opacity: 0,
        duration: 0.2,
        stagger: { amount: 0.5 },
      },
      0
    )
  })

  tl.then(() => {
    let imgLoad = imagesLoaded(data.next.container)
    imgLoad.on('done', function () {
      data.current.container.remove()
      window.scrollTo(0, 0)
      done()
    })
  })
}

const navEnter = (pageEnter) => {
  window.addEventListener('mousemove', navMove)

  let tl = gsap.timeline()
  tl.to('.menu', {
    borderTopLeftRadius: '30%',
    borderTopRightRadius: '30%',
    yPercent: 100,
    duration: 2,
    ease: 'power3.inOut',
  }).set('.menu', {
    zIndex: -50,
  })

  tl.then(() => {
    pageEnter()
    lenis.start()
  })
}

export { navLeave, navEnter }

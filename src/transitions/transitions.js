/* eslint-disable no-unused-vars */
import { gsap } from 'gsap'
import imagesLoaded from 'imagesloaded'

import { lenis } from '../global-views/lenis'

const container = document.querySelector('.transition')
const mobileContainer = document.querySelector('.transition-mobile')
const path = document.querySelector('#transition-path')
const mobilePath = document.querySelector('#transition-path-mobile')

const transitionLeave = (data, done) => {
  lenis.stop()

  let tl = gsap.timeline()

  if (window.innerHeight >= window.innerWidth) {
    tl.set(mobileContainer, { zIndex: 100 })
      .to(mobilePath, {
        attr: { d: 'M 0 0 C 3 0 6 0 9 0 V -8 C 6 -6 3 -8 0 -6 V 0' },
        ease: 'power1.in',
        duration: 1,
      })
      .to(mobilePath, {
        attr: {
          d: 'M 0 0 C 3 0 6 0 9 0 V -16 C 6 -16 3 -16 0 -16 V 0',
        },
        ease: 'power2.out',
        duration: 1,
      })
  } else {
    tl.set(container, { zIndex: 100 })
      .to(path, {
        attr: {
          d: 'M 0 0 C 5 0 10 0 16 0 V -3 C 10 -5 5 -5 0 -4',
        },
        ease: 'power1.in',
        duration: 0.7,
      })
      .to(path, {
        attr: {
          d: 'M 0 0 C 5 0 10 0 16 0 V -9 C 10 -9 5 -9 0 -9',
        },
        ease: 'power2.out',
        duration: 0.7,
      })
  }

  tl.then(() => {
    let imgLoad = imagesLoaded(data.next.container)
    imgLoad.on('done', function () {
      data.current.container.remove()
      window.scrollTo(0, 0)
      done()
    })
  })
}

const transitionEnter = (pageEnter) => {
  let tl = gsap.timeline()
  if (window.innerHeight >= window.innerWidth) {
    tl.to(
      mobilePath,
      {
        attr: {
          d: 'M 0 -8 C 3 -7 6 -10 9 -9 V -16 C 6 -16 3 -16 0 -16 V -8',
        },
        ease: 'power1.in',
        duration: 0.9,
      },
      '+=0.5'
    )
      .to(mobilePath, {
        attr: {
          d: 'M 0 -16 C 3 -16 6 -16 9 -16 V -16 C 6 -16 3 -16 0 -16 V -16',
        },
        ease: 'power2.out',
        duration: 0.9,
      })
      .set(mobileContainer, { zIndex: -100 })
      .set(mobilePath, {
        attr: {
          d: 'M 0 0 C 3 0 6 0 9 0 V 0 C 6 0 3 0 0 0 V 0',
        },
      })
  } else {
    tl.to(
      path,
      {
        attr: {
          d: 'M 0 -4 C 5 -4 10 -2 16 -5 V -9 C 10 -9 5 -9 0 -9',
        },
        ease: 'power1.in',
        duration: 0.7,
      },
      '+=0.5'
    )
      .to(path, {
        attr: {
          d: 'M 0 -9 C 5 -9 10 -9 16 -9 V -9 C 10 -9 5 -9 0 -9',
        },
        ease: 'power2.out',
        duration: 0.7,
      })
      .set(container, { zIndex: -100 })
      .set(path, {
        attr: {
          d: 'M 0 0 C 5 0 10 0 16 0 V 0 C 10 0 5 0 0 0',
        },
      })
  }

  tl.then(() => {
    pageEnter()
    lenis.start()
  })
}

export { transitionEnter, transitionLeave }

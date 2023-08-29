import { gsap } from 'gsap'

import { touchDevice } from '../utilities/utilities'

let pointer = document.querySelector('.cursor')

const cursor = () => {
  let snap = gsap.utils.snap(5)

  // function isLink(tar) {
  //   while (tar) {
  //     if (tar.tagName == 'A') {
  //       return true
  //     } else tar = tar.parentNode
  //   }
  //   return false
  // }

  let x = 0,
    y = 0
  function cursorEvent(e) {
    x = snap(e.clientX - 7)
    y = snap(e.clientY - 8)
    gsap.to(pointer, { top: y, left: x, duration: 0.4 })
  }

  window.addEventListener('mousemove', cursorEvent)
}

const setCursor = () => {
  if (touchDevice()) {
    return gsap.set(pointer, { display: 'none' })
  } else return cursor()
}

export default setCursor

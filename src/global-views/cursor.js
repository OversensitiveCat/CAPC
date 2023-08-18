import { gsap } from 'gsap'

const cursor = () => {
  let cursor = document.querySelector('.cursor')
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
    gsap.to(cursor, { top: y, left: x, duration: 0.4 })
  }

  window.addEventListener('mousemove', cursorEvent)
}

export default cursor

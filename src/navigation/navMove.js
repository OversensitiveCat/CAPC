import { gsap } from 'gsap'

import { isDesktop } from '../utilities/utilities'

let photo = document.querySelector('.nav-photo')
let snap = gsap.utils.snap(0.1)
let x = gsap.utils.mapRange(0, window.innerWidth, -2, 2)
let y = gsap.utils.mapRange(0, window.innerHeight, -2, 2)
let h = 0,
  v = 0
gsap.set(photo, { xPercent: h, yPercent: v })

const navMove = (e) => {
  if (isDesktop()) {
    h = snap(x(e.clientX))
    v = snap(y(e.clientY))
    gsap.to(photo, { xPercent: h, yPercent: v })
  } else return
}

export default navMove

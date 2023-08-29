import { gsap } from 'gsap'

let scrollX, scrollMax, currentX
let snap = gsap.utils.snap(0.1)

const init = () => {
  let width = document.querySelector('.galerie-list').scrollWidth
  let divWidth = document.querySelector('.galerie-list').offsetWidth
  let nbr = gsap.utils.toArray('.galerie-item').length
  scrollX = snap((width * 100) / divWidth / nbr)
  scrollMax = snap(-scrollX * (nbr - 2))
  currentX = 0
  gsap.set('.arrow-galerie-left-path', { fill: '#a7a7a7' })
}

const galerieSmallLeft = () => {
  if (currentX === 0) {
    return
  } else {
    if (currentX === scrollMax) {
      gsap.to('.arrow-galerie-right-path', { fill: '#000000' })
    }
    currentX = snap(currentX + scrollX)
    gsap.to('.galerie-list', { xPercent: currentX })
    if (currentX === 0) {
      gsap.to('.arrow-galerie-left-path', { fill: '#a7a7a7' })
    }
  }
}
const galerieSmallRight = () => {
  if (scrollMax === currentX) {
    return
  } else {
    if (currentX === 0) {
      gsap.to('.arrow-galerie-left-path', { fill: '#000000' })
    }
    currentX = snap(currentX - scrollX)
    gsap.to('.galerie-list', { xPercent: currentX })
    if (currentX === scrollMax) {
      gsap.to('.arrow-galerie-right-path', { fill: '#a7a7a7' })
    }
  }
}

const galerieSmallEvent = () => {
  init()
  const arrowLeft = document.querySelector('.arrow-galerie-left')
  const arrowRight = document.querySelector('.arrow-galerie-right')

  arrowLeft.addEventListener('click', () => galerieSmallLeft())
  arrowRight.addEventListener('click', () => galerieSmallRight())
}

function keys(e) {
  if (e.key == 'ArrowLeft') {
    galerieSmallLeft()
  } else if (e.key == 'ArrowRight') {
    galerieSmallRight()
  }
}

const galerieSmallAddKeyEvent = () => {
  window.addEventListener('keydown', keys)
}
const galerieSmallRemoveKeyEvent = () => {
  window.removeEventListener('keydown', keys)
}

export {
  galerieSmallEvent,
  galerieSmallAddKeyEvent,
  galerieSmallRemoveKeyEvent,
}

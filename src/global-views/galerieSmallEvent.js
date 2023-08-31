/* eslint-disable no-unused-vars */
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'

import { resizeX, touchDevice } from '../utilities/utilities'

gsap.registerPlugin(Observer)

let scrollX, scrollMax, currentX
let snap = gsap.utils.snap(0.1)
let active = false

const init = () => {
  let width = document.querySelector('.galerie-list').scrollWidth
  let divWidth = document.querySelector('.galerie-list').offsetWidth
  let nbr = gsap.utils.toArray('.galerie-item').length
  let scrollMaxPixel = divWidth - width
  let scrollMaxPercent = snap((scrollMaxPixel * 100) / divWidth)

  scrollX = snap(scrollMaxPercent / nbr)
  scrollMax = snap(scrollX * nbr)
  currentX = 0

  gsap.set('.arrow-galerie-left-path', { fill: '#a7a7a7' })
}

const resizeGalerie = () => {
  function resize() {
    init()
    gsap.to('.galerie-list', { xPercent: currentX })
    gsap.to('.arrow-galerie-right-path', { fill: '#000000' })
  }
  resizeX(resize, 250)
}

const galerieSmallLeft = () => {
  if (currentX >= 0) {
    return
  } else {
    if (currentX === scrollMax) {
      gsap.to('.arrow-galerie-right-path', { fill: '#000000' })
    }
    currentX = snap(currentX - scrollX)
    gsap.to('.galerie-list', { xPercent: currentX })
    if (currentX === 0) {
      gsap.to('.arrow-galerie-left-path', { fill: '#a7a7a7' })
    }
  }
}
const galerieSmallRight = () => {
  if (currentX <= scrollMax) {
    return
  } else {
    if (currentX === 0) {
      gsap.to('.arrow-galerie-left-path', { fill: '#000000' })
    }
    currentX = snap(currentX + scrollX)
    gsap.to('.galerie-list', { xPercent: currentX })
    if (currentX === scrollMax) {
      gsap.to('.arrow-galerie-right-path', { fill: '#a7a7a7' })
    }
  }
}

const galerieTouchLeft = () => {
  if (active) {
    return
  }
  active = true

  if (currentX >= 0) {
    return
  } else {
    if (currentX === scrollMax) {
      gsap.to('.arrow-galerie-right-path', { fill: '#000000' })
    }
    currentX = snap(currentX - scrollX)
    gsap.to('.galerie-list', {
      xPercent: currentX,
      ease: 'power1.inOut',
      onComplete: () => {
        active = false
      },
    })
    if (currentX === 0) {
      gsap.to('.arrow-galerie-left-path', { fill: '#a7a7a7' })
    }
  }
}
const galerieTouchRight = () => {
  if (active) {
    return
  }
  active = true

  if (currentX <= scrollMax) {
    return
  } else {
    if (currentX === 0) {
      gsap.to('.arrow-galerie-left-path', { fill: '#000000' })
    }
    currentX = snap(currentX + scrollX)
    gsap.to('.galerie-list', {
      xPercent: currentX,
      ease: 'power1.inOut',
      onComplete: () => {
        active = false
      },
    })
    if (currentX === scrollMax) {
      gsap.to('.arrow-galerie-right-path', { fill: '#a7a7a7' })
    }
  }
}

const galerieSmallEvent = () => {
  init()
  resizeGalerie()
  const arrowLeft = document.querySelector('.arrow-galerie-left')
  const arrowRight = document.querySelector('.arrow-galerie-right')
  arrowLeft.addEventListener('click', () => galerieSmallLeft())
  arrowRight.addEventListener('click', () => galerieSmallRight())
  if (touchDevice()) {
    Observer.create({
      target: '.galerie-wrapper',
      type: 'touch',
      tolerance: 20,
      onRight: () => galerieTouchLeft(),
      onLeft: () => galerieTouchRight(),
    })
  }
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

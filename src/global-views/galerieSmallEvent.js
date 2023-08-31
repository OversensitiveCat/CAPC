/* eslint-disable no-unused-vars */
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'

import { resizeX, touchDevice } from '../utilities/utilities'

gsap.registerPlugin(Observer)

let scrollX, scrollMax, currentX
let snap = gsap.utils.snap(0.1)

const init = () => {
  let width = document.querySelector('.galerie-list').scrollWidth
  let divWidth = document.querySelector('.galerie-list').offsetWidth
  let nbr = gsap.utils.toArray('.galerie-item').length
  let scrollMaxPixel = divWidth - width
  let scrollMaxPercent = snap((scrollMaxPixel * 100) / divWidth)

  scrollX = snap(scrollMaxPercent / nbr)
  scrollMax = scrollX * nbr
  currentX = 0

  gsap.set('.arrow-galerie-left-path', { fill: '#a7a7a7' })
}

const resizeGalerie = () => {
  function resize() {
    init()
    gsap.to('.galerie-list', { xPercent: currentX })
    gsap.to('.arrow-galerie-right-path', { fill: '#000000' })
    console.log('resize')
  }
  resizeX(resize, 250)
}

const galerieSmallLeft = () => {
  if (currentX === 0) {
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
  if (scrollMax === currentX) {
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

const galerieSmallEvent = () => {
  let galerie = document.querySelector('.galerie-wrapper')
  const lenis = new Lenis({
    wrapper: galerie,
    direction: 'horizontal',
    gestureOrientation: 'horizontal',
    smoothTouch: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  // init()
  // resizeGalerie()
  // const arrowLeft = document.querySelector('.arrow-galerie-left')
  // const arrowRight = document.querySelector('.arrow-galerie-right')
  // arrowLeft.addEventListener('click', () => galerieSmallLeft())
  // arrowRight.addEventListener('click', () => galerieSmallRight())
  // if (touchDevice()) {
  //   console.log('touch')
  //   Observer.create({
  //     target: '.galerie-wrapper',
  //     type: 'touch',
  //     tolerance: 50,
  //     onRight: () => galerieSmallLeft(),
  //     onLeft: () => galerieSmallRight(),
  //   })
  // }
}

function keys(e) {
  if (e.key == 'ArrowLeft') {
    galerieSmallLeft()
  } else if (e.key == 'ArrowRight') {
    galerieSmallRight()
  }
}

const galerieSmallAddKeyEvent = () => {
  // window.addEventListener('keydown', keys)
}
const galerieSmallRemoveKeyEvent = () => {
  // window.removeEventListener('keydown', keys)
}

export {
  galerieSmallEvent,
  galerieSmallAddKeyEvent,
  galerieSmallRemoveKeyEvent,
}

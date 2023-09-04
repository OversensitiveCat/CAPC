/* eslint-disable no-unused-vars */
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import timeline from './item-lightbox-timeline'
import { lenis } from '../../global-views/lenis'
import { isDesktop, touchDevice, resizeX } from '../../utilities/utilities'

gsap.registerPlugin(Observer, ScrollToPlugin, ScrollTrigger)

let currentImg
let scrollX
let currentX
let galerieMax
let lightboxMax
let wrapper
let list
let items
let nbr
let imgs
let arrows
let cross
let lines
let tl

const grey = '#a7a7a7'
const black = '#000000'
let active

const snap = gsap.utils.snap(0.1)

function init() {
  // DOM
  list = document.querySelector('.galerie-list')
  items = gsap.utils.toArray('.galerie-item')
  arrows = {
    galerieLeft: document.querySelector('.arrow-galerie-left'),
    galerieRight: document.querySelector('.arrow-galerie-right'),
    galeriePathLeft: document.querySelector('.arrow-galerie-left-path'),
    galeriePathRight: document.querySelector('.arrow-galerie-right-path'),
    lightboxLeft: document.querySelector('.arrow-lightbox-left'),
    lightboxRight: document.querySelector('.arrow-lightbox-right'),
    lightboxPathLeft: document.querySelector('.arrow-lightbox-left-path'),
    lightboxPathRight: document.querySelector('.arrow-lightbox-right-path'),
  }
  imgs = gsap.utils.toArray('.galerie-img')
  wrapper = document.querySelector('.expo-page-galerie')
  cross = document.querySelector('.close-lightbox-container')
  lines = gsap.utils.toArray('.close-lightbox-line')

  if (isDesktop() && !touchDevice()) {
    tl = timeline(wrapper, list, lines)
  }

  // Data
  nbr = items.length
  lightboxMax = -100 * (nbr - 1)

  //
  gsap.set(arrows.galeriePathLeft, { fill: grey })
}

function initData() {
  let width = list.offsetWidth
  let scrollMaxPixel = width - list.scrollWidth
  let scrollMaxPercent = snap((scrollMaxPixel * 100) / width)

  scrollX = snap(scrollMaxPercent / nbr)
  galerieMax = snap(scrollX * nbr)
  currentX = 0
  currentImg = 0
  active = false
}

// Galerie animations
const galerieLeft = () => {
  if (currentX >= 0) {
    return
  } else {
    if (currentX === galerieMax) {
      gsap.to(arrows.galeriePathRight, { fill: black })
    }
    currentX = snap(currentX - scrollX)
    gsap.to(list, { xPercent: currentX })
    if (currentX === 0) {
      gsap.to(arrows.galeriePathLeft, { fill: grey })
    }
  }
}
const galerieRight = () => {
  if (currentX <= galerieMax) {
    return
  } else {
    if (currentX === 0) {
      gsap.to(arrows.galeriePathLeft, { fill: black })
    }
    currentX = snap(currentX + scrollX)
    gsap.to(list, { xPercent: currentX })
    if (currentX === galerieMax) {
      gsap.to(arrows.galeriePathRight, { fill: grey })
    }
  }
}

// Galerie Events
const galerieArrowsEvents = () => {
  arrows.galerieLeft.addEventListener('click', galerieLeft)
  arrows.galerieRight.addEventListener('click', galerieRight)
}

function keysGalerie(e) {
  if (e.key == 'ArrowLeft') {
    galerieLeft()
  } else if (e.key == 'ArrowRight') {
    galerieRight()
  }
}

// Events Mobile
const galerieTouchLeft = () => {
  if (active) {
    return
  }
  active = true

  if (currentX >= 0) {
    return
  } else {
    if (currentX === galerieMax) {
      gsap.to('.arrow-galerie-right-path', { fill: black })
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
      gsap.to('.arrow-galerie-left-path', { fill: grey })
    }
  }
}
const galerieTouchRight = () => {
  if (active) {
    return
  }
  active = true

  if (currentX <= galerieMax) {
    return
  } else {
    if (currentX === 0) {
      gsap.to('.arrow-galerie-left-path', { fill: black })
    }
    currentX = snap(currentX + scrollX)
    gsap.to('.galerie-list', {
      xPercent: currentX,
      ease: 'power1.inOut',
      onComplete: () => {
        active = false
      },
    })
    if (currentX === galerieMax) {
      gsap.to('.arrow-galerie-right-path', { fill: grey })
    }
  }
}

// Lightbox animations
const lightboxLeft = () => {
  if (currentX >= 0) {
    return
  } else {
    if (currentX === lightboxMax) {
      gsap.to(arrows.lightboxPathRight, { fill: black })
    }
    currentX += 100
    gsap.to(list, { xPercent: currentX })
    if (currentX === 0) {
      gsap.to(arrows.lightboxPathLeft, { fill: grey })
    }
  }
}
const lightboxRight = () => {
  if (currentX <= lightboxMax) {
    return
  } else {
    if (currentX === 0) {
      gsap.to(arrows.lightboxPathLeft, { fill: black })
    }
    currentX -= 100
    gsap.to(list, { xPercent: currentX })
    if (currentX === lightboxMax) {
      gsap.to(arrows.lightboxPathRight, { fill: grey })
    }
  }
}

// Lightbox Events
const lightboxArrowsEvents = () => {
  arrows.lightboxLeft.addEventListener('click', lightboxLeft)
  arrows.lightboxRight.addEventListener('click', lightboxRight)
}

function keysLightbox(e) {
  if (e.key == 'ArrowLeft') {
    return lightboxLeft()
  } else if (e.key == 'ArrowRight') {
    return lightboxRight()
  }
}

// Lightbox toogle
function reset() {
  initData()
  gsap.to(list, { xPercent: 0 })
  gsap.to(arrows.galeriePathRight, { fill: black })
  gsap.to(arrows.galeriePathLeft, { fill: grey })
}

function open(img) {
  currentImg = imgs.indexOf(img)
  currentX = currentImg * -100

  if (currentX === 0) {
    gsap.to(arrows.lightboxPathRight, { fill: black })
    gsap.to(arrows.lightboxPathLeft, { fill: grey })
  }
  if (currentX === lightboxMax) {
    gsap.to(arrows.lightboxPathRight, { fill: grey })
    gsap.to(arrows.lightboxPathLeft, { fill: black })
  }

  gsap.to(window, {
    scrollTo: wrapper,
    duration: 0.6,
    delay: 0.1,
  })
  gsap.to(list, { xPercent: currentX, duration: 0.4 })
  lenis.stop()
  tl.play()
  window.removeEventListener('keydown', keysGalerie)
  window.addEventListener('keydown', keysLightbox)
}
function close() {
  gsap.to(items, { opacity: 0 })
  currentX = 0
  tl.reverse().then(() => {
    lenis.start()
    tl.invalidate()
    window.removeEventListener('keydown', keysLightbox)
    window.addEventListener('keydown', keysGalerie)
    reset()
    ScrollTrigger.refresh()
    gsap.to(items, { opacity: 1, delay: 0.2 })
  })
}

function escape(e) {
  if (e.key == 'Escape' && tl.progress() !== 0) {
    return close()
  } else return
}

function toogleLightbox(img) {
  if (!tl.isActive() && tl.progress() === 0) {
    return open(img)
  } else if (!tl.isActive() && tl.progress() === 1) {
    return close()
  }
}

// On resize
function onResize() {
  return tl.progress() === 1 ? close() : reset()
}
const handleResize = resizeX(onResize, 250)

// Global logic
const events = () => {
  init()
  initData()
  galerieArrowsEvents()

  window.addEventListener('keydown', keysGalerie)
  window.addEventListener('resize', handleResize)

  // If mobile
  if (touchDevice()) {
    Observer.create({
      target: '.galerie-wrapper',
      type: 'touch',
      tolerance: 20,
      onRight: () => galerieTouchLeft(),
      onLeft: () => galerieTouchRight(),
    })
  }
  if (isDesktop() && !touchDevice()) {
    // Lightbox
    imgs.forEach((img) =>
      img.addEventListener('click', () => toogleLightbox(img))
    )
    lightboxArrowsEvents()

    // Escape
    cross.addEventListener('click', close)
    window.addEventListener('keydown', escape)

    // Cross hover effect
    cross.addEventListener('mouseenter', () => {
      gsap.to(lines[0], { rotate: -45, duration: 0.35 })
      gsap.to(lines[1], { rotate: 45, duration: 0.35 })
    })
    cross.addEventListener('mouseleave', () => {
      gsap.to(lines[0], { rotate: 45, duration: 0.35 })
      gsap.to(lines[1], { rotate: -45, duration: 0.35 })
    })
  }
}

const expoItemClean = () => {
  window.removeEventListener('keydown', keysGalerie)
  window.removeEventListener('keydown', keysLightbox)
  window.removeEventListener('keydown', escape)
  window.removeEventListener('resize', handleResize)
}

export { events, expoItemClean }

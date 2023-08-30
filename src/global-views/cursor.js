/* eslint-disable no-unused-vars */
import { gsap } from 'gsap'

import { touchDevice } from '../utilities/utilities'

let pointer = document.querySelector('.cursor')

function isLink(tar) {
  while (tar) {
    if (tar.tagName == 'A') {
      return true
    } else tar = tar.parentNode
  }
  return false
}

function falseLink(tar) {
  if (tar.tagName == 'HTML') {
    return
  }
  if (
    tar.getAttribute('data-cursor') === 'link' ||
    tar.parentNode.getAttribute('data-cursor') === 'link'
  ) {
    return true
  } else return false
}

const cursor = () => {
  let snap = gsap.utils.snap(5)

  let normal = true,
    link = false

  let tl = gsap.timeline({ paused: true })
  tl.to(pointer, {
    opacity: 0.85,
    backgroundColor: '#efc2d0',
    scale: 1.6,
    duration: 0.35,
  })

  function cursorEvent(e) {
    gsap.to(pointer, {
      top: () => snap(e.clientY - 8),
      left: () => snap(e.clientX - 7),
      duration: 0.5,
    })

    if (falseLink(e.target) && normal) {
      normal = false
      link = true
      return tl.play()
    }
    if (isLink(e.target) && normal) {
      normal = false
      link = true
      return tl.play()
    }
    if (!isLink(e.target) && !falseLink(e.target) && link) {
      normal = true
      link = false
      return tl.reverse()
    }
  }

  window.addEventListener('mousemove', cursorEvent)
}

const setCursor = () => {
  if (touchDevice()) {
    return gsap.set(pointer, { display: 'none' })
  } else return cursor()
}

export default setCursor

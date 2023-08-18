/* eslint-disable no-unused-vars */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import debounce from '../../global-views/debounce'

gsap.registerPlugin(ScrollTrigger)

const underline = (span, model) => {
  let h = span.offsetHeight
  let w = span.offsetWidth

  const container = model.cloneNode(true)
  let svg = container.querySelector('svg')
  let path = svg.querySelector('path')

  span.appendChild(container)

  gsap.set(container, {
    top: 12,
    width: w + 8,
    height: h,
    marginLeft: -4,
    overflow: 'hidden',
  })

  let m = (300 - w) / 2
  gsap.set(svg, {
    width: '300px',
    marginLeft: `-${m}`,
  })

  span.addEventListener('mouseenter', () => {
    gsap.to(path, {
      attr: {
        d: 'M 0 0 C 5 -1 11 0 15 -0.5 C 20 -1 26 0 30 0',
      },
    })
  })

  span.addEventListener('mouseleave', () => {
    gsap.to(path, {
      attr: {
        d: 'M 0 0 C 0 0 0 0 0 0 C 0 0 0 0 0 0',
      },
    })
  })
}

const arrow = (span, model) => {
  let h = span.offsetHeight
  const svg = model.cloneNode(true)
  let path = svg.querySelector('path')
  span.appendChild(svg)
  gsap.set(svg, {
    position: 'absolute',
    height: h,
    width: 15,
    top: 3,
    right: -20,
    opacity: 1,
  })

  let para = span.parentNode
  let tl = gsap.timeline({ paused: true })
  tl.fromTo(
    svg,
    {
      xPercent: 100,
      opacity: 0,
      scale: 0.5,
    },
    {
      xPercent: 0,
      opacity: 1,
      scale: 1,
    },
    2.2
  )
  ScrollTrigger.create({
    trigger: para,
    start: 'top 75%',
    onEnter: () => tl.play(),
  })
  ScrollTrigger.create({
    trigger: para,
    start: 'top bottom',
    onLeaveBack: () => tl.pause(0),
  })

  span.addEventListener('mouseenter', () => {
    gsap.to(path, {
      fill: '#3867d9',
      duration: 0.3,
    })
    gsap.to(svg, {
      xPercent: 10,
      scale: 1.2,
      duration: 0.3,
    })
  })
  span.addEventListener('mouseleave', () => {
    gsap.to(path, {
      fill: '#e65d35',
      duration: 0.3,
    })
    gsap.to(svg, {
      xPercent: 0,
      scale: 1,
      duration: 0.3,
    })
  })
}

const span = () => {
  const underlineModel = document.querySelector('.span-underline-container')
  const arrowModel = document.querySelector('.span-arrow-container svg')

  function init() {
    let spans = gsap.utils.toArray('.span-link')
    spans.forEach((s) => underline(s, underlineModel))

    let spansArrow = spans.filter((span) => {
      if (span.classList.contains('span-link-arrow')) {
        return true
      }
    })
    spansArrow.forEach((s) => arrow(s, arrowModel))
  }
  init()

  function handleResize() {
    // Remove all
    let containers = gsap.utils.toArray('.span-link .span-underline-container')
    containers.forEach((container) => container.remove())

    // Add again
    init()
  }

  const debouncedResizeHandler = debounce(handleResize, 1000)
  window.addEventListener('resize', debouncedResizeHandler)
}

export default span

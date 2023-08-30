import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { touchDevice } from '../utilities/utilities'

gsap.registerPlugin(ScrollTrigger)

function addArrow(span, arrow) {
  const svg = arrow.cloneNode(true)
  let path = svg.querySelector('path')
  span.appendChild(svg)

  let h = span.offsetHeight

  gsap.set(svg, {
    height: h,
    width: 11,
    opacity: 1,
    right: -21,
    top: 1,
  })

  let tl = gsap.timeline({ paused: true })
  tl.to(path, {
    fill: '#3867d9',
    duration: 0.3,
  })
    .to(
      svg,
      {
        xPercent: 10,
        scale: 1.1,
        duration: 0.3,
      },
      0
    )
    .to(
      span,
      {
        color: '#3867d9',
        duration: 0.3,
      },
      0
    )

  if (!touchDevice()) {
    span.addEventListener('mouseenter', () => tl.play())
    span.addEventListener('mouseleave', () => tl.reverse())
  }
}

const infos = () => {
  const spans = gsap.utils.toArray('.span-link-infos')
  const arrowModel = document.querySelector('.span-arrow-container')

  spans.forEach((s) => addArrow(s, arrowModel))
}

export default infos

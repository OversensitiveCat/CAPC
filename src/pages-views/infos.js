import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { touchDevice } from '../utilities/utilities'
import { refreshMedia } from '../utilities/utilities'

gsap.registerPlugin(ScrollTrigger)

function addArrow(span, arrow) {
  const svgArrow = arrow.cloneNode(true)
  let pathArrow = svgArrow.querySelector('path')
  span.appendChild(svgArrow)
  gsap.set(svgArrow, { position: 'absolute', opacity: 1 })

  let f

  function size() {
    f = gsap.getProperty(span, 'fontSize')

    gsap.set(svgArrow, {
      position: 'absolute',
      height: f * 0.7,
      width: f * 0.7,
      right: -f * 1.2,
      bottom: f * 0.2,
    })
  }

  size()
  refreshMedia(size)

  let tl = gsap.timeline({ paused: true })
  tl.to(pathArrow, {
    fill: '#3867d9',
    duration: 0.3,
  })
    .to(
      svgArrow,
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
  const arrowModel = document.querySelector('.span-arrow-container svg')

  spans.forEach((s) => addArrow(s, arrowModel))
}

export default infos

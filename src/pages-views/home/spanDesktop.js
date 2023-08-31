import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { refreshMedia } from '../../utilities/utilities'

gsap.registerPlugin(ScrollTrigger)

const spanDesktop = (span, lineModel, arrowModel) => {
  let h, w, f

  // Line
  const line = lineModel.cloneNode(true)
  let svgLine = line.querySelector('svg')
  let pathLine = svgLine.querySelector('path')
  span.appendChild(line)
  // Arrow
  const svgArrow = arrowModel.cloneNode(true)
  let pathArrow = svgArrow.querySelector('path')
  svgArrow.classList.add('word')
  span.appendChild(svgArrow)
  gsap.set(svgArrow, { position: 'absolute' })

  function size() {
    f = gsap.getProperty(span, 'fontSize')
    h = span.offsetHeight
    w = span.offsetWidth

    gsap.set(span, { marginRight: f * 1.2 })

    gsap.set(line, {
      top: h / 2,
      width: w + 8,
      height: h,
      marginLeft: -4,
      overflow: 'hidden',
    })

    let m = (300 - w) / 2
    gsap.set(svgLine, {
      width: '300px',
      marginLeft: `-${m}`,
    })

    gsap.set(svgArrow, {
      position: 'absolute',
      height: f * 0.7,
      width: f * 0.7,
      right: -f,
      bottom: f * 0.2,
    })
  }

  size()
  refreshMedia(size)

  // Blue
  let yellow = '#f5da5a',
    blue = '#3867d9'

  let yellowSpan = span.classList.contains('yellow')
  if (yellowSpan) {
    gsap.set(pathArrow, { fill: yellow })
  }

  let tl = gsap.timeline({ paused: true })
  tl.to(pathLine, {
    attr: {
      d: 'M 0 0 C 5 -1 11 0 15 -0.5 C 20 -1 26 0 30 0',
    },
  })
    .to(
      pathArrow,
      {
        fill: blue,
        duration: 0.3,
      },
      0
    )
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
        color: blue,
        duration: 0.3,
      },
      0
    )
  span.addEventListener('mouseenter', () => {
    if (gsap.getProperty(svgArrow, 'opacity') === 1) {
      return tl.play()
    } else return
  })

  span.addEventListener('mouseleave', () => tl.reverse())
}

export default spanDesktop

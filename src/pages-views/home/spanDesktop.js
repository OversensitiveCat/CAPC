import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const spanDesktop = (span, lineModel, arrowModel) => {
  let h = span.offsetHeight
  let w = span.offsetWidth

  // Line
  const line = lineModel.cloneNode(true)
  let svgLine = line.querySelector('svg')
  let pathLine = svgLine.querySelector('path')

  span.appendChild(line)

  gsap.set(line, {
    top: 14,
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

  // Arrow
  const svgArrow = arrowModel.cloneNode(true)
  let pathArrow = svgArrow.querySelector('path')
  svgArrow.classList.add('word')
  span.appendChild(svgArrow)

  gsap.set(svgArrow, {
    height: h,
    width: 15,
    opacity: 1,
    right: -19,
    bottom: -2,
  })

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

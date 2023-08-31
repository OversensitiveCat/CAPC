import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const spanMobile = (span, arrowModel) => {
  const svgArrow = arrowModel.cloneNode(true)
  let pathArrow = svgArrow.querySelector('path')
  svgArrow.classList.add('word')
  span.appendChild(svgArrow)

  let f = gsap.getProperty(span, 'fontSize')

  gsap.set(span, { marginRight: f * 1.2 })

  gsap.set(svgArrow, {
    position: 'absolute',
    height: f * 0.7,
    width: f * 0.7,
    right: -f,
    bottom: f * 0.2,
  })

  // Blue
  let yellowSpan = span.classList.contains('yellow')
  if (yellowSpan) {
    gsap.set(pathArrow, { fill: '#f5da5a' })
  }
}

export default spanMobile

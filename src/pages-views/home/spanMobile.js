import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const spanMobile = (span, arrowModel) => {
  let h = span.offsetHeight

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
  let yellowSpan = span.classList.contains('yellow')
  if (yellowSpan) {
    gsap.set(pathArrow, { fill: '#f5da5a' })
  }
}

export default spanMobile

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import spanDesktop from './spanDesktop'
import spanMobile from './spanMobile'
import { touchDevice } from '../../utilities/utilities'

gsap.registerPlugin(ScrollTrigger)

const span = () => {
  const underlineModel = document.querySelector('.span-underline-container')
  const arrowModel = document.querySelector('.span-arrow-container')
  let spans = gsap.utils.toArray('.span-link')

  if (touchDevice()) {
    spans.forEach((s) => spanMobile(s, arrowModel))
  } else {
    spans.forEach((s) => spanDesktop(s, underlineModel, arrowModel))
  }
}

export default span

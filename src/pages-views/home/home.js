/* eslint-disable no-unused-vars */
import { gsap } from 'gsap'

import expos from './homeExpos'
import header from './homeHeader'
import shapes from './homeShapes'
import span from './homeSpan'

const home = () => {
  header()
  expos()
  shapes()

  gsap.delayedCall(1, span)
}

export default home

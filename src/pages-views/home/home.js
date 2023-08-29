import { gsap } from 'gsap'

import { touchDevice } from '../../utilities/utilities'
import expos from './homeExpos'
import header from './homeHeader'
import shapes from './homeShapes'
import span from './homeSpan'

const home = () => {
  header()
  expos()
  shapes()

  if (!touchDevice()) {
    gsap.delayedCall(1.5, span)
  }
}

export default home

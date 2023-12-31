import SplitType from 'split-type'

import { homeColor } from './homeColor'
import expos from './homeExpos'
import header from './homeHeader'
import shapes from './homeShapes'
import span from './homeSpan'
import quote from '../../animations/quote'

const home = () => {
  const paras = new SplitType('[data-anim="quote"]', {
    tagName: 'span',
    types: 'words',
  })

  span()
  quote(paras.elements)
  header()
  expos()
  shapes()
  homeColor()
}

export default home

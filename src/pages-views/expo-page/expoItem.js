/* eslint-disable import/order */
import { gsap } from 'gsap'

import { events } from './item-events'
import press from '../../animations/press'

const expoItem = () => {
  // Press anim
  let pressSection = document.querySelector('.expo-page-press')
  let display = gsap.getProperty(pressSection, 'display')
  if (display != 'none') {
    press()
  }

  // Photos
  events()
}

export default expoItem

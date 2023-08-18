import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import press from '../animations/press'

gsap.registerPlugin(ScrollTrigger)

const expoItem = () => {
  let pressSection = document.querySelector('.expo-page-press')
  let display = gsap.getProperty(pressSection, 'display')
  if (display != 'none') {
    press()
  }
}

export default expoItem

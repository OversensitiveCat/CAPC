import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import vidRef from '../../data/presentation.webm'

gsap.registerPlugin(ScrollTrigger)

const homeVid = () => {
  const vidUrl = new URL(vidRef, import.meta.url).href
  console.log(vidUrl)
  // Anim
  let tl = gsap.timeline({ paused: true })
  tl.from('.home-expo-video', {
    yPercent: 20,
    opacity: 0,
    duration: 1,
  })
  ScrollTrigger.create({
    trigger: '.home-expo-vid-item',
    start: 'top 75%',
    onEnter: () => tl.play(),
  })
  ScrollTrigger.create({
    trigger: '.home-expo-vid-item',
    start: '-25% bottom',
    onLeaveBack: () => tl.pause(0),
  })
}

export default homeVid

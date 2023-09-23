import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const homeVid = () => {
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

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// import vid from '../../data/presentation.webm'

const homeVid = () => {
  // const url = new URL(vid, import.meta.url).href
  // console.log(url)

  const v = document.querySelector('#home-vid')
  // if (v.readyState >= 3) {
  //   console.log('v is already loaded')
  // } else {
  //   v.addEventListener('canplaythrough', function () {
  //     console.log('v loaded successfully')
  //   })
  // }

  v.onerror = function () {
    console.log('Error loading video')
    gsap.set(v, { display: 'none' })
  }

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

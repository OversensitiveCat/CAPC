import { gsap } from 'gsap'
import SplitType from 'split-type'

import header from '../animations/header'

const expoItemEnter = () => {
  const subheading = new SplitType('.expo-page-subheading', {
    types: 'words',
    tagName: 'span',
  })
  let all = gsap.utils.toArray('.expo-page-main > *').splice(2)

  let tl = gsap.timeline({ paused: true, delay: 0.2 })

  tl.to('.expo-page-thumbnail-hide', { xPercent: 100, duration: 0.75 })
    .from(
      '.expo-page-expo',
      { opacity: 0, rotateY: 10, duration: 0.6 },
      '>-0.2'
    )
    .from('.expo-page-heading', {
      opacity: 0,
      yPercent: 20,
      duration: 0.5,
    })
    .from('.expo-page-hero-legend', { opacity: 0, xPercent: -10 }, '>-0.5')
    .from('.link-back', { opacity: 0, xPercent: 10 }, '>-0.5')
    .from(subheading.words, {
      opacity: 0,
      duration: 0.3,
      xPercent: 10,
      stagger: 0.04,
    })
    .from('#expo-shape1', { yPercent: -50, opacity: 0 }, '<')
    .from('#expo-shape2', { xPercent: -50, opacity: 0 }, '<')
    .from('#expo-shape3', { xPercent: 50, opacity: 0 }, '<')
    .from(all, { opacity: 0, y: 10 }, '>-0.5')

  gsap.set('[data-anim]', { opacity: 1 })

  header()
  tl.play()
}

export default expoItemEnter

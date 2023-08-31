import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { touchDevice } from '../utilities/utilities'

gsap.registerPlugin(ScrollTrigger)

const press = () => {
  // Fade in

  let mm = gsap.matchMedia(),
    breakPoint = 768
  mm.add(
    {
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    },
    (context) => {
      let { isDesktop, isMobile } = context.conditions

      const items = gsap.utils.toArray('.press-item')
      items.forEach((i) => {
        let tl = gsap.timeline({ paused: true })
        tl.from(i, {
          opacity: 0,
          yPercent: isDesktop ? 70 : 40,
          duration: isDesktop ? 0.5 : 0.4,
        })

        ScrollTrigger.create({
          trigger: i,
          start: isMobile ? 'top 90%' : 'top 80%',
          onEnter: () => tl.play(),
        })

        ScrollTrigger.create({
          trigger: i,
          start: '-100% bottom',
          onLeaveBack: () => tl.pause(0),
        })
      })
    }
  )

  if (!touchDevice()) {
    // Hover
    let arr = gsap.utils.toArray('.press-link')
    let links = arr.filter((link) => {
      let display = gsap.getProperty(link, 'display')
      return display == 'none' ? false : true
    })

    links.forEach((link) => {
      let parent = link.parentNode
      let arrow = parent.querySelector('.press-item-arrow')
      let heading = parent.querySelector('.press-item-heading')
      let tl = gsap.timeline({ paused: true })
      tl.to(arrow, {
        scale: 1.1,
        duration: 0.3,
        transformOrigin: 'bottom left',
      }).to(
        heading,
        {
          color: '#e65d35',
          duration: 0.3,
        },
        0
      )
      link.addEventListener('mouseenter', () => tl.play())
      link.addEventListener('mouseleave', () => tl.reverse())
    })
  }
}

export default press

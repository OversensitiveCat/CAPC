import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const press = () => {
  // Fade in
  const items = gsap.utils.toArray('.press-item')
  items.forEach((i) => {
    let tl = gsap.timeline({ paused: true })
    tl.from(i, { opacity: 0, yPercent: 100 })

    ScrollTrigger.create({
      trigger: i,
      start: 'top 80%',
      onEnter: () => tl.play(),
    })

    ScrollTrigger.create({
      trigger: i,
      start: '-100% bottom',
      onLeaveBack: () => tl.pause(0),
    })
  })

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

export default press

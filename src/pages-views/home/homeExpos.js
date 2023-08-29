import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function reverse(item) {
  let childs = Array.from(item.children)
  childs.forEach((child) => child.remove())
  childs.reverse()
  childs.forEach((child) => item.appendChild(child))

  item.classList.add('home-expo-item-reversed')
  item
    .querySelector('.home-expo-item-link')
    .classList.add('home-expo-item-link-reversed')

  item.querySelector('.ticket-hole').classList.add('ticket-hole-reversed')

  let main = item.querySelector('.home-expo-item-main')
  gsap.set(main, { marginLeft: -1 })
}

const expos = () => {
  let items = gsap.utils.toArray('.home-expo-item')
  function animItems() {
    items.forEach((item) => {
      const magnets = Array.from(
        item.querySelectorAll(
          '.home-expo-now, .home-expo-next, .home-expo-past'
        )
      )
      function current(magnet) {
        let display = gsap.getProperty(magnet, 'display')
        return display !== 'none'
      }
      let magnet = magnets.find(current)
      let tl = gsap.timeline({ paused: true })
      tl.from(item, { opacity: 0, yPercent: 20, duration: 0.7 }).to(
        magnet,
        { rotate: 20, duration: 0.7 },
        0.1
      )
      ScrollTrigger.create({
        trigger: item,
        start: 'top 75%',
        onEnter: () => tl.play(),
      })
      ScrollTrigger.create({
        trigger: item,
        start: '-25% bottom',
        onLeaveBack: () => tl.pause(0),
      })
    })
  }

  // Reverse items
  if (items.length > 1) {
    items.forEach((item) => {
      if (items.indexOf(item) / 2 != 0) {
        reverse(item)
      }
    })
  }

  // Check if the collection isn't empty
  if (items.length) {
    animItems()
  } else {
    gsap.set('.home-expo', { display: 'none' })
  }
}

export default expos

/* eslint-disable no-unused-vars */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function fadeIn(item) {
  const magnets = Array.from(
    item.querySelectorAll('.home-expo-now, .home-expo-next, .home-expo-past')
  )
  function current(magnet) {
    let display = gsap.getProperty(magnet, 'display')
    return display !== 'none'
  }
  let magnet = magnets.find(current)
  let tl = gsap.timeline({ paused: true })
  tl.from(item, { opacity: 0, yPercent: 20, duration: 1 }).to(
    magnet,
    { rotate: 20, duration: 1 },
    0
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
}

function hover(item) {
  let link = item.querySelector('.home-expo-item-link')
  let div = link.querySelector('.home-expo-item-infos')
  let infos = div.querySelector('.home-expo-item-style1')
  let more = div.querySelector('.home-expo-item-more')
  let lineOne = div.querySelector('.more-line1')
  let lineTwo = div.querySelector('.more-line2')

  let tl = gsap.timeline({ paused: true })
  tl.to(lineOne, { rotate: 180, backgroundColor: '#3867d9' })
    .to(lineTwo, { rotate: -180, backgroundColor: '#3867d9' }, 0)
    .to(infos, { color: '#3867d9' }, 0)
    .to(more, { borderColor: '#3867d9' }, 0)
    .to(div, { borderColor: '#3867d9' }, 0)

  link.addEventListener('mouseenter', () => tl.play())
  link.addEventListener('mouseleave', () => tl.reverse())
}

export { fadeIn, hover }

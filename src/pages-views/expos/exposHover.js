/* eslint-disable no-unused-vars */
import { gsap } from 'gsap'

function hover(link) {
  let infos = link.querySelector('.expo-item-style1')
  let more = link.querySelector('.expo-item-more')
  let lineOne = link.querySelector('.more-line1')
  let lineTwo = link.querySelector('.more-line2')

  let tl = gsap.timeline({ paused: true })
  tl.to(lineOne, { rotate: 180, backgroundColor: '#3867d9' })
    .to(lineTwo, { rotate: -180, backgroundColor: '#3867d9' }, 0)
    .to(infos, { color: '#3867d9' }, 0)
    .to(more, { borderColor: '#3867d9' }, 0)
    .to(link, { borderColor: '#3867d9' }, 0)

  link.addEventListener('mouseenter', () => tl.play())
  link.addEventListener('mouseleave', () => tl.reverse())
}

const exposHover = () => {
  let links = gsap.utils.toArray('.expo-item-right')
  links.forEach(hover)
}

export default exposHover

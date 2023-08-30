import { gsap } from 'gsap'

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

function clean(item) {
  let childs = Array.from(item.children)
  childs.forEach((child) => child.remove())
  childs.reverse()
  childs.forEach((child) => item.appendChild(child))

  item.classList.remove('home-expo-item-reversed')
  item
    .querySelector('.home-expo-item-link')
    .classList.remove('home-expo-item-link-reversed')

  item.querySelector('.ticket-hole').classList.remove('ticket-hole-reversed')

  let main = item.querySelector('.home-expo-item-main')
  gsap.set(main, { marginLeft: 0 })
}

export { reverse, clean }

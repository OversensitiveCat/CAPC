import { gsap } from 'gsap'

import { touchDevice } from '../../utilities/utilities'
import { fadeIn, hover } from './homeExposAnim'
import { clean, reverse } from './reverseItems'

const expos = () => {
  let items = gsap.utils.toArray('.home-expo-item')

  // Reverse items
  let mm = gsap.matchMedia()
  let rev = false

  mm.add('(min-width:992px)', () => {
    if (items.length > 1) {
      rev = true
      items.forEach((item) => {
        if (items.indexOf(item) / 2 != 0) {
          reverse(item)
        }
      })
    }
  })
  // Clean on resize
  mm.add('(max-width:991px)', () => {
    if (rev) {
      items.forEach((item) => {
        if (items.indexOf(item) / 2 != 0) {
          clean(item)
        }
      })
    }
  })

  // Check if the collection isn't empty
  if (items.length) {
    items.forEach((item) => {
      fadeIn(item)
      if (!touchDevice()) {
        hover(item)
      }
    })
  } else {
    gsap.set('.home-expo', { display: 'none' })
  }
}

export default expos

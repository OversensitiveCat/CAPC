import { debounce } from './utilities'

/* eslint-disable no-unused-vars */
let breakpoints = [
  { media: 'none', d: [0, 299] },
  { media: 'mobileOne', d: [300, 479] },
  { media: 'mobileTwo', d: [480, 767] },
  { media: 'tablet', d: [768, 991] },
  { media: 'desktop', d: [992, 1279] },
  { media: 'desktopOne', d: [1280, 1439] },
  { media: 'desktopTwo', d: [1280, 1439] },
  { media: 'desktopThree', d: [1440, 1919] },
  { media: 'desktopFour', d: [1920, Infinity] },
]

function findCurrent(el) {
  return window.innerWidth > el.d[0] && window.innerWidth < el.d[1]
}

const printMedia = () => {
  let breakpoint

  function print() {
    breakpoint = breakpoints.find(findCurrent)
    console.log(`${breakpoint.media}: ${breakpoint.d[0]} – ${breakpoint.d[1]}`)
  }

  print()

  let debouncePrint = debounce(print, 1000)
  window.addEventListener('resize', debouncePrint)
}

const displayMedia = () => {}

export { printMedia, displayMedia }

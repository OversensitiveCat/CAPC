import { gsap } from 'gsap'
import SplitType from 'split-type'

function wrapHeading(h, words, n) {
  // Copy
  let copy = h.cloneNode(true)
  let copyWords = Array.from(copy.querySelectorAll('.word'))
  h.parentNode.appendChild(copy)
  gsap.set(h, { borderBottomLeftRadius: 0 })

  // Slice
  let removeH = words.splice(n)
  let removeCopy = copyWords.splice(0, n)
  removeH.forEach((w) => w.remove())
  removeCopy.forEach((w) => w.remove())

  if (copyWords.length > n) {
    return wrapHeading(copy, copyWords, n)
  } else return
}

const expoItemBeforeEnter = () => {
  const heading = new SplitType('.expo-page-heading', { types: 'words' })

  let data = Number(heading.elements[0].getAttribute('data-wrap'))
  let wrap

  if (typeof data === 'number' && data > 0) {
    wrap = data
  } else wrap = 2

  if (heading.words.length > wrap) {
    return wrapHeading(heading.elements[0], heading.words, wrap)
  } else return
}

export default expoItemBeforeEnter

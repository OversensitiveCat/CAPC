import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

// import debounce from '../global-views/debounce'

const quoteAnim = (para) => {
  let words = para.querySelectorAll('.word')
  let tl = gsap.timeline({ paused: true })
  tl.from(words, {
    xPercent: 30,
    yPercent: -10,
    opacity: 0,
    duration: 0.3,
    stagger: 0.05,
  })
  ScrollTrigger.create({
    trigger: para,
    start: 'top 75%',
    onEnter: () => tl.play(),
  })
  ScrollTrigger.create({
    trigger: para,
    start: 'top bottom',
    onLeaveBack: () => tl.pause(0),
  })
  gsap.set(para, { opacity: 1 })
}

const quote = (paras) => {
  if (paras == undefined) {
    paras = new SplitType('[data-anim="quote"]', {
      tagName: 'span',
      types: 'words',
    })
    return paras.elements.forEach((para) => quoteAnim(para))
  } else return paras.forEach((para) => quoteAnim(para))
}

// const debouncedResizeHandler = debounce(event, 250)

// const quote = () => {
//   event()
//   window.addEventListener('resize', debouncedResizeHandler)
// }

// const quoteRemove = () => {
//   window.removeEventListener('resize', debouncedResizeHandler)
// }

export default quote

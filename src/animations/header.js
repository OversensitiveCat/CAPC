import { gsap } from 'gsap'
import SplitType from 'split-type'

function header() {
  const bar = document.querySelector('.header')
  const logo = new SplitType('.header-logo', {
    types: 'chars',
    tagName: 'span',
  })
  let up = [logo.chars[0], logo.chars[2]],
    down = [logo.chars[1], logo.chars[3]]

  let tl = gsap.timeline({ paused: true })
  tl.from(up, {
    yPercent: -100,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  })
    .from(
      down,
      { yPercent: 100, opacity: 0, duration: 0.3, stagger: 0.2 },
      '-=0.3'
    )
    .from(
      '.ham-open',
      {
        opacity: 0,
        xPercent: -200,
        duration: 0.6,
      },
      '-=0.6'
    )

  gsap.set(bar, { opacity: 1 })
  tl.play()
}

export default header

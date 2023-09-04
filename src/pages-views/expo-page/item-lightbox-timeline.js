/* eslint-disable no-unused-vars */
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

function timeline(wrapper, list, lines) {
  let tl = gsap.timeline({ paused: true })

  tl.to(wrapper, {
    height: '100vh',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    marginLeft: () => -gsap.getProperty('.container', 'paddingLeft'),
    marginRight: () => -gsap.getProperty('.container', 'paddingRight'),
    duration: 0.4,
  })
    .to(list, { gap: 0, duration: 0.4 }, 0)
    .to('.wrapper', { backgroundColor: '#ebebeb', duration: 0.4 }, 0)
    .to('.header', { autoAlpha: 0, yPercent: -100, duration: 0.4 }, 0)
    .set('.close-lightbox-container', { display: 'flex' }, 0)
    .set('.arrow-lightbox-container', { display: 'flex' }, 0)
    .to('.arrow-lightbox-container', { height: '4rem', duration: 0.4 }, 0)
    .to(
      '.arrow-galerie-container',
      {
        autoAlpha: 0,
        height: 0,
        x: -gsap.getProperty('.container', 'paddingRight'),
        y: -32,
        duration: 0.4,
      },
      0
    )
    .to(
      '.galerie-item',
      {
        width: '100%',
        duration: 0.4,
        backgroundColor: 'pink',
      },
      0
    )
    .to(
      '.galerie-img',
      { height: () => window.innerHeight * 0.9 - 192, duration: 0.4 },
      0
    )
    .to('.arrow-lightbox-container', { opacity: 1, duration: 0.4 }, 0.5)
    .to(lines, { opacity: 1, duration: 0.2 }, 0.5)
    .to(lines[0], { rotate: 45, duration: 0.3 }, 0.6)
    .to(lines[1], { rotate: -45, duration: 0.3 }, 0.6)

  return tl
}

export default timeline

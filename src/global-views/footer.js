import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import SplitType from 'split-type'

import footerDesktop from './footerDesktop'
import footerMob from './footerMob'
import { touchDevice } from '../utilities/utilities'

gsap.registerPlugin(ScrollToPlugin)

const footer = () => {
  // DOM
  let foot = document.querySelector('footer')
  let headings = new SplitType('.footer h3', {
    types: 'chars',
    tagName: 'span',
  })
  let chars = headings.elements.map((heading) => {
    return Array.from(heading.querySelectorAll('.char'))
  })
  let box = gsap.utils.toArray('.footer-box')
  let text = box.map((box) => {
    return Array.from(
      box.querySelectorAll(
        '.footer-link, .footer-text, .newsletter-link, .footer-link-small'
      )
    )
  })
  let logo = gsap.utils.toArray('.footer .footer-logo-char')
  let sublogo = logo.splice(4)
  let dash = gsap.utils.toArray('.footer .dash')
  let outLogos = gsap.utils.toArray('.footer-logos-link')
  let smallLinks = gsap.utils.toArray('.footer-credits .footer-link-small')
  let svg = {
    button: document.querySelector('.arrow-back-to-top svg'),
    arrow: document.querySelector('.arrow-back-to-top path'),
    circle: document.querySelector('.arrow-back-to-top circle'),
  }

  // Back-to-top
  let d =
    Math.round(
      (document.querySelector('.body').scrollHeight /
        window.innerHeight /
        3.5) *
        10
    ) / 10

  svg.button.addEventListener('click', () =>
    gsap.to(window, { scrollTo: 0, duration: d, ease: 'power2.inOut' })
  )

  if (!touchDevice()) {
    let svgHover = gsap.timeline({ paused: true })
    svgHover
      .to(svg.arrow, { stroke: '#e65d35', ease: 'none', duration: 0.2 })
      .to(svg.circle, { stroke: '#e65d35', ease: 'none', duration: 0.2 }, '<')
      .to(svg.button, { yPercent: -10, ease: 'none', duration: 0.3 }, '<')

    svg.button.addEventListener('mouseenter', () => svgHover.play())
    svg.button.addEventListener('mouseleave', () => svgHover.reverse())
  }

  // Responsive timelines
  let mm = gsap.matchMedia()
  mm.add(
    {
      desktop: '(min-width: 992px)',
      tabMob: '(max-width: 991px)',
    },
    (context) => {
      let { desktop, tabMob } = context.conditions

      if (desktop) {
        footerDesktop(
          logo,
          sublogo,
          chars,
          text,
          smallLinks,
          svg.button,
          outLogos
        )
      } else if (tabMob) {
        footerMob(
          foot,
          box,
          chars,
          text,
          dash,
          smallLinks,
          svg.button,
          outLogos
        )
      }
    }
  )
}

export default footer

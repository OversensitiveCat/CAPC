import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

import { touchDevice } from '../utilities/utilities'

gsap.registerPlugin(TextPlugin)

const footerClick = () => {
  // DOM
  const mail = document.querySelector('.mail-footer')
  const adress = document.querySelector('.mail-footer-adress')
  const copy = document.querySelector('.mail-footer-click')

  let thanks = false

  // Mail hover
  if (!touchDevice()) {
    let tlMail = gsap.timeline({ paused: true })
    tlMail
      .to(adress, { color: '#3867d9', duration: 0.3 })
      .to(copy, { xPercent: -4, duration: 0.3 }, 0)
    mail.addEventListener('mouseenter', () => tlMail.play())
    mail.addEventListener('mouseleave', () => tlMail.reverse())
  }

  // Click to copy
  let text = gsap.timeline({
    paused: true,
    onComplete: () => {
      gsap.delayedCall(0.8, () => text.reverse())
    },
    onReverseComplete: () => {
      thanks = false
    },
  })

  text.fromTo(
    copy,
    { text: 'Cliquez pour copier !' },
    { text: 'À très vite !', duration: 0.4 }
  )

  mail.addEventListener('click', () => {
    navigator.clipboard.writeText('contact@capc-prieuredevivoin.fr')
    if (thanks === true) {
      return
    } else {
      thanks = true
      text.play()
    }
  })
}

export default footerClick

import Lenis from '@studio-freight/lenis'
;('use strict')

const lenis = new Lenis({
  ease: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  lerp: 0.075,
  wheelMultiplier: 1,
  normalizeWheel: true,
})

const setLenis = () => {
  'use strict'
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}

export { lenis, setLenis }

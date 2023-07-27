import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

setLenis()
window.addEventListener('unload', () => window.scrollTo(0, 0))

barba.use(barbaPrefetch)
barba.init({
  timeout: 4000,
  debug: true,
  preventRunning: true,
  // views: [
  //   {
  //     namespace: 'home',
  //     afterEnter() {

  //     },
  //   },
  // ],
  transitions: [
    {
      name: 'default',
      once(data) {
        console.log(data)
      },
      leave(data) {
        const done = this.async()
        done()
        console.log(data)
      },
      enter(data) {
        console.log(data)
      },
    },
  ],
})

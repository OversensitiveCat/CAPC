import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'

import buttons from './animations/buttons'
import imgs from './animations/imgs'
import press from './animations/press'
import quote from './animations/quote'
import sectionHeadings from './animations/sectionHeadings'
import aboutEnter from './entries/aboutEnter'
import expoItemEnter from './entries/expoItemEnter'
import exposEnter from './entries/exposEnter'
import homeEnter from './entries/homeEnter'
import infosEnter from './entries/infosEnter'
import lieuEnter from './entries/lieuEnter'
import mentionsEnter from './entries/mentionsEnter'
import setCursor from './global-views/cursor'
import footer from './global-views/footer'
import { setLenis } from './global-views/lenis'
import nav from './navigation/nav'
import navHover from './navigation/navHover'
import navInit from './navigation/navInit'
import about from './pages-views/about'
import expoItem from './pages-views/expo-page/expoItem'
import expoItemBeforeEnter from './pages-views/expo-page/expoItemBeforeEnter'
import { expoItemClean } from './pages-views/expo-page/item-events'
import expos from './pages-views/expos/expos'
import home from './pages-views/home/home'
import { homeClean } from './pages-views/home/homeColor'
import infos from './pages-views/infos'
import lieu from './pages-views/lieu/lieu'
import mentions from './pages-views/mentions'
import { navLeave, navEnter } from './transitions/navTransitions'
import { transitionEnter, transitionLeave } from './transitions/transitions'
import { touchDevice } from './utilities/utilities'

// Disable all the script in webflow edit-mode
if (!document.querySelector('html').classList.contains('w-editor')) {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  if (!touchDevice()) {
    navHover()
  }
  navInit()
  setLenis()
  setCursor()

  window.addEventListener('unload', () => window.scrollTo(0, 0))

  barba.hooks.afterEnter((data) => {
    nav(data.next.namespace)
    footer()
  })

  barba.use(barbaPrefetch)
  barba.init({
    timeout: 4000,
    preventRunning: true,
    views: [
      {
        namespace: 'home',
        afterEnter() {
          home()
          buttons()
          imgs()
        },
        afterLeave() {
          homeClean()
        },
      },
      {
        namespace: 'lieu',
        afterEnter() {
          lieu()
          sectionHeadings()
          imgs()
          quote()
        },
      },
      {
        namespace: 'about',
        afterEnter() {
          about()
          sectionHeadings()
          press()
          quote()
        },
      },
      {
        namespace: 'expos',
        afterEnter() {
          expos()
          sectionHeadings()
        },
      },
      {
        namespace: 'expo-page',
        beforeEnter() {
          expoItemBeforeEnter()
        },
        afterEnter() {
          expoItem()
          sectionHeadings()
        },
        afterLeave() {
          expoItemClean()
        },
      },
      {
        namespace: 'mentions',
        afterEnter() {
          mentions()
        },
      },
      {
        namespace: 'infos',
        afterEnter() {
          infos()
          sectionHeadings()
          imgs()
        },
      },
    ],
    transitions: [
      {
        name: 'home',
        to: { namespace: ['home'] },
        once() {
          homeEnter()
        },
        leave(data) {
          const done = this.async()
          transitionLeave(data, done)
        },
        enter() {
          transitionEnter(homeEnter)
        },
      },
      {
        name: 'home-nav',
        from: {
          custom: ({ trigger }) => {
            return trigger.classList && trigger.classList.contains('nav-link')
          },
        },
        to: { namespace: ['home'] },
        leave(data) {
          const done = this.async()
          navLeave(data, done)
        },
        enter() {
          navEnter(homeEnter)
        },
      },
      {
        name: 'lieu',
        to: { namespace: ['lieu'] },
        once() {
          lieuEnter()
        },
        leave(data) {
          const done = this.async()
          transitionLeave(data, done)
        },
        enter() {
          transitionEnter(lieuEnter)
        },
      },
      {
        name: 'lieu-nav',
        from: {
          custom: ({ trigger }) => {
            return trigger.classList && trigger.classList.contains('nav-link')
          },
        },
        to: { namespace: ['lieu'] },
        leave(data) {
          const done = this.async()
          navLeave(data, done)
        },
        enter() {
          navEnter(lieuEnter)
        },
      },
      {
        name: 'about',
        to: { namespace: ['about'] },
        once() {
          aboutEnter()
        },
        leave(data) {
          const done = this.async()
          transitionLeave(data, done)
        },
        enter() {
          transitionEnter(aboutEnter)
        },
      },
      {
        name: 'about-nav',
        from: {
          custom: ({ trigger }) => {
            return trigger.classList && trigger.classList.contains('nav-link')
          },
        },
        to: { namespace: ['about'] },
        leave(data) {
          const done = this.async()
          navLeave(data, done)
        },
        enter() {
          navEnter(aboutEnter)
        },
      },
      {
        name: 'expos',
        to: { namespace: ['expos'] },
        once() {
          exposEnter()
        },
        leave(data) {
          const done = this.async()
          transitionLeave(data, done)
        },
        enter() {
          transitionEnter(exposEnter)
        },
      },
      {
        name: 'expos-nav',
        from: {
          custom: ({ trigger }) => {
            return trigger.classList && trigger.classList.contains('nav-link')
          },
        },
        to: { namespace: ['expos'] },
        leave(data) {
          const done = this.async()
          navLeave(data, done)
        },
        enter() {
          navEnter(exposEnter)
        },
      },
      {
        name: 'expo-page',
        to: { namespace: ['expo-page'] },
        once() {
          expoItemEnter()
        },
        leave(data) {
          const done = this.async()
          transitionLeave(data, done)
        },
        enter() {
          transitionEnter(expoItemEnter)
        },
      },
      {
        name: 'mentions',
        to: { namespace: ['mentions'] },
        once() {
          mentionsEnter()
        },
        leave(data) {
          const done = this.async()
          transitionLeave(data, done)
        },
        enter() {
          transitionEnter(mentionsEnter)
        },
      },
      {
        name: 'mentions-nav',
        from: {
          custom: ({ trigger }) => {
            return (
              trigger.classList &&
              trigger.classList.contains('menu-credits-link')
            )
          },
        },
        to: { namespace: ['mentions'] },
        leave(data) {
          const done = this.async()
          navLeave(data, done)
        },
        enter() {
          navEnter(mentionsEnter)
        },
      },
      {
        name: 'infos',
        to: { namespace: ['infos'] },
        once() {
          infosEnter()
        },
        leave(data) {
          const done = this.async()
          transitionLeave(data, done)
        },
        enter() {
          transitionEnter(infosEnter)
        },
      },
      {
        name: 'infos-nav',
        from: {
          custom: ({ trigger }) => {
            return trigger.classList && trigger.classList.contains('nav-link')
          },
        },
        to: { namespace: ['infos'] },
        leave(data) {
          const done = this.async()
          navLeave(data, done)
        },
        enter() {
          navEnter(infosEnter)
        },
      },
      {
        name: 'self',
        leave(data) {
          if (data.trigger.classList.contains('nav-link')) {
            const done = this.async()
            navLeave(data, done)
          } else {
            const done = this.async()
            transitionLeave(data, done)
          }
        },
        enter(data) {
          if (data.trigger.classList.contains('nav-link')) {
            switch (data.current.namespace) {
              case 'home':
                navEnter(homeEnter)
                break
              case 'lieu':
                navEnter(lieuEnter)
                break
              case 'about':
                navEnter(aboutEnter)
                break
              case 'expos':
                navEnter(exposEnter)
                break
              case 'mentions':
                navEnter(mentionsEnter)
                break
              case 'infos':
                navEnter(infosEnter)
                break
            }
          } else {
            switch (data.current.namespace) {
              case 'home':
                transitionEnter(homeEnter)
                break
              case 'lieu':
                transitionEnter(lieuEnter)
                break
              case 'about':
                transitionEnter(aboutEnter)
                break
              case 'expos':
                transitionEnter(exposEnter)
                break
              case 'mentions':
                transitionEnter(mentionsEnter)
                break
              case 'infos':
                transitionEnter(infosEnter)
                break
            }
          }
        },
      },
    ],
  })
} else {
  console.log('webflow edit mode')

  const el = document.createElement('style')

  el.innerText =
    '[data-anim] {opacity: 1;}.img-hide, .expo-page-thumbnail-hide {opacity: 0}'

  document.head.appendChild(el)
}

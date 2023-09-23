// import { gsap } from 'gsap'

import vid from '../../data/presentation.webm'

const homeVid = () => {
  const url = new URL(vid, import.meta.url).href
  console.log(url)

  // const v = document.querySelector('#home-vid')
  // const s = document.querySelector('#home-vid source')
  // s.src = url
  // console.log(s.src)
  // gsap.set(v, { border: '2px solid red' })

  // v.addEventListener('canplaythrough', function () {
  //   console.log('Video has loaded and can play through without interruption.')
  //   v.play()
  // })

  // v.addEventListener('loadedmetadata', function () {
  //   console.log('Metadata has loaded.')
  // })

  // v.addEventListener('error', function () {
  //   console.error('Error loading the video.')
  // })
}

export default homeVid

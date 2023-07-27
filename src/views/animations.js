import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
// import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, TextPlugin)

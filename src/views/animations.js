import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import SplitType from "split-type";

gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, TextPlugin);
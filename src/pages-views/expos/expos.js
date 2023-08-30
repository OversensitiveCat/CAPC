import exposEyes from './exposEyes'
import exposFadeIn from './exposFadeIn'
import exposHover from './exposHover'
import { touchDevice } from '../../utilities/utilities'

const expos = () => {
  exposEyes()
  exposFadeIn()
  if (!touchDevice()) {
    exposHover()
  }
}

export default expos

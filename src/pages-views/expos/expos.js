import { touchDevice } from '../../utilities/utilities'
import exposEyes from './exposEyes'
import exposFadeIn from './exposFadeIn'
import exposHover from './exposHover'

const expos = () => {
  exposEyes()
  exposFadeIn()
  if (!touchDevice()) {
    exposHover()
  }
}

export default expos

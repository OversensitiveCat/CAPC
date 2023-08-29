const debounce = (func, delay) => {
  let timeoutId
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timeoutId)
    timeoutId = setTimeout(function () {
      func.apply(context, args)
    }, delay)
  }
}

const touchDevice = () => {
  if (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  ) {
    return true
  } else return false
}

const resizeX = (func) => {
  let previousWidth = window.innerWidth,
    currentWidth
  function onResize() {
    currentWidth = window.innerWidth
    if (previousWidth !== currentWidth) {
      previousWidth = currentWidth
      return func()
    } else return
  }
  window.addEventListener('resize', onResize)
}

const isDesktop = () => {
  if (window.innerWidth > 991) {
    return true
  } else return false
}

export { debounce, touchDevice, resizeX, isDesktop }

import {store} from '../store'

export default (to, from, next) => {
  // prevent authenticated users from accessing register/login pages
  if (store.getters.user) {
    next(false)
  } else {
    next()
  }
}
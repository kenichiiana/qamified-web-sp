import {store} from '../store'

export default (to, from, next) => {
  // prevent unauthenticated users from accessing secured pages
  if (store.getters.getUser) {
    next()
  } else {
    next('/sign-in')
  }
}

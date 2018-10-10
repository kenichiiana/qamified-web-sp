import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from '../firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    getUser (state) {
      return state.user
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUp ({commit}, payload) {
      auth.createUserWithEmailAndPassword(payload.email, payload.password).then(
        user => {
          const newUser = {
            id: user.user.uid
          }
          commit('setUser', newUser)
        }
      ).catch(
        error => {
          console.log(error)
        }
      )
    }
  }
})

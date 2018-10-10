import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from '../firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    isLoading: false
  },
  getters: {
    getUser (state) {
      return state.user
    },
    isLoading (state) {
      return state.isLoading
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    signUp ({commit}, payload) {
      commit('setLoading', true)
      auth.createUserWithEmailAndPassword(payload.email, payload.password).then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.user.uid
            // add other necessary attributes here
          }
          commit('setUser', newUser)
          this.$router.push('/welcome')
        }
      ).catch(
        error => {
          commit('setLoading', false)
          console.log(error)
          // handle errors here
        }
      )
    },
    signIn ({commit}, payload) {
      commit('setLoading', true)
      auth.signInWithEmailAndPassword(payload.email, payload.password).then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.user.uid
            // add other necessary attributes here
          }
          commit('setUser', newUser)
        }
      ).catch(
        error => {
          commit('setLoading', false)
          console.log(error)
          // handle errors here
        }
      )
    }
  }
})

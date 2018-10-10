<template>
  <div class="hero is-fullheight" id="register-hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4" id="hehe">
          <div class="box">
            <h3 class="title has-text-primary"> QamifiED</h3>
            <h6 class="subtitle has-text-grey is-size-6"> Start your adventure here. </h6>
            <form>
              <div class="field">
                <div class="control has-icons-left">
                  <input v-model="newUser.username" class="input is-small is-rounded" type="text" placeholder="Username"/>
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="control has-icons-left">
                  <input v-model="newUser.email" class="input is-small is-rounded" type="email" placeholder="Email"/>
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="control has-icons-left">
                  <input v-model="newUser.password" class="input is-small is-rounded" type="password" placeholder="Password"/>
                    <span class="icon is-small is-left">
                      <i class="fa fa-key"></i>
                    </span>
                </div>
              </div>
              <div class="field">
                <div class="control has-icons-left">
                  <input v-model="newUser.confirmPassword" class="input is-small is-rounded" type="password" placeholder="Confirm Password"/>
                    <span class="icon is-small is-left">
                      <i class="fa fa-key"></i>
                    </span>
                </div>
              </div>
              <button class="button is-block is-primary is-small is-fullwidth" v-if="!isLoading" v-on:click.prevent="signUp">
                Register
              </button>
              <button class="button is-loading is-primary is-small is-fullwidth" v-if="isLoading"></button>
            </form>
          </div>
          <div class="box">
            <h6 class="subtitle has-text-grey is-size-6"> Already have an account?
              <a v-on:click="goto('/sign-in')"> Login here </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../node_modules/bulma/css/bulma.css'
import '../../node_modules/font-awesome/css/font-awesome.css'
export default {
  name: 'SignUp',
  data () {
    return {
      newUser: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  computed: {
    getUser () {
      return this.$store.getters.getUser
    },
    isLoading () {
      return this.$store.getters.isLoading
    }
  },
  watch: {
    getUser (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/welcome')
      }
    }
  },
  methods: {
    goto (route) {
      this.route = route
      this.$router.push(route)
    },
    signUp: function () {
      if (this.newUser.password === this.newUser.confirmPassword) {
        this.$store.dispatch('signUp', {email: this.newUser.email, password: this.newUser.password, username: this.newUser.username})
      }
    }
  }
}
</script>

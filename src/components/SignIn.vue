<template>
  <div class="hero is-fullheight" id="login-hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4" id="hehe">
          <div class="box">
            <h3 class="title has-text-primary"> The world needs you.</h3>
            <h6 class="subtitle has-text-grey is-size-6"> Login to start your quest </h6>
            <form>
              <div class="field">
                <div class="control has-icons-left">
                  <input class="input is-small is-rounded" type="email" placeholder="Username/email" v-model="email"/>
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="control has-icons-left">
                  <input class="input is-small is-rounded" type="password" placeholder="Password" v-model="pass"/>
                  <span class="icon is-small is-left">
                    <i class="fa fa-key"></i>
                  </span>
                </div>
              </div>
              <button class="button is-block is-primary is-small is-fullwidth" v-if="!isLoading" v-on:click.prevent="signIn">
                Login
              </button>
              <button class="button is-loading is-primary is-small is-fullwidth" v-if="isLoading"></button>
            </form>
          </div>
          <p class="has-text-grey">
            <a href="#" v-on:click="goto('/')"> Register </a>
              &nbsp; · &nbsp;
            <a href="#"> Forgot password? </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '../../node_modules/bulma/css/bulma.css'
import '../../node_modules/font-awesome/css/font-awesome.css'
export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      pass: ''
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
    signIn: function () {
      this.$store.dispatch('signIn', {email: this.email, password: this.pass})
    }
  }
}
</script>

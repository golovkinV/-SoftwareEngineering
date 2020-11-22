<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>User name</label>
      <label>
        <input required v-model="username" type="text" placeholder="Snoopy"/>
      </label>
      <label>Password</label>
      <label>
        <input required v-model="password" type="password" placeholder="Password"/>
      </label>
      <hr/>
      <button type="submit">Sign In</button>
      <button v-on:click="register">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const { username, password } = this
      this.$router.push('/test')
    },
    register: function () {
      this.$router.push('/sign_up')
    }
  }
}
</script>

<style scoped>

</style>

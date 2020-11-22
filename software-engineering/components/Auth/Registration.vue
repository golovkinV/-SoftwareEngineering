<template>
  <div class="container">
    <form class="login" @submit.prevent="signUp">
      <h1>Registration</h1>
      <label>First name</label>
      <label>
        <input required v-model="firstName" type="text"/>
      </label><br>
      <label>Second name</label>
      <label>
        <input required v-model="secondName" type="text"/>
      </label><br>
      <label>Country</label>
      <label>
        <input required v-model="country" type="text"/>
      </label><br>
      <label>Email</label>
      <label>
        <input required v-model="email" type="email"/>
      </label><br>
      <label>Password</label>
      <label>
        <input required v-model="password" type="password"/>
      </label><br>
      <label>Repeat password</label>
      <label>
        <input required v-model="repeatPassword" type="password"/>
      </label><br>
      <hr/>
      <button type="submit">OK</button>
      <button v-on:click="routeToBack">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      firstName: '',
      secondName: '',
      country: '',
      email: '',
      password: '',
      repeatPassword: ''
    }
  },
  methods: {
    signUp: function () {
      const { firstName, secondName, country, email, password, repeatPassword } = this
      if (password !== repeatPassword) {

      } else {
        this.routeToBack()
      }
    },
    routeToBack: function () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
label{
  display: inline-block;
  clear: left;
  width: 10%;
  text-align: right;
  padding-top: 10px;
}
input {
  display: inline-block;
}
</style>

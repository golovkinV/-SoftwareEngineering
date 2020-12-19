<template>
  <div class="container login-container">
    <div class="flash_container">
      <flash-message transitionIn="animated swing" class="myCustomClass"></flash-message>
    </div>
    <div class="row align-items-center justify-content-center">
      <div class="col-md-6 login-form-1">
        <h3>Auth</h3>
        <form @submit.prevent="login">
          <div class="form-group">
            <input type="text" v-model="email" class="form-control" placeholder="Email" value="" required="required"/>
          </div>
          <div class="form-group">
            <input type="password" v-model="password"  class="form-control" placeholder="Password" value="" required="required"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn" value="Sign In" />
          </div>
          <div class="form-group" >
            <button v-on:click="openRegistration" class="ForgetPwd">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import UserService from "@/services/UserService";

export default {
  name: "SignIn",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const { email, password } = this
      UserService
          .login(email, password)
          .then(response => {
            console.log(response.data)
            this.$router.push(`/profile/${response.data.id}`)
          })
          .catch(e => {
            this.flash("Wrong email or password", 'error');
            console.log(e)
          })
    },
    openRegistration: function () {
      this.$router.push("/sign_up")
    }
  }
}
</script>

<style scoped>
.flash_container {
  margin-inline: auto;
  width: 25%;
}
.login-container{
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
}
.login-form-1{
  padding: 5%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3{
  color: #333;
  font-weight: bold;
  margin-top: 0;
  text-align: center;
}
.login-container form{
  padding: 10%;
}
.btn {
  font-weight: 600;
  color: #fff;
  background-color: #0062cc;
  width: 50%;
  border-radius: 1rem;
  padding: 1.5%;
  border: none;
  outline:none;
  cursor: pointer;
}

.login-form-1 .ForgetPwd{
  width: 50%;
  padding: 1.5%;
  border: none;
  cursor: pointer;
  color: #0062cc;
  font-weight: 600;
  background-color: #ffffff;
  outline:none;
}
</style>
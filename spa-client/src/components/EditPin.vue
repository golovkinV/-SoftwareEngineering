<template>
  <div class="container login-container">
    <div class="row align-items-center justify-content-center">
      <div class="col-md-6 login-form-1">
        <h3>Edit PIN</h3>
        <hr>
        <form @submit.prevent="changePin">
          <div class="form-group" style="display: inline-table">
            <input v-model="first"  min="1" max="9" class="form-control" value="" required="required"
                   oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                   type = "number"
                   maxlength = "1"/>
            <input v-model="second" min="1" max="9" class="form-control" value="" required="required"
                   oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                   type = "number"
                   maxlength = "1"/>
            <input v-model="third"  min="1" max="9" class="form-control" value="" required="required"
                   oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                   type = "number"
                   maxlength = "1"/>
            <input v-model="fourth"  min="1" max="9" class="form-control" value="" required="required"
                   oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                   type = "number"
                   maxlength = "1"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn" value="Change" />
          </div>
        </form>
        <div class="form-group" >
          <button v-on:click="cancel" class="ForgetPwd">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ProfileService from "@/services/ProfileService";

import ProfileService from "@/services/ProfileService";

export default {
  name: "EditPin",
  data() {
    return {
      first: "",
      second: "",
      third: "",
      fourth: ""
    }
  },
  methods: {
    changePin: function () {
      const { first , second, third, fourth } = this
      const data = {
        id: this.$route.params.id,
        pin: `${first}${second}${third}${fourth}`
      }
      ProfileService
          .updatePin(data)
          .then(response => {
            console.log(response.data)
            this.$router.push(`/profile/${this.$route.params.id}`)
          })
          .catch(e => {
            console.log(e);
          })
    },
    cancel: function () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input {
  width: 20%;
  height: 50px;
  display: table-cell;
  margin-right: 5px;
  text-align: center;
  font-weight:bold;
}
.login-container {
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
  padding: 10% 10% 0;
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
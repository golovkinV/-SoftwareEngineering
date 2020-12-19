<template>
  <div class="signup-form">
    <form @submit.prevent="changeInfo">
      <h3>Edit profile</h3>
      <div class="form-group">
        <label>First name</label>
        <input v-model = "user.firstName" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Last name</label>
        <input v-model = "user.lastName" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Country</label>
        <input v-model = "user.country" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>About</label>
        <textarea  v-model="user.about" class="form-control" rows="4" cols="50"></textarea>
      </div>
      <div class="form-group" style="text-align: center">
        <input type="submit" class="btn" value="Edit" />
      </div>
      <div class="form-group" style="text-align: center">
        <button v-on:click="cancel"  class="ForgetPwd">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import ProfileService from "@/services/ProfileService";

export default {
  name: "EditProfile",
  data() {
    return {
      user: Object
    }
  },
  methods: {
    changeInfo: function () {
      const { user } = this
      ProfileService
          .updateProfile(user)
          .then(response => {
            console.log(response.data)
            this.$router.push(`/profile/${response.data.id}`)
          })
          .catch(e => {
            console.log(e);
          })
    },
    cancel: function () {
      this.$router.back()
    }
  },
  mounted() {
    const id = this.$route.params.id
    ProfileService
        .get(id)
        .then(response => {
          this.user = response.data
        })
        .catch(e => {
          console.log(e);
        })
  }
}
</script>

<style scoped>
textarea {
  resize: none;
}
.form-control {
  min-height: 41px;
  box-shadow: none;
  border-color: #ddd;
}
.signup-form {
  width: 425px;
  margin: 0 auto;
  padding: 30px 0;
}
.signup-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #fff;
  padding: 5%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.signup-form h3 {
  color: #333;
  font-weight: bold;
  margin-top: 0;
  text-align: center;
}
.signup-form .form-group {
  margin-bottom: 20px;
}
.signup-form label {
  font-weight: normal;
  font-size: 14px;
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
.ForgetPwd{
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
<template>
  <div class="signup-form">
    <div class="flash_container">
      <flash-message transitionIn="animated swing" class="myCustomClass"></flash-message>
    </div>
    <form @submit.prevent="register">
      <h3>Sign Up</h3>
      <div class="form-group" style="margin-left: 30%">
        <img :src="user.avatar"/>
      </div>
      <div class="form-group">
      <div class="custom-file">
        <label class="custom-file-label" for="customFile">Choose image</label>
        <input type="file" accept="image/*" @change="uploadImage($event)" class="custom-file-input" id="customFile">
      </div>
      </div>
      <div class="form-group">
        <label>First name</label>
        <input v-model = "user.firstName" type="text" class="form-control" required="required">
      </div>
      <div class="form-group">
        <label>Last name</label>
        <input v-model = "user.lastName" type="text" class="form-control" required="required">
      </div>
      <div class="form-group">
        <label>Country</label>
        <input v-model = "user.country" type="text" class="form-control" required="required">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input v-model = "user.email" type="email" class="form-control" required="required">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model = "user.password" type="password" class="form-control" required="required">
      </div>
      <div class="form-group">
        <label>Repeat Password</label>
        <input v-model = "user.repeatPassword" type="password" class="form-control" required="required">
      </div>
      <div class="form-group" style="text-align: center">
        <input type="submit" class="btn" value="Sign Up" />
      </div>
    </form>
  </div>
</template>

<script>

import UserService from "@/services/UserService";
import ImageService from "@/services/ImageService";

export default {
  name: "SignUp",
  data() {
    return {
      user: {
        email: '',
        password: '',
        repeatPassword: '',
        firstName: '',
        lastName: '',
        country: '',
        avatar: ''
      }
    }
  },
  methods: {
    register: function () {
      const data =
          {
            email: this.user.email,
            password: this.user.password,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            country: this.user.country,
            avatar: this.user.avatar
          }
      const repeatPassword = this.user.repeatPassword
      if (repeatPassword !== data.password) {
        this.flash("Passwords must match", 'error');
      } else {
        UserService
            .register(data)
            .then(response => {
              console.log(response.data)
              this.$router.push("/sign_in")
            })
            .catch(e => {
              this.flash(e, 'error');
              console.log(e);
            })
      }
    },
    uploadImage(event) {
      const image = event.target.files[0];
      if (image) {
        const formData = new FormData();
        formData.append('file', image);
        ImageService
            .upload(formData)
            .then(res => {
              this.user.avatar = res.data
            })
            .catch(e => {
              console.log(e)
            })
      }
    }
  }
}
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: none;
  background-color: #dddddd;
}
.flash_container {
  margin-inline: auto;
  width: 50%;
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

</style>
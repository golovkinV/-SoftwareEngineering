<template>
  <div class="container container-lrl">
    <div class="notice notice-lg">
      <strong>Login information</strong>
      <img  v-on:click="editPassword" src="https://img.icons8.com/material/18/000000/pencil--v1.png"/>
      <hr>
      <label>Email:</label>&nbsp;<label class="label label-default">{{ user.email }}</label><br>
      <label>Role:</label>&nbsp;<label class="label label-default">{{ user.role.name }}</label>
    </div>
    <div class="notice  notice-lg">
      <strong>Profile information</strong>
      <img src="https://img.icons8.com/material/18/000000/pencil--v1.png"/>
      <hr>
      <label>First name:</label>&nbsp;
      <label class="label label-default">{{ user.firstName }}</label><br>
      <label>Last name:</label>&nbsp;
      <label class="label label-default">{{ user.lastName }}</label><br>
      <label>Country:</label>&nbsp;
      <label class="label label-default">{{ user.country }}</label>
    </div>
    <div class="notice notice-lg">
      <strong>Personal Identification Number</strong>
      <img src="https://img.icons8.com/material/18/000000/pencil--v1.png"/>
      <hr>
    </div>
  </div>
</template>

<script>
/*
*  TODO: - add PIN
*        - add load countries
*        - add load countries
* */
import ProfileService from "@/services/ProfileService";

export default {
  name: "Profile",
  data() {
    return {
      user: Object
    }
  },
  methods: {
    editPassword: function () {
        const user = this.user
        this.$router.push(`/profile/edit_password/${user.id}`)
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

<!--// -->
<style scoped>

strong {
  margin-right: 8px;
}

img {
  margin-top: -4px;
}

.container-lrl{
  margin-top: 5%;
  margin-bottom: 5%;
  width: 40%;
}

.notice {
  padding: 15px;
  background-color: #fafafa;
  border-left: 6px solid #7f7f84;
  margin-bottom: 10px;
  -webkit-box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
  -moz-box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
  box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
}

.notice-lg {
  padding: 35px;
  font-size: large;
}

.notice-success>strong {
  color: #80D651;
}
.notice-info {
  border-color: #0062cc;
}
.notice-info>strong {
  color: #0062cc;
}

.notice-warning>strong {
  color: #FEAF20;
}

.notice-danger>strong {
  color: #d73814;
}

</style>
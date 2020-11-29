<template>
  <div class="container container-lrl">
    <div class="notice notice-lg">
      <strong>Login information</strong>
      <hr>
      <label>Email:</label>&nbsp;<label class="label label-default">{{ user.email }}</label><br>
      <label>Role:</label>&nbsp;<label class="label label-default">{{ user.role.name }}</label>
    </div>
    <div class="notice  notice-lg">
      <strong>Profile information</strong>
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
      <hr>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/ProfileService";

export default {
  name: "Profile",
  data() {
    return {
      user: Object
    }
  },
  mounted() {
    const id = this.$route.params.id
    UserService
        .get(id)
        .then(response => {
          this.user = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e);
        })
  }
}
</script>

<!--// -->
<style scoped>

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
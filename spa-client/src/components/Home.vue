<template>
  <div class="container container-lrl">
    <div class="notice notice-lg">
      <strong>Users</strong>
      <hr>
      <router-link to="/users" class="nav-link">Browse</router-link>
      <router-link to="/sign_up" class="nav-link">Create</router-link>
    </div>
    <div class="notice notice-lg">
      <strong>Events</strong>
      <hr>
      <router-link to="/events" class="nav-link">Browse</router-link>
      <router-link v-if="isAdmin" to="/events/add" class="nav-link">Create</router-link>
      <router-link to="/users" class="nav-link">Assign</router-link>
    </div>
    <div class="notice notice-lg">
      <strong>Documents</strong>
      <hr>
      <router-link to="/documents" class="nav-link">Browse</router-link>
      <router-link v-if="isAdmin" to="/documents/add" class="nav-link">Create</router-link>
      <router-link to="/documents" class="nav-link">Download</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isAdmin: Boolean
    }
  },
  mounted() {
    const authUser = JSON.parse(localStorage.getItem("user"));
    this.isAdmin = authUser.role.name === "Admin"
  }
}
</script>

<style scoped>
strong {
  margin-right: 8px;
}
.nav-link {
  color: #2c3e50;
}
img {
  margin-top: -4px;
  cursor: pointer;
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
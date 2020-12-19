<template>
  <div class="container container-lrl">
    <h3>Users</h3>
    <hr>
    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th>Name</th>
        <th>Event</th>
        <th>Role</th>
        <th>Assign</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{user.firstName}} {{user.lastName}}</td>
        <td v-if="user.event">{{user.event.name}}</td>
        <td v-else></td>
        <td>{{user.role.name}}</td>
        <th v-if="user.event"><button class="remove">Remove</button></th>
        <td v-else><button class="assign">Assign</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import UserService from "@/services/UserService";

export default {
  name: "Users",
  data() {
    return {
      users: []
    };
  },
  methods: {
    retrieveUsers() {
      UserService.getAll()
          .then(response => {
            const users = response.data
            this.users = users
                .sort( (a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .sort( (a, b) => (b.event===null)-(a.event===null))
                .filter(user => user.role.name !== "Admin");
          })
          .catch(e => {
            console.log(e);
          });
    },
    refreshList() {
      this.retrieveUsers();
    }
  },
  mounted() {
    this.retrieveUsers();
  }
}
</script>

<style scoped>
  h3 {
    text-align: center;
  }
  .container-lrl {
    margin-top: 5%;
    margin-bottom: 5%;
    width: 100%;
    border-radius: 3px;
    background: #fff;
    padding: 5%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
  }
  table {
    text-align: center;
  }
  button {
    font-weight: 600;
    color: #fff;
    width: 50%;
    border-radius: 1rem;
    padding-block: 5px;
    padding-inline: 24px;
    border: none;
    outline:none;
    cursor: pointer;
  }
  .assign {
    background-color: #0062cc;
  }
  .remove {
    background-color: #d73814;
  }
</style>
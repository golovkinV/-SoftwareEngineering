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
        <th v-if="user.event">
          <button class="remove" v-on:click="removeUserFromEvent(user, user.event._id)">
            Remove
          </button>
        </th>
        <td v-else>
          <button class="assign" data-toggle="modal" data-target="#exampleModalCenter" v-on:click="setUser(user)">
            Assign
          </button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Select event</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <label>Event</label>
              <select class="form-control form-control-sm" v-model="selectedEvent">
                <option disabled value="">Select event</option>
                <option v-for="option in events" :key="option.id" :value="option.id">
                  {{ option.name }}
                </option>
              </select><br>
              <label>Role</label>
              <select class="form-control form-control-sm" v-model="selectedRole" >
                <option v-for="option in roles" :key="option.id" :value="option.id">
                  {{ option.name }}
                </option>
              </select>
            </div>

          </div>
          <div class="modal-footer">
            <button class="assign" data-dismiss="modal" style="width: auto;" v-on:click="addUserToEvent">Save changes</button>
            <button class="btn btn-secondary" style="width: auto" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import UserService from "@/services/UserService";
import EventService from "@/services/EventService";
import RoleService from "@/services/RoleService";

export default {
  name: "Users",
  data() {
    return {
      users: [],
      events: [],
      roles: [],
      selectedEvent: "",
      selectedRole: "",
      selectedUser: Object,
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
    fetchRoles() {
      RoleService
          .getAll()
          .then(response => {
            this.roles = response.data.filter(role => role.name !== "Admin");
          })
          .catch(e => {
            console.log(e);
          });
    },
    fetchEvents() {
      EventService
          .getAll()
          .then(response => {
            this.events = response.data
          })
          .catch(e => {
            console.log(e);
          });
    },
    removeUserFromEvent(user, eventId) {
      const data = {
        user: user
      }
      console.log(user)
      EventService
          .removeUser(eventId, data)
          .then(response => {
            console.log(response)
            this.refreshList()
          })
          .catch(e => {
            console.log(e)
          })
    },
    setUser(user) {
      this.selectedUser = user
    },
    addUserToEvent() {
      const eventId = this.selectedEvent
      const roleId = this.selectedRole
      console.log(roleId)
      const data = {
        user: this.selectedUser,
        role: roleId
      }
      EventService
          .addUser(eventId, data)
          .then(response => {
            console.log(response)
            this.refreshList()
          })
          .catch(e => {
            console.log(e)
          })
    },
    refreshList() {
      this.retrieveUsers();
    }
  },
  mounted() {
    this.retrieveUsers();
    this.fetchEvents();
    this.fetchRoles();
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
  select {
    width: 50%;
  }
</style>
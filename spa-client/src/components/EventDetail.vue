<template>
  <div class="container container-lrl">
    <div class="notice notice-lg">
      <strong>Event information</strong>
      <img data-toggle="modal" data-target="#exampleModalCenter" src="https://img.icons8.com/material/18/000000/pencil--v1.png"/>
      <hr>
      <label>Event Title:</label>&nbsp;<label class="label label-default">{{ event.name }}</label>
    </div>
    <div class="notice  notice-lg">
      <strong>Dates information</strong>
      <img data-toggle="modal" data-target="#exampleModalCenterDates" src="https://img.icons8.com/material/18/000000/pencil--v1.png"/>
      <hr>
      <label>Start Date:</label>&nbsp;
      <label class="label label-default">{{ event.start }}</label><br>
      <label>C1 Date:</label>&nbsp;
      <label class="label label-default">{{ event.CStart }}</label><br>
      <label>C+1 Date:</label>&nbsp;
      <label class="label label-default">{{ event.CFinish }}</label><br>
      <label>Finish Date:</label>&nbsp;
      <label class="label label-default">{{ event.finish }}</label>
    </div>
    <div class="notice notice-lg">
      <strong>Participants</strong>
      <hr>
      <label>Participants:</label>&nbsp;<label>{{ event.users.length }}</label>
    </div>
    <div class="form-group" style="text-align: center">
      <button v-on:click="back"  class="ForgetPwd">Back</button>
    </div>

    <!-- Modal Event title -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Change title</h5>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <label>Event Title:</label>
              <input type="text" v-model="event.name" class="form-control" value="" required="required"/>
            </div>
          </div>
          <div class="modal-footer">
            <button class="assign" data-dismiss="modal" style="width: auto;" v-on:click="update">Save changes</button>
            <button class="btn btn-secondary" style="width: auto" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Event Dates  -->
    <div class="modal fade" id="exampleModalCenterDates" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitleDates" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitleDates">Change dates</h5>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="form-group">
                <label>Start Date</label>
                <input v-model="event.start" type="date" class="form-control" required="required">
              </div>
              <div class="form-group">
                <label>C1 Date</label>
                <input v-model="event.CStart" type="date" class="form-control" required="required">
              </div>
              <div class="form-group">
                <label>C+1 Date</label>
                <input v-model="event.CFinish" type="date" class="form-control" required="required">
              </div>
              <div class="form-group">
                <label>Finish Date</label>
                <input v-model="event.finish" type="date" class="form-control" required="required">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="assign" data-dismiss="modal" style="width: auto;" v-on:click="update">Save changes</button>
            <button class="btn btn-secondary" style="width: auto" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import EventService from "@/services/EventService";
export default {
  name: "EventDetail",
  data() {
    return {
      event: Object
    }
  },
  methods: {
    fetchEvent() {
      const id = this.$route.params.id
      EventService
          .get(id)
          .then(res => {
            this.event = res.data
          })
        .catch(e => {
          console.log(e)
        })
    },
    update() {
      const id = this.$route.params.id
      const event = this.event
      EventService
          .update(id, event)
          .then(res => {
            console.log(res)
          })
          .catch(e => {
            console.log(e)
          })
    },
    back() {
      this.$router.back()
    }
  },
  mounted() {
    this.fetchEvent()
  }
}
</script>

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

.notice-warning>strong {
  color: #FEAF20;
}

.notice-danger>strong {
  color: #d73814;
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
</style>
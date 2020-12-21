<template>
  <div class="container container-lrl">
    <div class="notice notice-lg">
      <strong>Event information</strong>
      <hr>
      <label>Event Title:</label>&nbsp;<label class="label label-default">{{ event.name }}</label>
    </div>
    <div class="notice  notice-lg">
      <strong>Dates information</strong>
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
</style>
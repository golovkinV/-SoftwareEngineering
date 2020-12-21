<template>
  <div class="signup-form">
    <form @submit.prevent="addEvent">
      <h3>Add event</h3>
      <hr>
      <div class="form-group">
        <label>Event title</label>
        <input v-model="data.name" type="text" class="form-control" required="required">
      </div>
      <div class="form-group">
        <label>Start Date</label>
        <input v-model="data.start" type="date" class="form-control" required="required">
      </div>
      <div class="form-group">
        <label>C1 Date</label>
        <input v-model="data.CStart" type="date" class="form-control" required="required">
      </div>
      <div class="form-group">
        <label>C+1 Date</label>
        <input v-model="data.CFinish" type="date" class="form-control" required="required">
      </div>
      <div class="form-group">
        <label>Finish Date</label>
        <input v-model="data.finish" type="date" class="form-control" required="required">
      </div>
      <div class="form-group" style="text-align: center">
        <input type="submit" class="btn" value="Add" />
      </div>
      <div class="form-group" style="text-align: center">
        <button v-on:click="cancel"  class="ForgetPwd">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
/*
*  TODO: - add load image
* */
import EventService from "@/services/EventService";

export default {
  name: "AddEvent",
  data() {
    return {
      data: {
        name: '',
        start: '',
        CStart: '',
        CFinish: '',
        finish: ''
      }
    }
  },
  methods: {
    addEvent() {
      EventService
          .add(this.data)
          .then(data => {
            console.log(data)
            this.$router.push("/events")
          })
          .catch(e => {
            console.log(e)
          })
    },
    cancel() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
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
  padding: 1.5%;
  width: 50%;
  border-radius: 1rem;
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
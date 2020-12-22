<template>
  <div class="signup-form">
    <form @submit.prevent="addDocument">
      <h3>Add document</h3>
      <hr>
      <div class="form-group">
        <label>Document title</label>
        <input v-model = "document.name" type="text" class="form-control" required="required">
      </div>
      <div class="form-group">
        <label>Day</label>
        <input v-model = "document.date" type="date" class="form-control" required="required">
      </div>
      <div class="form-group">
        <label>Document Content</label>
        <textarea  v-model="document.desc" class="form-control" rows="4" cols="50" required="required"></textarea>
      </div>
      <div class="form-group">
        <label>Event</label>
        <select class="form-control form-control-sm" v-model="document.event">
          <option disabled value="">Select event</option>
          <option v-for="option in events" :key="option.id" :value="option.id">
            {{ option.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label>For Role:</label>
        <select class="form-control form-control-sm" v-model="document.role" required="required">
          <option disabled value="">Select role</option>
          <option value="5fc37fc7f2a8280450a4176d">Expert</option>
          <option value="5fc37fd8f2a8280450a4176e">Competitor</option>
        </select>
      </div>
      <div class="form-group" style="text-align: center">
        <input type="submit" class="btn" value="Add document" />
      </div>
      <div class="form-group" style="text-align: center">
        <button v-on:click="cancel"  class="ForgetPwd">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import DocumentService from "@/services/DocumentService";
import EventService from "@/services/EventService";
export default {
  name: "AddDocument",
  data() {
    return {
      document: {
        name: "",
        date: "",
        desc: "",
        event: "",
        role: ""
      },
      events: []
    }
  },
  methods: {
    fetchEvents() {
      EventService
          .getAll()
          .then(res => {
            this.events = res.data
          })
          .catch(e => {
            console.log(e)
          })
    },
    addDocument() {
      DocumentService
          .add(this.document)
          .then(res => {
            console.log(res)
            this.$router.back()
          })
          .catch(e => {
            console.log(e)
          })
    },
    cancel() {
      this.$router.back()
    }
  },
  mounted() {
    this.fetchEvents()
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
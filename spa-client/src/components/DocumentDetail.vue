<template>
  <div class="container container-lrl">
    <div class="notice  notice-lg">
      <strong>Document information</strong>
      <img data-toggle="modal" data-target="#exampleModalCenter" src="https://img.icons8.com/material/18/000000/pencil--v1.png"/>
      <hr>
      <label>Document Title:</label>&nbsp;
      <label class="label label-default">{{ doc.name }}</label><br>
      <label>Day:</label>&nbsp;
      <label class="label label-default">{{ doc.date }}</label><br>
      <label>Document Content:</label>&nbsp;
      <label class="label label-default">{{ doc.desc }}</label><br>
      <label>For:</label>&nbsp;
      <label class="label label-default">{{ doc.role.name }}</label>
    </div>
    <div class="form-group" style="text-align: center">
      <button v-on:click="deleteDoc"  class="ForgetPwd">Delete</button>
    </div>
    <div class="form-group" style="text-align: center">
      <button v-on:click="back"  class="ForgetPwd">Back</button>
    </div>
  </div>
</template>

<script>
import DocumentService from "@/services/DocumentService";
export default {
  name: "DocumentDetail",
  data() {
    return {
      doc: Object
    }
  },
  methods: {
    fetchDoc() {
      const id = this.$route.params.id
      DocumentService
          .get(id)
          .then(res => {
            console.log(res.data)
            this.doc = res.data
          })
          .catch(e => {
            console.log(e)
          })
    },
    back() {
      this.$router.back()
    },
    deleteDoc() {
      const id = this.$route.params.id
      DocumentService
          .delete(id)
          .then(res => {
            console.log(res)
            this.$router.back()
          })
          .catch(e => {
            console.log(e)
          })
    }
  },
  mounted() {
    this.fetchDoc()
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
</style>
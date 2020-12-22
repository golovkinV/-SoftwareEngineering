<template>
  <div class="container container-lrl">
    <h3>Documents</h3>
    <hr>
    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th>Document</th>
        <th>Day</th>
        <th>For</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="doc in documents" :key="doc.id" v-on:click="openDetail(doc.id)">
        <td>{{doc.name}}</td>
        <td>{{doc.date}}</td>
        <td>{{doc.role.name}}</td>
      </tr>
      </tbody>
    </table>
    <div style="text-align: center; margin-top: 30px">
      <button v-on:click="addDoc">Add Event</button>
    </div>
  </div>
</template>

<script>
import DocumentService from "@/services/DocumentService";
export default {
  name: "Documents",
  data() {
    return {
      documents: []
    }
  },
  methods: {
    fetchDocs() {
      DocumentService.getAll()
          .then(res => {
            this.documents = res.data
          })
          .catch(e => {
            console.log(e)
          })
    },
    addDoc() {
      this.$router.push("/documents/add")
    }
  },
  mounted() {
    this.fetchDocs()
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
tr {
  cursor: pointer;
}
button {
  font-weight: 600;
  background-color: #0062cc;
  color: #fff;
  width: 18%;
  border-radius: 1rem;
  padding-block: 5px;
  padding-inline: 24px;
  border: none;
  outline:none;
  cursor: pointer;
}
</style>
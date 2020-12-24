<template>
  <div class="container container-lrl">
    <h3>{{ event.name }} Documents</h3>
    <hr>
    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th>Day</th>
        <th>Document</th>
        <th>State</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="doc in event.docs" :key="doc.id">
        <td>{{doc.date}}</td>
        <td>{{doc.name}}</td>
        <td v-if="doc.isSigned">Signed</td>
        <td v-else><button class="assign" data-toggle="modal" data-target="#exampleModalCenter" v-on:click="setDoc(doc)">Sign</button></td>
      </tr>
      </tbody>
    </table>


    <!-- Modal PIN -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Input PIN</h5>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
                <div style="display: inline-table; width: auto; margin-left: 30%">
                  <input v-model="first"  min="1" max="9" class="form-control" value="" required="required"
                         oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                         type = "number"
                         maxlength = "1"/>
                  <input v-model="second" min="1" max="9" class="form-control" value="" required="required"
                         oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                         type = "number"
                         maxlength = "1"/>
                  <input v-model="third"  min="1" max="9" class="form-control" value="" required="required"
                         oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                         type = "number"
                         maxlength = "1"/>
                  <input v-model="fourth"  min="1" max="9" class="form-control" value="" required="required"
                         oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                         type = "number"
                         maxlength = "1"/>
                </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="assign" data-dismiss="modal" style="width: auto;" v-on:click="confirmPin">OK</button>
            <button class="btn btn-secondary" style="width: auto" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService";
import DocumentService from "@/services/DocumentService";

export default {
  name: "EventDocuments",
  data() {
    return {
      event: Object,
      first: "",
      second: "",
      third: "",
      fourth: "",
      user: {},
      selectedDoc: {}
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
    setDoc(doc){
      this.selectedDoc = doc
    },
    confirmPin() {
      const { first , second, third, fourth } = this
      const input = `${first}${second}${third}${fourth}`
      const pin = this.user.pin
      if (pin === input) {
        const doc = this.selectedDoc
        doc.isSigned = true
        DocumentService
            .update(doc._id, doc)
            .then(res => {
              console.log(res)
            })
            .catch(e => {
              console.log(e)
            })
      }
    }
  },
  mounted() {
    this.fetchEvent()
    const authUser = JSON.parse(localStorage.getItem("user"));
    this.user = authUser
    this.isAdmin = authUser.role.name === "Admin"
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input {
  width: 20%;
  height: 50px;
  display: table-cell;
  margin-right: 5px;
  text-align: center;
  font-weight:bold;
}
</style>
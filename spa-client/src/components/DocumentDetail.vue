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

    <!-- Modal Event title -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Change document</h5>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="form-group">
                <label>Document title</label>
                <input v-model = "doc.name" type="text" class="form-control" required="required">
              </div>
              <div class="form-group">
                <label>Day</label>
                <input v-model = "doc.date" type="date" class="form-control" required="required">
              </div>
              <div class="form-group">
                <label>Document Content</label>
                <textarea  v-model="doc.desc" class="form-control" rows="4" cols="50" required="required"></textarea>
              </div>
              <div class="form-group">
                <label>For Role:</label>
                <select class="form-control form-control-sm" v-model="doc.role" required="required">
                  <option disabled value="">Select role</option>
                  <option value="5fc37fc7f2a8280450a4176d">Expert</option>
                  <option value="5fc37fd8f2a8280450a4176e">Competitor</option>
                </select>
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
    update() {
      const id = this.$route.params.id
      DocumentService
          .update(id, this.doc)
          .then(res => {
            console.log(res)
            this.fetchDoc()
          })
          .catch(e => {
            console.log(e)
          })
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
.assign {
  background-color: #0062cc;
}
</style>
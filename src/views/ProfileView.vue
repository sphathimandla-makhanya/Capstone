<template>
  <div class="card">
  <div class="card-border-top">
  </div>
  <div class="img">
  </div>
  <span> Person</span>
  <p class="job"> Job Title</p>
  <button> Click
  </button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal3'+user.userID">
  Edit
</button>
<!-- Modal -->
<div class="modal fade" :id="'exampleModal3'+user.userID" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" placeholder="firstName" data-name name="item name" id="item name" v-model="firstName">
        <input type="text" placeholder="lastName" data-description name="lastName" id="lastName" v-model="lastName">
        <input type="text" placeholder="gender" data-amount name="gender" id="gender" v-model="gender">
        <input type="text" placeholder="userRole" data-category name=" userRole" id="userRole" v-model="userRole">
        <input type="text" placeholder="emailAdd" data-emailAdd name="item name" id="item name" v-model="emailAdd">
        <input type="text" placeholder="userPass" data-userPass name="item name" id="item name" v-model="userPass">
        <input type="text" placeholder="userProfile" data-userPass name="item name" id="item name" v-model="userProfile">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click= updateUser()>Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
    computed:{
        getSingle(){
            this.$store.dispatch('getSingleUser',this.$route.params.userID)
        }    
    },
    mounted(){
        this.getSingle
    }

}
</script>

<style scoped>
.card {
  width: 250px;
  height: 300px;
  background-image: linear-gradient(144deg,#8608b4, #492fed 60%,#bd6fda);
  border: none;
  border-radius: 10px;
  padding-top: 10px;
  position: relative;
  margin: auto;
  margin-top: 10%;
  font-family: inherit;
}

.card span {
  font-weight: 600;
  color: white;
  text-align: center;
  display: block;
  padding-top: 10px;
  font-size: 1.3em;
}

.card .job {
  font-weight: 400;
  color: white;
  display: block;
  text-align: center;
  padding-top: 5px;
  font-size: 1em;
}

.card .img {
  width: 80px;
  height: 80px;
  background: #e8e8e8;
  border-radius: 100%;
  margin: auto;
  margin-top: 20px;
}

.card button {
  padding: 8px 25px;
  display: block;
  margin: auto;
  border-radius: 8px;
  border: none;
  margin-top: 30px;
  background: #e8e8e8;
  color: #111111;
  font-weight: 600;
}

.card button:hover {
  background: #212121;
  color: #ffffff;
}
</style>
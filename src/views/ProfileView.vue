<template>
  <div id="prof">
    <h1>
      Profile
    </h1>
    <div class="container">
      <div v-for="p in $store.state.user" :key="p.userID">
          <div class="card mb-3 bg-dark" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img id="profile" src="https://i.ibb.co/3y9PLQ5/240-F-217346782-7-Xp-CTt8b-LNJqv-VAa-DZJwv-Zjm0ep-Qmj6j.jpg" class="img-fluid rounded-start" alt="">
          <!-- <img src="https://i.ibb.co/3y9PLQ5/240-F-217346782-7-Xp-CTt8b-LNJqv-VAa-DZJwv-Zjm0ep-Qmj6j.jpg" class="img-fluid rounded-start" alt=""> -->
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ p.firstName }}</h5>
            <p class="card-text">{{ p.lastName}}</p>
            <p class="card-text">{{ p.gender}}</p>
            <p class="card-text">{{ p.emailAdd}}</p>
            <button @click="deleteUser(p.userID)" class="btn bg-danger text-white">Delete</button>
            <button type="button" class="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal5">
    Edit
  </button>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Enter user details</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input type="text" placeholder="firstName" data-name name="item name" id="item name" v-model="firstName">
          <input type="text" placeholder="lastName" data-description name="lastName" id="lastName" v-model="lastName">
          <input type="text" placeholder="gender" data-amount name="gender" id="gender" v-model="gender">
          <!-- <input type="text" placeholder="userRole" data-category name=" userRole" id="userRole" v-model="userRole"> -->
          <input type="text" placeholder="example@gmail.com" data-emailAdd name="item name" id="item name" v-model="emailAdd">
          <!-- <input type="text" placeholder="userPass" data-userPass name="item name" id="item name" v-model="userPass"> -->
          <input type="text" placeholder="userProfile" data-userPass name="item name" id="item name" v-model="userProfile">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="updateUser(p.userID)">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>

  </div>
</template>

<script>
export default { 
  data(){
    return {
      userID:null,
      firstName: null,
      lastName:null,
      gender: null,
      userRole: null,
      emailAdd: null,
      userPass: null,
      userProfile:null
    }
  },
  methods:{
    deleteUser(userID){
          this.$store.dispatch('deleteUser', userID )
          },
    updateUser(userID){
      let edit= {
        userID:userID,
        firstName:this.firstName,
        lastName:this.lastName,
        gender:this.gender,
        userRole:this.userRole,
        emailAdd:this.emailAdd,
        userPass:this.userPass,
        userProfile:this.userProfile
      }
      this.$store.dispatch('updateUser', edit)
    }
  },
  computed:{
        getUser(){
            this.$store.dispatch('getSingleUser', $cookies.get('userID'))
        }    
    },
    mounted(){
        this.getUser
    }
  }
</script>

<style scoped>
#profile{
  height: 220px;
  width: 250px;
}
.card{
  width: 600px;
}

#prof{
  background-image: linear-gradient(to bottom,white, #1e1e70); /* #00bfff*/
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
@media screen and (max-width: 555px){
  #profile{
  height: 150px;
  width: 150px;
}
.card{
  width: 290px;
}
}
</style>
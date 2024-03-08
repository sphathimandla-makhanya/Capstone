<template>
    <form >
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">FirstName</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="firstName">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">LastName</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="lastName">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Gender</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="gender">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">userRole</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="userRole">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">emailAdd</label>
    <input type="email" class="form-control" id="exampleInputPassword1" v-model="emailAdd">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">userPass</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="userPass">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">userProfile</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="userProfile">
  </div>
  <!-- firstName,lastName,gender,userRole,emailAdd,userPass,userProfile -->
  <button type="submit" class="btn btn-primary" @click="postUser">Submit</button>
</form>
   
</template>

<script>
export default {
    data(){
        return{
            firstName:null,
            lastName:null,
            gender:null,
            userRole:null,
            emailAdd:null,
            userPass:null,
            userProfile:null
        }
    },
    computed:{
        getUsers(){
            this.$store.dispatch('getUsers')
        },
    
        postUser(){
          this.$store.dispatch('postUser', this.$data)
        }
    },
    mounted(){
        this.getUsers
    }

}
</script>

<style>

</style>
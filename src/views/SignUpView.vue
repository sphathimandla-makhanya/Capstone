<template>
    <!-- <form >
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
  <button type="submit" class="btn btn-primary" @click="postUser">Submit</button>
</form> -->
  <div>
    <input type="text" placeholder="firstName" name="firstName" id="firstName" v-model="firstName">
    <input type="text" placeholder="lastName" name="lastName" id="lastName" v-model="lastName">
    <input type="text" placeholder="gender" name="gender" id="gender" v-model="gender">
    <input type="text" placeholder="userRole" name="userRole" id="userRole" v-model="userRole">
    <input type="text" placeholder="emailAdd" name="emailAdd" id="emailAdd" v-model="emailAdd">
    <input type="text" placeholder="userPass" name="userPass" id="userPass" v-model="userPass">
    <input type="text" placeholder="userProfile" name="userProfile" id="userProfile" v-model="userProfile">
    <button type="submit" class="btn btn-primary" @click="postUser">Submit</button>
  </div>
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
        // getUsers(){
        //     this.$store.dispatch('getUsers')
        // },
    
        postUser(){
          this.$store.dispatch('postUser', this.$data)
        }
    },
    mounted(){
        // this.getUsers
    }

}
</script>

<style>

</style>
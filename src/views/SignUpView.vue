<template>
  <div>
    <input type="text" placeholder="firstName" name="firstName" id="firstName" v-model="firstName">
    <input type="text" placeholder="lastName" name="lastName" id="lastName" v-model="lastName">
    <input type="text" placeholder="gender" name="gender" id="gender" v-model="gender">
    <input type="text" placeholder="userRole" name="userRole" id="userRole" v-model="userRole">
    <input type="text" placeholder="emailAdd" name="emailAdd" id="emailAdd" v-model="emailAdd">
    <input type="text" placeholder="userPass" name="userPass" id="userPass" v-model="userPass">
    <input type="text" placeholder="userProfile" name="userProfile" id="userProfile" v-model="userProfile">
    <button type="submit" class="btn btn-primary" @click="postUser">Submit</button>

            <!-- Button trigger modal -->


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
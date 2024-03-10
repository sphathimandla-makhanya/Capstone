<template>
  <div>
        <!-- <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" v-model="emailAdd">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" id="exampleInputPassword1" v-model="userPass">
  </div>
  <button type="submit" class="btn btn-primary" @click="login()">Submit</button>
</form>  -->

  <h1>This is an Login page</h1>
      <input type ='name' placeholder="username" required v-model="emailAdd">
      <br><br>
      <!-- <input type ='email' placeholder="email" required v-model="email">
      <br><br> -->
      <input type ='password' placeholder="password" required v-model="userPass">
      <br><br>
      <button @click="signUp">Sign Up</button>
      <br><br>{{ $store.state.loggedIn }}
      <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
data(){
    return{
        emailAdd: null,
        userPass: null
    }
}, 
computed:{
    login(){
        this.$store.dispatch('checkUser',this.$data)
    }
}
}
</script>

<style>

</style>
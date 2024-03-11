<template>
 <div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/signup">SignUp</router-link> |
    <router-link v-if="!$cookies.get('jwt')" to="/login">Login</router-link> 
  </nav>
  <button v-if="$cookies.get('jwt')" @click="logout">logout</button>
  <router-view/>
 </div>
</template>

<script>
export default{
  computed:{
    logout(){
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

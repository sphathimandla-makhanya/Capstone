<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link" href="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" href="about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link" href="products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link" href="cart">Cart</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin" class="nav-link" href="admin">Admin</router-link>
        </li>
        <li class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle" v-if="!$cookies.get('jwt')" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login/SignUp
          </a>
          <a class="nav-link dropdown-toggle" v-if="$cookies.get('jwt')" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Logout
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item text-black" href="login" v-if="!$cookies.get('jwt')" to="/login">Login</a></li>
            <li><a class="dropdown-item text-black" href="#" v-if="$cookies.get('jwt')" @click="logout">logout</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item text-black" href="signup" to="/signup" >SignUp</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  computed:{
    logout(){
      this.$store.dispatch('logout')
    }
  }
}



</script>

<style scoped>
.navbar {
  background-color: #1e1e70; /* Fallback color */
  background-image: linear-gradient(to right, #1e1e70, #00bfff); /* Gradient */
  color: #fff; /* Text color */
}

/* Optionally, you can add styles for links and other navbar elements */
.navbar a {
  color: #fff; /* Link color */
  text-decoration: none; /* Remove underline */
}

/* Add any other styles you need for your navbar elements */

</style>
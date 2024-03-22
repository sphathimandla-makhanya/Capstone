<template>
 <div>
  <NavbarComp/>
  <SpinnerComp v-if="spinner"/>
  <router-view/>
  <FooterComp/>
 </div>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';
import SpinnerComp from './components/SpinnerComp.vue';
export default{
  components: {
   NavbarComp,
   SpinnerComp,
   FooterComp
  },
  data(){
    return{
      spinner:true
    }
  },mounted(){
    setTimeout(()=>{
      this.spinner=false;
    }, 1500)
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

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
.home{
  background-image: url(https://i.ibb.co/BTX8kBB/photo-1501436513145-30f24e19fcc8.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
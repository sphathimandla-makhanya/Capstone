<template>
  <div >
    <h1>
      Profile
    </h1>
    <div class="container">
      <div v-for="p in $store.state.user" :key="p.userID">
          <div class="card mb-3 bg-dark" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ p.firstName }}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
  computed:{
        getSingle(){
            this.$store.dispatch('getSingleUser', $cookies.get(userID))
        }    
    },
    mounted(){
        this.getSingle
    }
}
</script>

<style>

</style>
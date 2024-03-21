<template>
  <div >
    <h1>
      Profile
    </h1>
    <div class="container">
        <div class="body" v-for="a in $store.state.singleUser" :key="a-userID">
          <p class="text-black">{{ a.userID }}</p>
        </div>
  </div>
</div>
</template>

<script>
export default {
  computed:{
        getSingle(){
            this.$store.dispatch('getIdvUser', $cookies.get(userID))
        }    
    },
    mounted(){
        this.getSingle
    }
}
</script>

<style>

</style>
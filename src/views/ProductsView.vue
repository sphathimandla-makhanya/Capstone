<template>
    <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4" >
      <div v-for="item in $store.state.products" :key="item.prodID">
        <div class="col" >
          <div class="card">
              <img :src="item.prodUrl" alt="">
            <div class="card-body">
              <h5 class="card-title fw-bolder">{{ item.prodName }}</h5>
              <p class="card-text fw-bold">R{{ item.amount }}</p>
              <button @click="addToCart(item.prodID)">buy</button>
              <router-link @click="getSingle(item.prodID)" :to="{ name: 'product', params: { prodID: item.prodID }}" class="btn btn-dark">view more details</router-link>
            </div>
          </div>
        </div>
    </div>
</div>
 </div>
    
</template>
    
<script>

    export default {
      
        data(){
          
        },
        methods:{
        getSingle(prodID){
            this.$store.dispatch('getSingle', prodID)
        },
        addToCart(prodID){
            this.$store.dispatch('addToCart', prodID)
        },

        }, 
        computed:{
            getProducts(){
                this.$store.dispatch('getProducts')
            },    
        },
        mounted(){
            this.getProducts
        }
    
    }
    </script>
    
<style scoped>
img{
  height: 300px;
}

    
</style>
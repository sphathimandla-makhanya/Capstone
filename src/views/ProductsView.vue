<template>
    <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4" >
      <div v-for="item in $store.state.products" :key="item.prodID">
        <div class="col col-sm-12 cols-md-6 " >
          <div class="card">
              <img :src="item.prodUrl"  class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title fw-bolder">{{ item.prodName }}</h5>
              <p class="card-text fw-bold">R{{ item.amount }}</p>
              <button @click="addToCart(item.prodID)" v-if="$cookies.get('jwt')">buy</button>
              <!-- <button v-if="$cookies.get('jwt')" @click="addToCart(item.prodID)" class="btn btn-primary">Add to Cart</button> -->
              <button class="btn btn-primary" v-if="!$cookies.get('jwt')"><a class="dropdown-item text-black" href="login" to="/login">Login</a></button>
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
        addToCart(prodID) {
    this.$store.dispatch('addToCart', { prodID, quantity: 1 });
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


  
    
</style>
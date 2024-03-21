<template>
  <div>
    <div>
      <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4" >
        <div v-for="item in $store.state.products" :key="item.prodID">
          <div class="col" >
            <div class="card justify-content-center align-items-center">
                <img :src="item.prodUrl"  class="card-img-top" id="img" alt="">
              <div class="card-body">
                <h5 class="card-title fw-bolder">{{ item.prodName }}</h5>
                <p class="card-text fw-bold">R{{ item.amount }}</p>
                <router-link @click="getSingle(item.prodID)" :to="{ name: 'product', params: { prodID: item.prodID }}" class="btn btn-dark">view more details</router-link>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  </div>
    <div>
      <SpinnerComp/>
    </div>
  </div>
</template>
    
<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
    export default {
      components:{
        SpinnerComp
      },
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
.container{
  display: block;
}

#img{
  width: 350px;
  height: 350px;
}

</style>
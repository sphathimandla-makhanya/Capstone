<template>
      <div class="container">
        <h1>Products</h1>
        <div>
        <input class="mt-3 mb-4 me-2 w-50" type="search" placeholder="Search" aria-label="Search" @input="find()" v-model="search">
        <button class="btn1" @click="sortfunction()">Sort</button>
        </div>
        <div v-if="find().length>0">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" >
            <div v-for="item in find()" :key="item.prodID">
              <div class="col" >
                <div class="card">
                  <div class="card-body">
                    <img :src="item.prodUrl"  class="card-img-top" id="img" alt="">
                    <h5 class="card-title fw-bolder">{{ item.prodName }}</h5>
                    <p class="card-text fw-bold text-dark">R{{ item.amount }}</p>
                    <router-link v-if="$cookies.get('user')" @click="getSingle(item.prodID)" :to="{ name: 'product', params: { prodID: item.prodID }}" class="btn btn-dark">view more details</router-link>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div v-else>
        <SpinnerComp/>
      </div>
  </div>
</template>
    
<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
import sweet from 'sweetalert'
    export default {
      components:{
        SpinnerComp
      },
        data(){
          return{
            search:""
          }
        },
        methods:{
          find(){
      let item = this.$store.state.products
      let found = this.search 
      let res = item.filter(p=>{
        return p.prodName.toLowerCase().includes(found.toLowerCase())|| p.category.toLowerCase().includes(found.toLowerCase())
      })
  //     if(res.length===0){
  //       sweet({
  //     title: "Error",
  //     text: "Item not found",
  //   })
  // }
      console.log(res);
      return res
    },
    sortfunction(){
      let p = this.$store.state.products
        if (p) {
          p.sort((x, y) => x.amount - y.amount);
        }
    },
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
  }
  },
    mounted(){
      this.getProducts
      this.find()
  }
    
    }
    </script>
    
<style scoped>
.container{
  display: block;
}

/* #img{
  width: 370px;
  height: 370px;
} */

@media screen and (max-width: 370px){
  #img{
    height: 250px;
    width: 250px;
}
}
@media screen and (max-width: 400px){
  #img{
    height: 310px;
    width: 310px;
}
}
@media screen and (min-width: 768px){
  #img{
    height: 310px;
    width: 310px;
}
}
</style>
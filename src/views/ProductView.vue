<template>
    <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center" >
        <div v-for="item in $store.state.singleProd" :key="item.prodID">
            <div class="col" >
              <div class="card">
                  <img :src="item.prodUrl" alt="">
                <div class="card-body">
                  <h5 class="card-title fw-bolder">{{ item.prodName }}</h5>
                  <p class="card-text fw-bold">R{{ item.amount }}</p>
                  <p class="card-text">{{ item.category }}</p>
                  <p class="card-text">{{ item.details }}</p>
                  <button @click="addToCart(item.prodID)" v-if="$cookies.get('user')">buy</button>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        addToCart(prodID) {
    this.$store.dispatch('addToCart', { prodID, quantity: 1 });
  },
    },
    computed:{
        getSingle(){
            this.$store.dispatch('getSingle',this.$route.params.prodID)
        }    
    },
    mounted(){
        this.getSingle
    }

}
</script>

<style>
.card-text{
    color: gray;
}
img{
    height: 400px;
}

</style>
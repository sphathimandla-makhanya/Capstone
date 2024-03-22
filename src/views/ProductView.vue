<template>
    <div id="prod">
        <div class="container">
            <div class="card" style="width: 20rem;">
            <div v-for="item in $store.state.singleProd" :key="item.prodID">
                <div class="card-body">
                    <img :src="item.prodUrl" alt="">
                    <h5 class="card-title">{{ item.prodName }}</h5>
                    <p class="card-text">R{{ item.amount }}</p>
                    <p class="card-text">{{ item.category }}</p>
                    <p class="card-text">{{ item.details }}</p>
                </div>
                <div class="card-body">
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

<style scoped>
#prod{
  background-image: linear-gradient(to bottom,white, #1e1e70); /* #00bfff*/
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
img{
    height: 300px;
    width: 300px;
}
.card-text{
    color: black;
}

@media screen and (max-width: 350px){
    img{
    height: 250px;
    width: 250px;
}
}
</style>
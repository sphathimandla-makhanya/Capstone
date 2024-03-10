<template>
    <div class="home">
        <!-- <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Details</th>
                <th>Image</th>     
            </thead>
            <tbody v-for="item in $store.state.products" :key="item">
              <tr>
                <td>{{ item.prodID }}</td>
                <td>{{ item.prodName }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.details }}</td>
                <td>{{ item.category }}</td>
                <td><img :src="item.prodUrl" alt="" style="height: 50px;" ></td>
                <td><button @click="deleteProduct(item.prodID)">delete</button></td>
               
              </tr>
            </tbody>
        </table> -->
        
        <!-- <div class="card" style="width: 18rem;">
            <div v-for="item in $store.state.products" :key="item">
            <img :src="item.prodUrl" alt="" style="height: 50px;" >
            <div class="card-body">
            <h5 class="card-title">{{ item.prodName }}</h5>
            <p class="card-text">{{ item.amount }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
  </div>
</div> -->


<div class="row row-cols-1 row-cols-md-3 g-4" >
  <div v-for="item in $store.state.products" :key="item.prodID">
        <div class="col" >
          <div class="card">
              <img :src="item.prodUrl" alt="" style="height: 50px;" >
            <div class="card-body">
              <h5 class="card-title">{{ item.prodName }}</h5>
              <p class="card-text">{{ item.amount }}</p>
              <button @click="addToCart(item.prodID)">buy</button>
              <router-link @click="getSingle(item.prodID)" :to="{ name: 'product', params: { prodID: item.prodID }}" class="btn btn-dark">details</router-link>
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
    
    <style>
    
    </style>
<template>
<div class="container">
    <table>
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
    </table>
    <div>
         <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" placeholder="Name" data-name name="item name" id="item name" v-model="prodName">
        <input type="number" placeholder="quantity" data-description name="item name" id="item name" v-model="quantity">
        <input type="number" placeholder="amount" data-amount name="item name" id="item name" v-model="amount">
        <input type="text" placeholder="category" data-category name="item name" id="item name" v-model="category">
        <input type="text" placeholder="details" data-details name="item name" id="item name" v-model="details">
        <input type="text" placeholder="url" data-url name="item name" id="item name" v-model="prodUrl">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="postProduct">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>

    <!-- //USERS -->
   <UsersComp/>

  </div>

</template>

<script>
import UsersComp from '@/components/UsersComp.vue'
export default {
  name: 'AdminView',
  components: {
    UsersComp
  },
    data(){
      return {
        prodName: null,
        quantity: null,
        amount: null,
        category: null,
        details:null,
        prodUrl: null
      }
    },
    methods:{
      deleteProduct(prodID){
        this.$store.dispatch('deleteProduct', prodID )
      }
    },
    computed:{
        getProducts(){
            this.$store.dispatch('getProducts')
        },
        postProduct(){
          this.$store.dispatch('postProduct', this.$data) 
        },
    },
    mounted(){
        this.getProducts
      }

}
</script>

<style>

</style>
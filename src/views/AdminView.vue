<template>
  <div class="container">
    <div class="">
    <h1>Products Information</h1>
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
     <div>
      <table class="table table-striped table-hover">
         <thead>
             <th>ID</th>
             <th>Name</th>
             <th>Quantity</th>
             <th>Amount</th>
             <th>Category</th>
             <th>Details</th>
             <th>Image</th>     
         </thead>
         <tbody v-for="item in $store.state.products" :key="item.prodID">
           <tr>
             <td>{{ item.prodID }}</td>
             <td>{{ item.prodName }}</td>
             <td>{{ item.quantity }}</td>
             <td>{{ item.amount }}</td>
             <td>{{ item.details }}</td>
             <td>{{ item.category }}</td>
             <td><img :src="item.prodUrl" alt="" style="height: 50px;" ></td>
             <td> 
          <!-- Button trigger modal -->
 <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal2'+item.prodID">
   Edit
 </button>
 
 <!-- Modal -->
 <div class="modal fade" :id="'exampleModal2'+item.prodID" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
   <div class="modal-dialog">
     <div class="modal-content">
       <div class="modal-header">
         <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body">
         <input type="text" placeholder="Name1" data-name name="item name" id="item name" v-model="prodName">
         <input type="number" placeholder="quantity1" data-description name="item name" id="item name" v-model="quantity">
         <input type="number" placeholder="amount1" data-amount name="item name" id="item name" v-model="amount">
         <input type="text" placeholder="category1" data-category name="item name" id="item name" v-model="category">
         <input type="text" placeholder="details1" data-details name="item name" id="item name" v-model="details">
         <input type="text" placeholder="url1" data-url name="item name" id="item name" v-model="prodUrl">
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="button" class="btn btn-primary" @click= updateProduct(item.prodID)>Save changes</button>
       </div>
     </div>
   </div>
 </div>
   </td>
   <td><button @click="deleteProduct(item.prodID)">delete</button></td>   
           </tr>
         </tbody>
     </table>
     </div>
    
 
     <!-- Edit -->
    
 
     <!-- USERS -->
    <UsersComp/>
 
   </div>
  </div>

</template>

<script>
import sweet  from 'sweetalert'
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
        .then(()=>{
          sweet({
        title: "Are you sure?",
        text: "You will not be able to recover this file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: true,
      })
      .then(() => {
          // Reload the page after successful deletion
          // window.location.reload();
        })
        }
      )
      },
      updateProduct(prodID){
      let edit = {
        prodID:prodID,
        prodName:this.prodName,
        quantity: this.quantity,
        amount:this.amount,
        details: this.details,
        category: this.category,
        prodUrl: this.prodUrl
      }
      this.$store.dispatch('updateProduct', edit)
    }
    },
    computed:{
        getProducts(){
            this.$store.dispatch('getProducts')
        },
        postProduct(){
          this.$store.dispatch('postProduct', this.$data)
          .then(()=>{
          sweet({
        title: "Item was added successfully!",
        text: "Item was added successfully!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "thank you!",
        closeOnConfirm: true,
      })
      .then(() => {
          // Reload the page after successful deletion
          window.location.reload();
        })
        }
      ) 
        },
    },
    mounted(){
        this.getProducts
      }

}
</script>

<style>

</style>
<template>
    <div class="container">
        <table class="table table-bordered table-striped" id="table">
              <thead>
                  <th>OrderID</th>
                  <th>Quantity</th>
                  <th>UserID</th>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Details</th>     
                  <th>Image</th>     
              </thead>
              <tbody v-for="item in $store.state.cart" :key="item.orderID">
                <tr>
                  <td>{{ item.orderID }}</td>
                  <td>{{ item.cartQuantity }}</td> 
                  <td>{{ item.userID }}</td>
                  <td>{{ item.prodID }}</td>
                  <td>{{ item.prodName }}</td>
                  <td>{{ item.amount }}</td>
                  <td>{{ item.details }}</td>

                  <td><img :src="item.prodUrl" alt="" style="height: 50px;" ></td>
                  <!-- <td><input type="number" name="cartQuantity" id="cartQuantity" v-model="cartQuantity"></td> -->
                  <td><button @click="deleteCartItem(item.orderID)">delete</button></td>
                  <td><button @click="updateCart(item.orderID)">edit</button></td>
                </tr>
              </tbody>
          </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
          cartQuantity: null,
          userID: null,
          prodID: null

        }
    },
      computed:{
        getCartItems(){
            this.$store.dispatch('getCartItemByUser')
        } 
    },
    methods:{
      deleteCartItem(orderID){
        this.$store.dispatch('deleteCartItem', orderID )
      },
      // getSingleItem(orderID){
      //       this.$store.dispatch('getSingleItem', orderID)
      // },
      updateCart(orderID){
      let edit = {
        orderID:orderID,
        cartQuantity: this.cartQuantity
      }
      this.$store.dispatch('updateCart', edit)
    }
    },
    mounted(){
        this.getCartItems
    },
    // this.$store.dispatch('getOrdersbyUseID')
}
</script>

<style>
.container{
  width: 100%;
  overflow-x: auto;
}
</style>


 
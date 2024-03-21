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
          <td>
            <!-- Decrease Quantity Button -->
            <button @click="decreaseQuantity(item)" :disabled="item.cartQuantity <= 1">-</button>
            {{ item.cartQuantity }}
            <!-- Increase Quantity Button -->
            <button @click="increaseQuantity(item)">+</button>
          </td>
          <td>{{ item.userID }}</td>
          <td>{{ item.prodID }}</td>
          <td>{{ item.prodName }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.details }}</td>
          <td><img :src="item.prodUrl" alt="" style="height: 50px;" ></td>
          <td><button @click="deleteCartItem(item.orderID)">delete</button></td>
          <td><button @click="updateCart(item)">edit</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5"></td>
          <td colspan="2">Total:</td>
          <td>{{ totalAmount }}</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
     data(){
        return {
            userID:null,
            firstName: null,
            lastName:null,
            gender: null,
            userRole: null,
            emailAdd: null,
            userPass: null,
            userProfile:null
        }
    },


  computed:{
    totalAmount() {
      if (!this.$store.state.cart) return 0;
      return this.$store.state.cart.reduce((total, item) => total + item.amount * item.cartQuantity, 0);
    }
  },
  methods:{
    decreaseQuantity(item) {
      if (item.cartQuantity > 1) {
        item.cartQuantity--;
        this.updateCart(item);
      }
    },
    increaseQuantity(item) {
      item.cartQuantity++;
      this.updateCart(item);
    },
    deleteCartItem(orderID){
      this.$store.dispatch('deleteCartItem', orderID )
    },
    updateCart(item){
      this.$store.dispatch('updateCart', item)
    }
  },
  mounted(){
    this.$store.dispatch('getCartItemByUser');
  },
}
</script>

<style>
.container{
  width: 100%;
  overflow-x: auto;
}
</style>

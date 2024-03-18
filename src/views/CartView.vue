<template>
    <div>
        <table>
              <thead>
                  <th>orderID</th>
                  <th>Quantity</th>
                  <th>userID</th>
                  <th>prodID</th>
                  <th>prodName</th>
                  <th>Details</th>
                  <th>Image</th>     
              </thead>
              <tbody v-for="item in $store.state.cart" :key="item">
                <tr>
                  <td>{{ item.orderID }}</td>
                  <td>{{ item.quantity }}</td> 
                  <td>{{ item.userID }}</td>
                  <td>{{ item.prodID }}</td>
                  <td>{{ item.prodName }}</td>
                  <td>{{ item.amount }}</td>
                  <td><img :src="item.prodUrl" alt="" style="height: 50px;" ></td>
                  <td><input type="number" name="quantity" id="quantity" v-model="quantity"></td>
                  <td><button @click="deleteCartItem(item.orderID)">delete</button></td>
                  <button @click="updateCart(item.orderID)">edit</button>
                </tr>
              </tbody>
          </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
          quantity: null,
          userID: null,
          prodID: null

        }
    },
      computed:{
        getCartItems(){
            this.$store.dispatch('getCartItems')
        } 
    },
    methods:{
      deleteCartItem(orderID){
        this.$store.dispatch('deleteCartItem', orderID )
      },
      getSingleItem(orderID){
            this.$store.dispatch('getSingleItem', orderID)
      },
      updateCart(orderID){
      let edit = {
        orderID:orderID,
        quantity: this.quantity
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

</style>



 <!-- <template>
  <div class="cart">
    <div class="container">
      <h2>Your Cart</h2>
      <div v-if="cartItems.length === 0">
        <p>Your cart is empty</p>
      </div>
      <div v-else>
        <div v-for="item in cartItems" :key="item.orderID" class="cart-item">
          <p>{{ item.productName }}</p>
          <p>Quantity: {{ item.quantity }}</p>
          <p>Price: {{ item.price }}</p>
          <button @click="removeFromCart(item.orderID)">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [],
    };
  },
  methods: {
    removeFromCart(orderID) {
      // Call action to remove item from cart
      this.$store.dispatch('deleteCartItem', orderID);
    },
  },
  computed: {
    getCartItems() {
      return this.$store.state.cart; // Return the cart items directly
    },
  },
  created() {
    // Fetch cart items when the component is created
    this.$store.dispatch('getCartItems');
  },
};
</script> -->

<style scoped>
/* Add your styles here */
</style>


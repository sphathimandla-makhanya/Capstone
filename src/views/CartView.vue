<template>
    <div>
        <table>
              <thead>
                  <th>ID</th>
                  <th>Quantity</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Details</th>
                  <!-- <th>Image</th>      -->
              </thead>
              <tbody v-for="item in $store.state.cart" :key="item.orderID">
                <tr>
                  <td>{{ item.orderID }}</td>
                  <td>{{ item.quantity }}</td> 
                  <td>{{ item.userID }}</td>
                  <td>{{ item.prodID }}</td>
                  <td>{{ item.prodName }}</td>
                  <td>{{ item.amount }}</td>
                  <!-- <td><img :src="item.prodUrl" alt="" style="height: 50px;" ></td> -->
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
    }
}
</script>

<style>

</style>
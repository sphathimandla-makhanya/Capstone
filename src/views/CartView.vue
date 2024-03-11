<template>
    <div>
        <table>
              <thead>
                  <th>ID</th>
                  <th>Quantity</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <!-- <th>Details</th>
                  <th>Image</th>      -->
              </thead>
              <tbody v-for="item in $store.state.cart" :key="item.orderID">
                <tr>
                  <td>{{ item.orderID }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>{{ item.userID }}</td>
                  <td>{{ item.prodID }}</td>
                  <td>{{ item.prodName }}</td>
                  <!-- <td>{{ item.amount }}</td> -->
                  <!-- <td><img :src="item.prodUrl" alt="" style="height: 50px;" ></td> -->
                  <td><button @click="deleteCartItem(item.orderID)">delete</button></td>
                 
                </tr>
              </tbody>
          </table>
    </div>
</template>

<script>
export default {
    computed:{
        getCartItems(){
            this.$store.dispatch('getCartItems')
        }    
    },
    methods:{
      deleteCartItem(orderID){
        this.$store.dispatch('deleteCartItem', orderID )
      }
    },
    mounted(){
        this.getCartItems
    }
}
</script>

<style>

</style>
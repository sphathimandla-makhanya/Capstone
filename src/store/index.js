
import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router/index.js'
import {cookies} from '../main.js'
const dbUrl= 'http://localhost:4000'
// const dbUrl= 'https://capstone-w7wq.onrender.com'
axios.defaults.withCredentials = true

export default createStore({
  state: {
    products: null,
    singleProd: null,
    users: null,
    loggedIn: null,
    cart: null,
    cartItem: null
  },
  getters: {
  },
  mutations: {
    setProducts(state,payload){
      state.products=payload
    },
    setSingleProd(state,payload){
      state.singleProd=payload
    },
    setUsers(state,payload){
      state.users=payload
    }, 
    setLogged(state, payload){
      state.loggedIn = payload
    }, 
    setCart(state,payload){
      state.cart=payload
    },
    setCartItem(state,payload){
      state.cartItem=payload
    }
  },
  actions: {
   async getProducts({commit}){
    let {data} = await axios.get(dbUrl+'/products')
    console.log(data);
    commit('setProducts',data)
   },
   async getSingle({commit}, prodID){
    let {data} = await axios.get(dbUrl+'/products/'+prodID)
    console.log(data);
    commit('setSingleProd',data)
   },
   async postProduct(add, newItem){
    await axios.post(dbUrl+'/products', newItem)
    window.location.reload()
   },
   async updateProduct({commit}, update){
    await axios.patch(dbUrl+'/products/' + update.prodID, update)
    window.location.reload()
   },
   async deleteProduct({commit}, prodID){
      await axios.delete(dbUrl+`/products/${prodID}`)
      window.location.reload()
  },

  //USERS
  async getUsers({commit}){
    let {data} = await axios.get(dbUrl+'/users')
    console.log(data);
    commit('setUsers',data)
   },
   async postUser(add, newUser){
    await axios.post(dbUrl+'/users', newUser)
    await router.push('/login')
    alert('Account created successfully!!!')
    window.location.reload()
   },
   async updateUser({commit}, update){
    await axios.patch(dbUrl+'/users/' + update.userID, update)
    window.location.reload()
   },
   async deleteUser({commit}, userID){
    await axios.delete(dbUrl+`/users/${userID}`)
    window.location.reload()
   },

  //  async checkUser({commit}, currentUser){
  //   //console.log(newUser);
  //     let {data}=await axios.post(dbUrl+'/login', currentUser);
  //     if(data.token !== undefined){
  //       $cookies.set('jwt',data.token) //data.token is the value of the token being sent from axios
  //       alert(data.msg)
  //       await router.push('/') // to redirect the page after logging/signing up  
  //     }else{
  //       alert(data.msg)
  //       $cookies.remove('jwt')
  //     }
  //     commit('setLogged',true)
  //     window.location.reload()
  // },

  async checkUser({ commit }, currentUser) {
    try {
      const { data } = await axios.post(dbUrl + '/login', currentUser);
      if (data.token !== undefined) {
        $cookies.set('jwt', data.token); // Set the JWT token
        commit('setLogged', true);
        
        // Check the user's role
        const userRole = await axios.get(dbUrl + '/users', {
          headers: {
            Authorization: `${data.token}`
          }
        });
  
        //if user is admin, redirect to admin otherwise take user to home page
        if (userRole.data.payload === 'admin') {
          alert('Hello admin');
          await router.push('/admin'); 
        } else {
          alert('Hello user');
          await router.push('/'); 
        }
      } else {
        alert(data.msg);
        $cookies.remove('jwt');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  },
  
  async logout(context){
  let cookies = $cookies.keys()
  console.log(cookies)
  $cookies.remove('jwt')  //deleting from frontend
  await router.push('/')  
  window.location.reload()
  // let {data}= await axios.delete(baseUrl+'/logout')  //deleting from backend
  // alert(data.msg)
},










//CART

  // async addToCart({ commit, state }, prodID) {
  //   try {
  //     const data = {
  //     userID:state.users, prodID: prodID,quantity: 1
  //     };
  //     await axios.post(dbUrl+'/cart', data);
  //     commit('setCart', prodID);
  //     console.log("Item added to cart");
  //   } catch (error) {
  //     console.error('Error adding to cart:', error);
  //   }
  // }

  async addToCart({ commit, state }, prodID) {
    try {
      const data = {
      userID:state.users, prodID: prodID,quantity: 1 
      };
      await axios.post(dbUrl+'/cart', data);
      commit('setCart', prodID);
      console.log("Item added to cart");
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  },
  async getCartItems({commit}){
    let {data} = await axios.get(dbUrl+'/cart')
    console.log(data);
    commit('setCart',data)
  },
  async getSingleItem({commit}, orderID){
    let {data} = await axios.get(dbUrl+'/cart/'+orderID)
    console.log(data);
    commit('setCartItem',data)
   },
  async deleteCartItem({commit}, orderID){
    await axios.delete(dbUrl+`/cart/${orderID}`)
    window.location.reload()
}, 
  async updateCart({commit}, update){
  await axios.patch(dbUrl+'/cart/' + update.orderID, update)
  window.location.reload()
 }


  },
  modules: {
    
  }
})

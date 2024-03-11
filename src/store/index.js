
import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router/index.js'
import {cookies} from '../main.js'
const dbUrl= 'http://localhost:9000'
// const dbUrl= 'https://capstone-w7wq.onrender.com'
axios.defaults.withCredentials = true

export default createStore({
  state: {
    products: null,
    singleProd: null,
    users: null,
    loggedIn: null,
    cart: null
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
      state.loggedIn=payload
    }, 
    setCart(state,payload){
      state.cart=payload
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
   async deleteProduct({commit}, prodID){
      await axios.delete(dbUrl+`/products/${prodID}`)
      window.location.reload()
  },
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
   async checkUser({commit}, currentUser){
    //console.log(newUser);
      let {data}=await axios.post(dbUrl+'/login/', currentUser);
      $cookies.set('token',data.token) //data.token is the value of the token being sent from axios
      alert(data.msg)
      await router.push('/') // to redirect the page after logging/signing up  
      commit('setLogged',true)
      window.location.reload()
    
  },
  async logout(context){
    let cookies = $cookies.keys()
    console.log(cookies)
    $cookies.remove('jwt')  //deleting from frontend
    $cookies.remove('token')
    await router.push('/')  //deleting from frontend
    window.location.reload()
    // let {data}= await axios.delete(baseUrl+'/logout')  //deleting from backend
    // alert(data.msg)
  },
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
  async deleteCartItem({commit}, orderID){
    await axios.delete(dbUrl+`/cart/${orderID}`)
    window.location.reload()
},

  },
  modules: {
    
  }
})

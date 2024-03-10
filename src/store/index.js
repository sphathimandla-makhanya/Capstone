import cookies from 'vue-cookies'
import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router/index.js'

const dbUrl= 'http://localhost:9000'

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
    let {data} = await axios.get(dbUrl+'/products', prodID)
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
    alert('Account created successfully!!!')
    // window.location.reload()
   },
   async checkUser({commit}, currentUser){
    //console.log(newUser);
    let {data}=await axios.post(dbUrl+'/login', currentUser);
    $cookies.set('jwt',data.token) //data.token is the value of the token being sent from axios
    alert('you logged in')
    await router.push('/') // to redirect the page after logging/signing up  
    commit('setLogged',true)
    window.location.reload()
  },
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
  }
  },
  modules: {
    
  }
})

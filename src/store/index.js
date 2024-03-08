import { createStore } from 'vuex'
import axios from 'axios'

const dbUrl= 'http://localhost:4000'

export default createStore({
  state: {
    products: null,
    Users: null
  },
  getters: {
  },
  mutations: {
    setProducts(state,payload){
      state.products=payload
    },
    setUsers(state, payload){
      state.Users=payload
    }
  },
  actions: {
   async getProducts({commit}){
    let {data} = await axios.get(dbUrl+'/products')
    console.log(data);
    commit('setProducts',data)
   },
   async postProduct(add, newItem){
    await axios.post(dbUrl+'/products', newItem)
    window.location.reload()
   },
   async deleteProduct({commit}, prodID){
      await axios.delete(dbUrl+`/products/${prodID}`)
      window.location.reload()
  },
  
  //Users
  async getUsers({commit}){
    let {data} = await axios.get(dbUrl+'/users')
    console.log(data);
    commit('setUsers',data)
   },
   async postUser(add, newItem){
    await axios.post(dbUrl+'/users', newItem)
    window.location.reload()
   }
  },
  modules: {
    
  }
})

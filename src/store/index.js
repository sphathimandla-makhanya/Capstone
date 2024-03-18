
import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router/index.js'
import VueCookies from 'vue-cookies'
import sweet from 'sweetalert';
const dbUrl= 'http://localhost:4000'
// const dbUrl= 'https://capstone-w7wq.onrender.com'
axios.defaults.withCredentials = true

export default createStore({
  state: {
    products: null,
    singleProd: null,
    users: null,
    user: null,
    loggedIn: false,
    cart: [],
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
    setUser(state,user){
      state.user=user
      state.loggedIn=!!user
    }, 
    setLogged(state, payload){
      state.loggedIn = payload
    }, 
    setCart(state,payload){
      state.cart=payload
    },
    setCartItem(state,payload){
      state.cartItem=payload
    },
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
    // window.location.reload()
   },
   async updateProduct({commit}, update){
    await axios.patch(dbUrl+'/products/' + update.prodID, update)
    // window.location.reload()
   },
   async deleteProduct({commit}, prodID){
      await axios.delete(dbUrl+`/products/${prodID}`)
      // window.location.reload()
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
    // window.location.reload()
   },

   async checkUser(context, userLogin) {
    try {
      let { data } = await axios.post(dbUrl + '/login', userLogin);
      const { user, token } = data;
      // Save user information and token in cookies
      VueCookies.set('user', JSON.stringify(user));
      VueCookies.set('jwt', token);
      // Update Vuex store with user info
      context.commit('setUser', user);
      sweet('Success', 'Login successful!', 'success');
      await router.push('/');
    } catch (error) {
      console.error('Error logging in:', error);
      sweet('Error', 'Failed to log in', 'error');
    }
  },
  async logout(context) {
    try {
      VueCookies.remove('user');
      VueCookies.remove('jwt');
      context.commit('setUser', null);
      sweet('Success', 'Logout successful!', 'success');
      window.location.reload();
      await router.push('/');
    } catch (error) {
      console.error('Error logging out:', error);
      sweet('Error', 'Failed to log out', 'error');
    }
  },

  async addToCart({ state }, { prodID, quantity }) {
    try {
      if (!state.loggedIn) {
        console.error('User not logged in');
        return;
      }
      const token = VueCookies.get('jwt');
      // Only add the product to the cart if a quantity is provided
      if (!quantity || quantity <= 0) {
        console.error('Invalid quantity provided');
        return;
      }
      // Add the product to the cart database table
      await axios.post(
        `${dbUrl}/cart`,
        { prodID, userID: state.user.userID, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      sweet('Success', 'Product added to cart successfully!', 'success');
    } catch (error) {
      console.error('Error adding product to cart:', error.message);
      console.error('Error details:', error.response);
      sweet('Error', 'Failed to add product to cart', 'error');
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


  }
},
)

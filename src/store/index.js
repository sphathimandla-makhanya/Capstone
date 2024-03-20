
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
    cart: null,
    cartItem: null,
    userRole: null,

    // token: VueCookies.get('jwt') || null,
    // loggedIn: !!VueCookies.get('jwt')
  },
  getters: {
    isLoggedIn: state=> !!state.token,
    currentUser:state =>state.user
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
    setUserRole(state, userRole) { // Mutation to set userRole
      state.userRole = userRole;
    },
    setToken(state, token) { // Mutation to set token
      state.token = token;
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
    // window.location.reload()
   },
   async updateProduct({commit}, update){
    await axios.patch(dbUrl+'/products/' + update.prodID, update)
    window.location.reload()
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
   async getSingleUser({commit}, userID){
    let {data} = await axios.get(dbUrl+'/users/'+userID)
    console.log(data);
    commit('setUser',data)
   },
   async postUser(add, newUser){
    await axios.post(dbUrl+'/users', newUser)
    await router.push('/login')
    alert('Account created successfully!!!')
    window.location.reload()
   },
   async updateUser({commit}, update){
    await axios.patch(dbUrl+'/users/' + update.userID, update)
    sweet('Success', ' successful!', 'success');
    window.location.reload()
   },
   async deleteUser({commit}, userID){
    await axios.delete(dbUrl+`/users/${userID}`)
    // window.location.reload()
   },

   async checkUser(context, userLogin) {
    try {
      let { data } = await axios.post(dbUrl + '/login', userLogin);
      
      // Extract token and user from the response data
      const { token, user } = data;
      
      // Save token and user in cookies
      VueCookies.set('jwt', token, { httpOnly: true, expires: 7, path: '/', secure: false });
      VueCookies.set('user', JSON.stringify(user));
     
      
      // Extract userRole array from the user object
      const [userRoleArray] = user.userRole;
      
      // Save userRole array in its own cookie
      VueCookies.set('userRole', JSON.stringify(userRoleArray.userRole));
      VueCookies.set('userID', JSON.stringify(userRoleArray.userID));
      
      // Update Vuex store with user info
      context.commit('setUser', user);
      context.commit('setToken', token);
      
      sweet('Success', 'Login successful!', 'success');
      await router.push('/');
    } catch (error) {
      console.error('Error logging in:', error);
      sweet('Error', 'Failed to log in', 'error');
    }
  }
  
  ,
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

  async addToCart({ state }, { prodID, cartQauntity=1 }) {    //setting the a default quantity in the cart to be 1
    try {
     const userID=VueCookies.get('userID');
     if(!userID){
      console.error('user id not found');
      return;
     }
      // 
      // Only add the product to the cart if a cartQauntity is provided
      if (!cartQauntity || cartQauntity <= 0) {
        console.error('Invalid cartQauntity provided');
        return;
      }
      // Add the product to the cart database table
      await axios.post(
        dbUrl+'/cart',
        { prodID, userID, cartQauntity }
      );
      sweet('Success', 'Product added to cart successfully!', 'success');
    } catch (error) {
      console.error('Error adding product to cart:', error.message);
      console.error('Error details:', error.response);
      sweet('Error', 'Failed to add product to cart', 'error');
    }
  }, 

  // async getCartItems({commit}){
  //   let {data} = await axios.get(dbUrl+'/cart')
  //   console.log(data);
  //   commit('setCart',data)
  // },

  async getCartItems({ commit }) {
    try {
      let { data } = await axios.get(dbUrl + '/cart');
      commit('setCartItem', data);
    } catch (error) {
      console.error('Error getting cart items:', error);
      sweet('Error', 'Failed to get cart items', 'error');
    }
  },
  async getCartItemByUser({commit}){
    let {data} = await axios.get(dbUrl+'/cart/user')
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

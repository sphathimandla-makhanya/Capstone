
import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router/index.js'
import VueCookies from 'vue-cookies'
import sweet from 'sweetalert';
// const dbUrl= 'http://localhost:4000'
const dbUrl= 'https://capstone-w7wq.onrender.com'
axios.defaults.withCredentials = true

export default createStore({
  state: {
    products: [],
    singleProd: [],
    users: [],
    user: [],
    loggedIn: false,
    cart: [],
    cartItem: [],
    userRole: [],
    token: VueCookies.get('jwt') || [],
    loggedIn: !!VueCookies.get('jwt')
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
    setUserRole(state, userRole) { 
      state.userRole = userRole;
    },
    setToken(state, token) { 
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
    sweet('Success', 'Added successfully!', 'success')
    window.location.reload()
   },
   async updateProduct({commit}, update){
    await axios.patch(dbUrl+'/products/' + update.prodID, update)
    sweet('Success', 'Updated successfully!', 'success')
    window.location.reload()
   },
   async deleteProduct({commit}, prodID){
      await axios.delete(dbUrl+`/products/${prodID}`)
      sweet('Success', 'Deleted successfully!', 'success')
      window.location.reload()
  },

  //USERS
  async getUsers({commit}){
    let {data} = await axios.get(dbUrl+'/users')
    console.log(data);
    commit('setUsers',data)
   },
   async getSingleUser({commit}, userID){
    let {data} = await axios.get(dbUrl+'/users/'+userID);
    console.log(data);
    commit('setUser',data)
  },
   async postUser(add, newUser){
    await axios.post(dbUrl+'/users', newUser)
    await router.push('/login')
    sweet('Account created successfully!!!')
    window.location.reload()
   },
   async updateUser({commit}, update){
    try{
      await axios.patch(dbUrl+'/users/' + update.userID, update)
      sweet('Success', 'Updated successfully!', 'success')
      window.location.reload()
    }catch (error) {
      console.error('Error updating user details:', error);
      sweet('Error', 'Failed to update user details', 'error');
    }
   },

   async deleteUser({commit}, userID){
    try{
      await axios.delete(dbUrl+`/users/${userID}`)
      sweet('Success', 'Deleted successfully!', 'success')
      window.location.reload()
    }catch (error) {
      console.error('Error deleting user:', error);
      sweet('Error', 'Failed to delete user', 'error');
    }
   },

   async checkUser(context, userLogin) {
    try {
      let { data } = await axios.post(dbUrl + '/login', userLogin);
      
      // Destructuring token and user
      const { token, user } = data;
      
      // sets token and user into cookies
      VueCookies.set('jwt', token, { httpOnly: true, expires: 7});
      context.commit('setToken', token);
      VueCookies.set('user', JSON.stringify(user));
     
      
      // Destructuring user role array to access user role property
      const [userRoleArray] = user.userRole;
      
      // Sets userRole and userID into cookies
      VueCookies.set('userRole',userRoleArray.userRole);
      VueCookies.set('userID', JSON.stringify(userRoleArray.userID));
      
      context.commit('setUser', user);
      
      sweet('Success', 'Login successful!', 'success');
      await router.push('/');
      await window.location.reload()
    } catch (error) {
      console.error('Error logging in:', error);
      sweet('Error', 'Failed to log in', 'error');
    }
  },

  async logout(context) {
    try {
      VueCookies.remove('jwt');
      VueCookies.remove('user');
      VueCookies.remove('userRole');
      VueCookies.remove('userID');
      context.commit('setUser', null);
      
      sweet('Success', 'Logout successful!', 'success');
      window.location.reload();
      await router.push('/');
    } catch (error) {
      console.error('Error logging out:', error);
      sweet('Error', 'Failed to log out', 'error');
    }
  },

  async addToCart({ state }, { prodID, cartQauntity=1 }) {    //default cart quantity 
    try {
     const userID=VueCookies.get('userID');
     if(!userID){
      console.error('User id not found');
      return;
     }
      // Ensures that cart qauntity is provided
      if (!cartQauntity || cartQauntity <= 0) {
        console.error('Cart qauntity must be greater than zero');
        return;
      }
      await axios.post(
        dbUrl+'/cart',
        { prodID, userID, cartQauntity }
      );
      sweet('Success', 'Product added to cart successfully!', 'success');
    } catch (error) {
      console.error('Error adding product to cart:', error.message);
      sweet('Error', 'Failed to add product to cart', 'error');
    }
  }, 

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
    try{
      let {data} = await axios.get(dbUrl+'/cart/user')
    console.log(data);
    commit('setCart',data)
    }
   catch (error) {
    console.error('Error getting cart items:', error);
    sweet('Error', 'Failed to get cart items', 'error');
  }
   },

  async getSingleItem({commit}, orderID){
    try{
      let {data} = await axios.get(dbUrl+'/cart/'+orderID)
      console.log(data);
      commit('setCartItem',data)
    }catch (error) {
      console.error('Error getting cart item:', error);
      sweet('Error', 'Failed to get cart item', 'error');
    }
   },

  async deleteCartItem({commit}, orderID){
    try{
      await axios.delete(dbUrl+'/cart/'+orderID)
      sweet('Success', 'Login successful!', 'success')
      window.location.reload()
    }catch (error) {
      console.error('Error deleting:', error);
      sweet('Error', 'Failed to delete cart item', 'error');
    }
}, 

  async updateCart({commit}, update){
    try{
      await axios.patch(dbUrl+'/cart/' + update.prodID, update)
      window.location.reload()
    }catch (error) {
      console.error('Error updating cart item:', error);
      sweet('Error', 'Failed to update cart item', 'error');
    }
 },
 async clearCart({ commit }, userID) {
  await axios.delete(dbUrl + "/cart/delete/" + userID);
},
  }
}
)

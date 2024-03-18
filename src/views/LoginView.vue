<template>
  <div id="login">
    <div class="container pt-5">
    <div class="form-container">
	<p class="title">Login</p>
	<!-- <form class="form"> -->
		<div class="input-group">
			<label for="emailAdd">Username</label>
			<input type="email" name="emailAdd" id="emailAdd" placeholder="user@gmail.com" required v-model="emailAdd">
		</div>
		<div class="input-group">
			<label for="password">Password</label>
			<input type="password" name="password" id="userPass" placeholder="Password" required v-model="userPass">
			<div class="forgot">
				<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
			</div>
		</div>
		<button class="sign" @click="login()">login</button>
	<!-- </form> -->
	<p class="signup">Don't have an account?
    
		<a rel="noopener noreferrer" href="" class=""><router-link to="/signup">Sign Up</router-link></a>
	</p>
</div>
  </div>
  </div>
</template>

<script>

export default {
data(){
    return{
        emailAdd: '',
        userPass: ''
    }
}, 
// computed:{
//     login(){
//         this.$store.dispatch('checkUser',this.$data)
//     }
// }

methods: {
    login() {
      if (this.emailAdd && this.userPass) {
        // Perform login action with provided credentials
        this.$store.dispatch('checkUser', { emailAdd: this.emailAdd, userPass: this.userPass });
      } else {
        // Handle case when email or password is missing
        console.log("Please provide email and password");
      }
    }
      
}
}
</script>

<style>
#login p{
  color: rgba(17, 24, 39, 1);
}
#login{
  background-image: linear-gradient(to bottom,white, #1e1e70); /* #00bfff*/
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:2rem ;
}
.form-container {
  width: 320px;
  border-radius: 0.75rem;
  border: solid;
  background-color: transparent;
  padding: 2rem;
  color: rgba(17, 24, 39, 1);
  /* color: rgba(243, 244, 246, 1); */
}

.title {
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.input-group {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-group label {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
}

.input-group input {
  width: 100%;
  /* border-radius: 0.375rem; */
  outline: 0;
  background-color: transparent;
  padding: 0.75rem 1rem;
  color: rgba(243, 244, 246, 1);
}

.forgot {
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175,1);
  margin: 8px 0 14px 0;
}

.forgot a,.signup a {
  color: rgba(243, 244, 246, 1);
  text-decoration: none;
  font-size: 14px;
}

.forgot a:hover, .signup a:hover {
  text-decoration: underline rgba(167, 139, 250, 1);
}

.sign {
  display: block;
  width: 100%;
  background-color: rgba(167, 139, 250, 1);
  padding: 0.75rem;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
}

.line {
  height: 1px;
  flex: 1 1 0%;
  background-color: rgba(55, 65, 81, 1);
}

.signup {
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175, 1);
}

</style>
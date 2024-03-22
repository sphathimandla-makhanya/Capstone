<template>
    <div class="contacts">
      <h1>Contacts</h1>
      <div class="container">
        <form action="https://formspree.io/f/mnqkwpdj" method="POST" target="_blank" class="row g-2" @submit.prevent="reloadForm()">
        <div class="col-md-6">
            <label for="firstName" class="form-label">First Name:</label>
            <input type="text" class="form-control" id="firstName" name="firstName" required v-model="firstName">
        </div>
        <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name:</label>
            <input type="text" class="form-control" id="lastName" name="lastName" required v-model="lastName">
        </div>
        <div class="col-12">
            <label for="emailAddress" class="form-label">Email Address:</label>
            <input type="email" class="form-control" id="emailAddress" name="emailAddress" placeholder="example@gmail.com" required v-model="emailAddress">
        </div>
        <div class="col-12">
            <label for="message" class="form-label">Message:</label>
            <textarea id="message" class="form-control" name="message" cols="30" rows="3" required v-model="message"></textarea>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-success">Submit</button>
        </div>
    </form>     
      </div>
      <div class="container d-sm-block d-md-flex">
        <div class="col">
          <div class="row">
          <table class="table table-striped mt-2">
            <tbody>
              <tr>
                <th scope="row"><img id="contactImg" src="https://i.ibb.co/nMSXX23/126509.png"></th>
                <td class="text-white">0603364154</td>
              </tr>
              <tr>
                <th scope="row"><img id="contactImg" src="https://i.ibb.co/WBdLH3z/646094.png"></th>
                <td >makhanyasm11@gmail.com</td>
              </tr>
              <tr>
                <th scope="row"><img id="contactImg" src="https://i.ibb.co/hYqLrkX/9077975.png"></th>
                <td class="text-white">33 Winnie Mandela street, Langa, 7455</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.6160810874817!2d18.536604475340717!3d-33.951001223320624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b45f2048113%3A0x9d5bc1789bb86203!2s33%20Winnie%20Mandela%20St%2C%20Langa%2C%20Cape%20Town%2C%207456!5e0!3m2!1sen!2sza!4v1704919441818!5m2!1sen!2sza" width="250" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        </div>
          </div>
      </div><br>
    </div>
  
  </template>
  
  <script>
  export default {
    data(){
     return{
      firstName:"",
      lastName:"",
      emailAddress:"",
      message:""
     }
    },methods:{
      reloadForm(){
      alert("Form submitted"),
      this.firstName="",
      this.lastName="",
      this.emailAddress="",
      this.message=""
      }
    }
  }
  </script>
  
  <style>
  h1{
    font-family: 'Rye', serif;
  }
  .contacts{
    background-image: linear-gradient(to bottom,white, #1e1e70); /* #00bfff*/
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
  tr td{
    color: aliceblue;
  }

  #contactImg{
    height: 20px;
  }
  </style>
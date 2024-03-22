<template>
  <div>
    <h1>Users Information</h1>
    <div class="scroll">

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal5">
    Add User
  </button>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Enter user details</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input type="text" placeholder="firstName" data-name name="item name" id="item name" v-model="firstName">
          <input type="text" placeholder="lastName" data-description name="lastName" id="lastName" v-model="lastName">
          <input type="text" placeholder="gender" data-amount name="gender" id="gender" v-model="gender">
          <input type="text" placeholder="userRole" data-category name=" userRole" id="userRole" v-model="userRole">
          <input type="text" placeholder="emailAdd" data-emailAdd name="item name" id="item name" v-model="emailAdd">
          <input type="text" placeholder="userPass" data-userPass name="item name" id="item name" v-model="userPass">
          <input type="text" placeholder="userProfile" data-userPass name="item name" id="item name" v-model="userProfile">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click= "postUser">Save changes</button>
        </div>
      </div>
    </div>
  </div>

      <table class="table table table-striped table-hover">
          <thead>
              <!-- <th>ID</th> -->
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Role</th>
              <th>email Address</th>
              <!-- <th>Password</th>      -->
              <!-- <th>Profile</th>      -->
  
          </thead>
          <tbody v-for="user in $store.state.users" :key="user.userID">
            <tr>
              <!-- <td>{{ user.userID }}</td> -->
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.gender }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.emailAdd }}</td>
              <!-- <td>{{ user.userPass }}</td> -->
              <!-- <td><img :src="userProfile" alt="" style="height: 50px;" ></td> -->
              <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal3'+user.userID">
    Edit
  </button>
  <!-- Modal -->
  <div class="modal fade" :id="'exampleModal3'+user.userID" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit user details</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input type="text" placeholder="firstName" data-name name="item name" id="item name" v-model="firstName">
          <input type="text" placeholder="lastName" data-description name="lastName" id="lastName" v-model="lastName">
          <input type="text" placeholder="gender" data-amount name="gender" id="gender" v-model="gender">
          <input type="text" placeholder="userRole" data-category name=" userRole" id="userRole" v-model="userRole">
          <input type="text" placeholder="emailAdd" data-emailAdd name="item name" id="item name" v-model="emailAdd">
          <input type="text" placeholder="userPass" data-userPass name="item name" id="item name" v-model="userPass">
          <input type="text" placeholder="userProfile" data-userPass name="item name" id="item name" v-model="userProfile">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click= updateUser(user.userID)>Save changes</button>
        </div>
      </div>
    </div>
  </div></td>
              <td><button @click="deleteUser(user.userID)" class="btn bg-danger text-white">Delete</button></td>
              </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import sweet from 'sweetalert'
export default {
  data(){
        return {
            userID:null,
            firstName: null,
            lastName:null,
            gender: null,
            userRole: null,
            emailAdd: null,
            userPass: null,
            userProfile:null
        }
    },methods:{
        deleteUser(userID){
          this.$store.dispatch('deleteUser', userID )
          .then(()=>{
          sweet({
        title: "Are you sure?",
        text: "You will not be able to recover this file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: true,
      })
      .then(() => {
          // Reload the page after successful deletion
          window.location.reload();
        })
        }
      )}
        ,
      updateUser(userID){
        let edit= {
          userID:userID,
          firstName:this.firstName,
          lastName:this.lastName,
          gender:this.gender,
          userRole:this.userRole,
          emailAdd:this.emailAdd,
          userPass:this.userPass,
          userProfile:this.userProfile
        }
         this.$store.dispatch('updateUser', edit)
      }
    },
    computed:{
        getUsers(){
            this.$store.dispatch('getUsers')
        },
        postUser(){
          this.$store.dispatch('postUser', this.$data)
        }
    },
    mounted(){
        this.getUsers
    }

}
</script>

<style>
.scroll{
  width: 100%;
  overflow-x: auto;
}
</style>
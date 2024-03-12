<template>
  <div>
    <table>
        <thead>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Role</th>
            <th>email Address</th>
            <!-- <th>Password</th>     
            <th>Profile</th>      -->

        </thead>
        <tbody v-for="user in $store.state.users" :key="user.userID">
          <tr>
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.emailAdd }}</td>
            <!-- <td>{{ user.userPass }}</td> -->
            <!-- <td><img :src="userProfile" alt="" style="height: 50px;" ></td> -->
            <td><button @click="deleteUser(user.userID)">delete</button></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
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
        }
    },
    computed:{
        getUsers(){
            this.$store.dispatch('getUsers')
        }
    },
    mounted(){
        this.getUsers
    }

}
</script>

<style>

</style>
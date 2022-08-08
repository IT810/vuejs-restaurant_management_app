<template>
    <Header></Header>
    <h1>Hello {{userName}}, Welcome to HomePage.</h1>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in restaurants" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.contact}}</td>
                <td>{{item.address}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name: "HomePage",
    data(){
        return{
            userName:'',
            restaurants:[]
        }
    },
    async mounted() {
        // Check if user do not login, return sign up but not homepage. 
        let user = await localStorage.getItem('user-info');
        this.userName = JSON.parse(user).name;
        if (user == null) {
            this.$router.push({ name: "Login" });
        }

        let result = await axios.get('http://localhost:3001/restaurants');
        this.restaurants = result.data;
    },
    components: { Header }
}
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  padding: 20px;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
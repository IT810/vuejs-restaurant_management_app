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
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in restaurants" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.contact}}</td>
                <td>{{item.address}}</td>
                <td>
                    <router-link :to="'/update/'+item.id">Update</router-link>
                    <button @click="deleteRestaurant(item.id)">Delete</button>
                </td>
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
    methods:{
        deleteRestaurant: async function(id){
            try{
                var result = await axios.delete('http://localhost:3001/restaurants/'+id);
                if(result.status == 200){
                    this.loadData();
                }
                console.warn("result", result);
            }
            catch(e){
                console.log(e);
            }
        },
        loadData: async function(){
            // Check if user do not login, return sign up but not homepage. 
            let user = await localStorage.getItem('user-info');
            if (user == null) {
                this.$router.push({ name: 'Login' });
            }
            else{
                this.userName = JSON.parse(user).name;
                let result = await axios.get('http://localhost:3001/restaurants');
                this.restaurants = result.data;
            }
        }
    },
    async created() {
        this.loadData();
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
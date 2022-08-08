<template>
    <Header></Header>
    <h1>Hello User, Welcome to Add Restaurant Page.</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="Restaurant.name" />
        <input type="text" name="address" placeholder="Enter Address" v-model="Restaurant.address"/>
        <input type="text" name="contact" placeholder="Enter Contact" v-model="Restaurant.contact"/>
        <button type="button" @click="AddRestaurant()">Add New Restaurant</button>
    </form>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue'

export default {
    name: "AddRestaurant",
    data(){
        return{
            Restaurant:{
                name:'',
                contact:'',
                address:''
            }
        }
    },
    methods:{
        AddRestaurant: async function(){
            try{
                console.warn(this.Restaurant);
                var result = await axios.post('http://localhost:3001/restaurants', {name: this.Restaurant.name, contact: this.Restaurant.contact, address: this.Restaurant.address});
                if(result.status == 201){
                    this.$router.push({name:'Home'});
                }
                console.warn("result", result);
            }   
            catch(e){
                console.log(e);
            }
        }
    },
    async mounted() {
        // Check if user do not login, return sign up but not homepage. 
        let user = await localStorage.getItem("user-info");
        if (user == null) {
            this.$router.push({ name: "Login" });
        }
    },
    components: { Header }
}
</script>

<style scoped>
</style>
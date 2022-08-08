<template>
    <Header></Header>
    <h1>Hello User, Welcome to Update Restaurant Page.</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="Restaurant.name"/>
        <input type="text" name="address" placeholder="Enter Address" v-model="Restaurant.address"/>
        <input type="text" name="contact" placeholder="Enter Contact" v-model="Restaurant.contact"/>
        <button type="button" @click="UpdateRestaurant()">Update Restaurant</button>
    </form>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue'

export default {
    name: "UpdateRestaurant",
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
        UpdateRestaurant: async function(){
            try
            {
                console.warn(this.Restaurant);
                var id = this.$route.params.id;
                var result = await axios.patch('http://localhost:3001/restaurants/'+id, {
                    name: this.Restaurant.name, 
                    contact: this.Restaurant.contact, 
                    address: this.Restaurant.address
                });
                
                if(result.status == 200){
                    this.$router.push({ name: 'Home' });
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

        var id = this.$route.params.id;
        var res = await axios.get('http://localhost:3001/restaurants/'+id);
        var restaurant = res.data;

        this.Restaurant.name = restaurant.name;
        this.Restaurant.contact = restaurant.contact;
        this.Restaurant.address = restaurant.address;
    },
    components: { Header }
}
</script>

<style scoped>
</style>
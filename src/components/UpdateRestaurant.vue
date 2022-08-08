<template>
    <Header></Header>
    <h1>Hello User, Welcome to Update Restaurant Page.</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="Restaurant.name" />
        <input type="text" name="address" placeholder="Enter Address" v-model="Restaurant.address"/>
        <input type="text" name="contact" placeholder="Enter Contact" v-model="Restaurant.contact"/>
        <button type="button" @click="UpdateRestaurant()">Update Restaurant</button>
    </form>
</template>

<script>
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
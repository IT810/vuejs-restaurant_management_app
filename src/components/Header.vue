<template>
    <div class="nav">
        <a href="#">Home</a>
        <a href="#">Add Restaurant</a>
        <a href="#">Update Restaurant</a>
        <a href="#" @click="logout()">Logout</a>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    methods:{
        logout: function(){
            localStorage.clear();
            this.$router.push({name:'Login'});
        }
    }
}
</script>

<style>
    .nav{
        background-color: #333;
        overflow: hidden;
    }

    .nav a{
        float: left;
        color: #f2f2f2;
        padding: 14px 16px;
        text-align: center;
        font-size: 17px;
        text-decoration: none;
        margin-right: 5px;
    }

    .nav a:hover{
        background-color: #ddd;
        color: #333;
    }
</style>
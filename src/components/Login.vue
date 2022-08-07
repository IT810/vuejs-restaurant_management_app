<template>
    <img class="logo" src="../assets/logo.png">
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="emailInput" placeholder="Enter Email"/>
        <input type="password" v-model="passwordInput" placeholder="Enter Password"/>
        <button @click="login()">Login</button>
        <p>
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        name: 'LoginPage',
        data(){
            return{
                emailInput:'',
                passwordInput:''
            }
        },
        methods:{
            login: async function(){
                try{
                    var user = await (await axios.get(`http://localhost:3001/users?email=${this.emailInput}&password=${this.passwordInput}`)).data;
                    if(user != null){
                        localStorage.setItem('user-info', JSON.stringify(user));
                        this.$router.push({name:'Home'});
                    }
                }
                catch(e){
                    console.log(e);
                }
            }
        },
        async mounted(){
            // Check if user login, return homepage but not sign up. 
            let user = await localStorage.getItem('user-info');
            if(user != null){
                this.$router.push({name:'Home'});
            }
        }
    }
</script>
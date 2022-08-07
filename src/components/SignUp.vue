<template>
    <img class="logo" src="../assets/logo.png">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="nameInput" placeholder="Enter Name"/>
        <input type="text" v-model="emailInput" placeholder="Enter Email"/>
        <input type="password" v-model="passwordInput" placeholder="Enter Password"/>
        <button @click="signUp()">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        name:'SignUp',
        data(){
            return{
                nameInput:'',
                emailInput:'',
                passwordInput:''
            }
        },
        methods:{
            signUp: async function(){
                try{
                    var res = await axios.post('http://localhost:3001/users', { name: this.nameInput, email: this.emailInput, password: this.passwordInput});
                    console.log(res);
                    localStorage.setItem("user-info", JSON.stringify(res.data));
                    this.$router.push({name:'Home'});
                }
                catch(ex){
                    console.log(ex);
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
<template>
    <img class="logo" src="../assets/logo.png">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="nameInput" placeholder="Enter Name"/>
        <input type="text" v-model="emailInput" placeholder="Enter Email"/>
        <input type="password" v-model="passwordInput" placeholder="Enter Password"/>
        <button @click="signUp()">Sign Up</button>
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
                    alert("Sign up successfully !!!");
                    this.nameInput = '';
                    this.emailInput = '';
                    this.passwordInput = '';
                }
                catch(ex){
                    console.log(ex);
                    localStorage.setItem("user-info", JSON.stringify(res.data));
                }
            }
        }
    }
</script>

<style scoped>
    .logo{
        width: 100px;
    }

    .register input{
        width: 300px;
        height: 40px;
        padding-left: 40px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid blue;
    }

    .register button{
        width: 350px;
        height: 40px;
        border: 1px solid skyblue;
        background: skyblue;
        color: #fff;
        cursor: pointer;
    }
</style>
<template>
    <img class="logo" src="../assets/logo.png">
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="emailInput" placeholder="Enter Email"/>
        <input type="password" v-model="passwordInput" placeholder="Enter Password"/>
        <button>Login</button>
        <p>
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
    </div>
</template>

<script>
    export default{
        name: 'LoginPage',
    }
</script>
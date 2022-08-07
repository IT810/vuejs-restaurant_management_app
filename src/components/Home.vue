<template>
    <Header></Header>
    <h1>Hello User, Welcome to HomePage.</h1>
</template>

<script>
import Header from './Header.vue'

export default {
    name: "HomePage",
    async mouted() {
        // Check if user do not login, return sign up but not homepage. 
        let user = await localStorage.getItem("user-info");
        if (user == null) {
            this.$router.push({ name: "SignUp" });
        }
    },
    components: { Header }
}
</script>

<style scoped>
</style>
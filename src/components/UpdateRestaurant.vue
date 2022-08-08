<template>
    <Header></Header>
    <h1>Hello User, Welcome to Update Restaurant Page.</h1>
</template>

<script>
import Header from './Header.vue'

export default {
    name: "UpdateRestaurant",
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
<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}

.logo {
  width: 100px;
}

.register input,
.login input,
.add input {
  width: 300px;
  height: 40px;
  padding-left: 40px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid blue;
}

.register button,
.login button, .add button {
  width: 350px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
}
</style>

<template>
  <div id="app2">
    <h1>CRUD APP</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import Read from "./components/Read.vue";
import Create from "./components/Create.vue";
export default {
  name: "App",
  components: { Read, Create }
};
</script>

<style>
#app2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: skyblue;
}
</style>

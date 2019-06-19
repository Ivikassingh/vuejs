<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
  </div>
</template>

<script>
// Imports
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    console.log(this.id);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(response => {
        this.blog = response.data;
        console.log(response.data);
      })
      .catch(console.log("error"));
  }
};
</script>

<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  border: 2px solid black;
}
</style>
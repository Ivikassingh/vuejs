<template>
  <div>
    <h1>Create new Post</h1>
    <h3>Post Title</h3>
    <input v-model="title" placeholder="title">
    <br>
    <h3>Post Title</h3>
    <input v-model="body" placeholder="add multiple lines">

    <h2>Title</h2>
    <h3>{{title}}</h3>
    <h2>Body</h2>
    <h3>{{body}}</h3>

    <button v-on:click="create">Create Post</button>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "create",
  data: () => {
    return {
      title: " ",
      body: " "
    };
  },

  created() {},
  methods: {
    create() {
      console.log(this.title);
      var payload = {};
      payload.userId = 11;
      payload.id = Math.random();
      payload.title = this.title;
      payload.body = this.body;
      axios
        .post("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
          console.log(response);
          swal({
            title: "Post created",
            text: "Well done",
            icon: "success",
            button: "create new post"
          });
           this.$router.push("/");
        });
    }
  }
};
</script>

<style>
button {
  padding: 20px;
}
</style>

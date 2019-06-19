<template>
  <div>
     <router-link to="/add">
      <button>ADD</button>
    </router-link>
    <h1 class="head">List of posts</h1>
    <div v-for="(post,index) in posts" v-bind:key="post.id">
    <div id="box">
        <h2>{{index}}</h2>
        <h2 class="title">{{post.title}}</h2>
        <h3 class="body">{{post.body}}</h3>
        <router-link v-bind:to="'/blog/' + post.id">
          <button>View</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Read",
  data: () => {
    return {
      posts: []
    };
  },

  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(respose => {
      this.post = respose.data;
      this.posts = this.post.filter(function(data) {
        return data.userId === 10;
      });
    });
  },

  methods: {
    showdet: function(data) {
      console.log(data);
    }
  }
};
</script>

<style>
.head {
  border: 2px solid black;
  color: red;
}
.title {
  border: 2px solid blue;
}
.body {
  border: 2px solid green;
}
#box {
  border: 2px solid brown;
  margin-top: 30px;
  background-color: seashell;
}
button {
  background-color: black;
  color: white;
  padding: 10px;
}
</style>
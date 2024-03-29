import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./components/Router";
Vue.config.productionTip = false;
Vue.use(VueRouter);

const route = new VueRouter({
  routes: Routes
});

new Vue({
  render: h => h(App),
  router: route
}).$mount("#app");
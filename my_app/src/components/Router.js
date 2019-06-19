import Read from "./Read.vue";

import Create from "./Create.vue";

import Single from "./Single.vue";
export default [
  { path: "/", component: Read },
  { path: "/add", component: Create },
  { path: "/blog/:id", component: Single }
];

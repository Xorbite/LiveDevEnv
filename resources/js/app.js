import { createApp } from "vue";

const Vue = createApp({});
Vue.component('vue-test', require('./components/vue-test.vue').default);
Vue.component('second-component', require('./components/second-component').default);

Vue.mount("#Vue");

import { createApp } from "vue";

const Vue = createApp({});

// createApp({App}) // We bound the createapp function to a static function in javascript and called it Vue so we can use a shorter version of it but normally it should look like this.


Vue.component('vue-test', require('./components/vue-test.vue').default);
Vue.component('SecondComponent', require('./components/SecondComponent').default);

Vue.mount("#Vue");

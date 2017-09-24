import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync'
import App from './App.vue';
import vueNotifications from 'vue-notifications'
import options from './system/options'
import { routes } from './system/routes';
import store from './store/indexStore';

Vue.use(VueRouter);
Vue.use(vueNotifications, options);


export var router = new VueRouter({
    mode: 'history',
    routes
})

sync(store, router);

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
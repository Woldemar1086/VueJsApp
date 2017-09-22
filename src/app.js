import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync'
import App from './App.vue';
import options from 'vue-notifications'
import { routes } from './system/routes';
import store from './store/indexStore';

Vue.use(VueRouter);

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
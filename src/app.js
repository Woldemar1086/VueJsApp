import Vue 			 from 'vue';
import VueRouter 	 from 'vue-router';
import { sync } 	 from 'vuex-router-sync'
import App 			 from './App.vue';
import { routes } 	 from './system/routes';
import store 		 from './store/indexStore';
import Notifications from 'vue-notification'
import velocity      from 'velocity-animate'

Vue.use(VueRouter);
Vue.use(Notifications, { velocity })



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
import index from '../components/index.vue'
import vuejs from '../components/vuejs.vue'
import auth from '../components/auth.vue'
import js from '../components/js.vue'
import cpp from '../components/cpp.vue'
import linux from '../components/linux.vue'

export const routes = [{
    path: '/',
    component: index
}, {
    path: '/vuejs',
    component: vuejs
}, {
    path: '/vuejs',
    component: auth
}, {
    path: '/vuejs',
    component: js
}, {
    path: '/vuejs',
    component: cpp
}, {
    path: '/vuejs',
    component: linux
}]
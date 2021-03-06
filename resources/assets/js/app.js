var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

import App from '../components/App.vue';
import Dashboard from '../components/Dashboard.vue';
import Home from '../components/Home.vue';
import Register from '../components/Register.vue';
import Signin from '../components/Signin.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content');
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
Vue.http.options.root = 'http://laravel.dev:8080';

export default Vue;
export var router = new VueRouter;

router.map({
    '/': {
        name: 'home',
        component: Home
    },
    '/dashboard': {
        name: 'dashboard',
        component: Dashboard
    },
    '/register': {
        name: 'register',
        component: Register
    },
    '/signin': {
        name: 'signin',
        component: Signin
    },
});

router.start(App, '#app');
import Vue from 'vue';
import Router from 'vue-router';
import CV from '@/pages/cv';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/cv',
    routes: [
        {
            path: '/',
            name: 'CV',
            component: CV
        }
    ]
});

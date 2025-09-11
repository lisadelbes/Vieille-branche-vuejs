// Ici on va créer une instance de router et config des routes
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/apropos',
            alias: '/propos',
            name: 'apropos',
            component: () => import('../views/apropos.vue')
        }
    ]
});

export default router;

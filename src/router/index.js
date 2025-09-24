// Ici on va créer une instance de router et config des routes
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
          {
            path: '/',
            alias: '/',
            name: '',
            component: () => import('../views/home.vue')
        },
        {
            path: '/apropos',
            alias: '/apropos',
            name: 'apropos',
            component: () => import('../views/apropos.vue')
        },
        {
            path: '/formulaire-devis',
            alias: '/formulaire-devis',
            name: 'formulaire-devis',
            component: () => import('../views/formulaire-devis.vue')
        },
        {
            path: '/expertise',
            alias: '/monexpertise',
            name: 'expertise',
            component: () => import('../views/expertise.vue')
        },
        {
            path: '/pedagogie',
            alias: '/pedagogie',
            name: 'pedagogie',
            component: () => import('../views/pedagogie.vue')
        }

    ]
});

export default router;

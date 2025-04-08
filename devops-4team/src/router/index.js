import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home.vue');
const QnA = () => import('@/views/QnA.vue');
const BaseLayout = () => import('@/components/layout/BaseLayout.vue');

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'base',
            component: BaseLayout,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'qna',
                    name: 'qna',
                    component: QnA
                }
            ]
        }
    ]
});

router.beforeEach((to, form, next) => {
    next();
});

export default router;
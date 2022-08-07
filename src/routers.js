import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    }
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });

  export default router;
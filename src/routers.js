import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });

  export default router;
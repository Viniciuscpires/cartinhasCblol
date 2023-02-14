import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default/DefaultApp.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "home" */ '@/views/TestView.vue'),
        },
        {
          path: 'teams',
          name: 'Teams',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "home" */ '@/views/TeamsView.vue'),
        },
        {
          path: 'team/:teamSlug',
          name: 'Team',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "home" */ '@/views/TeamView.vue'),
        },
        {
          path: 'standings/:tournament',
          name: 'Standings',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "home" */ '@/views/StandingsView.vue'),
        },
      ],
    },
  ],
})

export default router

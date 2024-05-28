import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'experience',
      component: () => import('@/views/ExperienceView.vue')
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('@/views/EducationView.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('@/views/ProjectView.vue')
    }
  ]
})

export default router
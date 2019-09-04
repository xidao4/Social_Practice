import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/homepage',
      name: 'homepage',
      component: () => import('./views/HomePage.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '/map',
          name: 'map',
          component: () => import('./views/Map.vue')
        },
        {
          path: '/architecture',
          name: 'architecture',
          component: () => import('./views/Architecture.vue')
        },
        {
          path: '/activity',
          name: 'activity',
          component: () => import('./views/Activity.vue')
        },
        {
          path: '/description',
          name: 'description',
          component: () => import('./views/Description.vue')
        },
      ]
    },
    // {
    //   path: '/activityPhoto',
    //   name: 'activityPhoto',
    //   component: () => import('./views/ActivityPhoto.vue')
    // },
    // {
    //   path: '/activityVideo',
    //   name: 'activityVideo',
    //   component: () => import('./views/ActivityVideo.vue')
    // },{
    //   path: '/activityNote',
    //   name: 'activityNote',
    //   component: () => import('./views/ActivityNote.vue')
    // },
    {
      path: '*',
      name: 'other',
      redirect: {name: 'home'}
    }
  ]
})

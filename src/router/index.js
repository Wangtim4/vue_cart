import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'user',
        component: () => import('../views/UserBoard.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/UserProduct.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/ProductPage.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/CartList.vue')
      },
      {
        path: 'contact',
        component: () => import('../views/UserContact.vue')
      },
    ]
  },
  {
    path: '/login',
    component: () => import('../views/admin/LoginA.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/admin/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/ProductList.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/admin/OrdersList.vue')
      }
    ]
  },
  // {
  //   path: '/user',
  //   component: () => import('../views/UserBoard.vue'),
  //   children: [
  //     {
  //       path: 'cart',
  //       component: () => import('../views/Userboard.vue'),
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
})

export default router

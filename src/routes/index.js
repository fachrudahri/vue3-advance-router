import { createWebHistory, createRouter } from "vue-router";

import Login from '../components/layouts/Login.vue'
import Dashboard from '../components/layouts/Dashboard.vue'
import Home from '../components/pages/Home.vue'
import About from '../components/pages/About.vue'
import Contact from '../components/pages/Contact.vue'
import Posts from '../components/pages/Posts.vue'
import Post from '../components/pages/Post.vue'

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "",
        name: "Home",
        component: Home
      },
      {
        path: 'about',
        name: "About",
        component: About
      },
      {
        path: 'contact',
        name: "Contact",
        component: Contact
      },
      {
        path: 'posts',
        name: "Posts",
        component: Posts,
        beforeEnter: (to, from) => {
          console.log('saya mau coba masuk ke posts nih')
        }
      },
      {
        path: 'posts/:id',
        name: 'Post',
        component: Post
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('authenticated'))
  if(to.name !== 'Login' && !isAuthenticated) {
    next({name: 'Login'})
    return
  }
  if(to.name === 'Login' && isAuthenticated) {
    next({name: 'Home'})
    return
  }
  else next()
  return
})

export default router
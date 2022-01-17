<template>
  <nav>
    <router-link to="/">Home | </router-link>
    <router-link to="/about">About | </router-link>
    <router-link :to="{name: 'Contact'}">Contact | </router-link>
    <router-link to="/posts">Posts | </router-link>
  </nav>
  <hr>
  <router-view />
  <button @click="logout">logout</button>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const logout = () => {
      localStorage.setItem('authenticated', false)
      router.push({name : 'Login'})
    }

    return { logout }
  }
}
</script>

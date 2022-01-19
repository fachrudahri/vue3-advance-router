<template>
<div>
  Username : <input v-model="username" type="text">
</div>
<div>
  Password : <input v-model="password" type="password">
</div>

<button @click="login">Login</button>
</template>

<script>
import { useRouter } from "vue-router"
import { ref } from "vue"
import { useStore } from "vuex"
export default {
  setup() {
    const router = useRouter()
    const store = useStore()
    
    const username = ref('')
    const password = ref('')

    const login = () => {
      localStorage.setItem('authenticated', true)
      store.commit('setUsername', username.value)
      store.commit('setPassword', password.value)
      router.push({ name: 'Home'})
    }

    return { login, username, password }
  }
}
</script>
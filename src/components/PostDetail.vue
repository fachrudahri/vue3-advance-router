<template>
  <h2>{{ title }}</h2>
  <p>{{ body }}</p>
  <div>
    <button @click="addLike">Like</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"
export default {
  async setup() {
    const data = reactive({
      title: '',
      body: ''
    })

    const route = useRoute()
    const store = useStore()

    const addLike = () => {
      store.commit('increment')
    }

    const id = route.params.id
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const { title, body } = await result.json()

    data.title = title
    data.body = body

    return { ...toRefs(data), addLike }
  }
}
</script>
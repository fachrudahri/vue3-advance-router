<template>
  <h6>hello {{ username }}</h6>
  <div>
    Homepage
  </div>
  <p>total Like: {{ likes }}</p>
</template>

<script>
import { computed, ref, onMounted } from "vue"
import { useStore } from "vuex"
export default {
  setup() {
    const store = useStore()
    const username = ref('')

    const likes = computed(() => {
      return store.state.totalLikes
    })

    onMounted(() => {
      username.value = store.state.username
    })

    return { likes, username }
  }
}
</script>
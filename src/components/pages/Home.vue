<template>
  <h6>hello {{ username }}</h6>
  <div>
    Homepage
  </div>
  <p>total Like: {{ likes }}</p>
  <pre>{{ credential }}</pre>
</template>

<script>
import { computed, ref, onMounted, compile } from "vue"
import { useStore } from "vuex"
export default {
  setup() {
    const store = useStore()
    const username = ref('')

    const likes = computed(() => {
      return store.state.totalLikes
    })

    const credential = computed(() => {
      return store.state.credential
    })

    onMounted(() => {
      username.value = store.state.username
    })

    return { likes, username, credential }
  }
}
</script>
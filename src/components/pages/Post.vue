<template>
  <Suspense>
    <template #default>
      <PostDetail />
    </template>

    <template #fallback>
      <span>loading...</span>
    </template>
  </Suspense>
</template>

<script>
import PostDetail from '../PostDetail.vue'
export default {
  components: { PostDetail },
  setup() {
  }
}
</script>
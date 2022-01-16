<template>
  <Suspense>
    <template #default>
      <PostList />
    </template>

    <template #fallback>
      <span>loading...</span>
    </template>
  </Suspense>
</template>

<script>
import PostList from '../PostList.vue'
export default {
  components: { PostList },
  setup() {
  }
}
</script>
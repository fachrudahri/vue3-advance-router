<template>
  <h6>hello {{ username }}</h6>
  <div>
    Homepage
  </div>
  <hr>
  <button @click="increment">add Like</button>
  <button @click="setUsername('Fachru ganteng banget')">change username</button>
  <button @click="getCredential">change credential</button>
  <hr>
  <p>total Like: {{ likes }}</p>
  <p>fake total like: {{ fakeTotalLikes }}</p>
  <!-- <p>fake total like: {{ fakeLikes }}</p> -->
  <pre>{{ credential }}</pre>
</template>

<script>
import { computed, ref, onMounted } from "vue"
import { useStore, mapState, mapGetters, mapMutations, mapActions } from "vuex"
export default {
  //composition API with useStore vuex
  // setup() {
  //   const store = useStore()
  //   const username = ref('')

  //   const likes = computed(() => {
  //     return store.state.totalLikes
  //   })

  //   const credential = computed(() => {
  //     return store.state.credential
  //   })

  //   const fakeLikes = computed(() => {
  //     return store.getters.fakeTotalLikes
  //   })

  //   onMounted(() => {
  //     username.value = store.state.username
  //   })

  //   return { likes, username, credential, fakeLikes }
  // }

  //option API with map vuex
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
    username: (state) => state.user.username,
    credential: (state) => state.user.credential,
    likes: (state) => state.post.totalLikes
    }),
    ...mapGetters({
      fakeTotalLikes: "post/fakeTotalLikes"
    })
  },
  methods: {
    ...mapMutations({
      increment: "post/increment",
      setUsername: "user/setUsername",
    }),
    ...mapActions({
      getCredential: "user/getCredential"
    })
  }
}
</script>
<!-- -searchGithubByPubsub -->
<template>
  <div class="container">
    <search></search>
    <user-main></user-main>
  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import UserMain from './components/Main.vue'

  export default {
    components: {
      Search,
      UserMain
    }
  }
</script>

<style>
</style>

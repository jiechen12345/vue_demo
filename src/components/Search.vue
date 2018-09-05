<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search GitHub Users</h3>
    <div>
      <input type="text" v-model="searchName" placeholder="enter the name"/>
      <button @click="search">search</button>
    </div>
  </section>
</template>

<script>
  /* 因為prpos 要傳給父層再傳給Main 所以用發布(PubSub)方式直接傳給Main */
  import PubSub from 'pubsub-js'

  export default {
    data () {
      return {
        searchName: ''
      }
    },
    methods: {
      search () {
        const searchName = this.searchName.trim()
        if (searchName) {
          PubSub.publish('search', searchName) // 發布消息publish(k,v)
        }
      }
    }
  }

</script>

<style>
</style>

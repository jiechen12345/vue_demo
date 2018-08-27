<template>
  <div>
    <ul>
      <li v-for="msg in messages" :key="msg.id">
        <router-link :to="`/home/message/detail/${msg.id}`">{{msg.title}}</router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        messages: []
      }
    },
    mounted () {
      // 模擬ajax
      setTimeout(() => {
        const messages = [
          {
            id: 1,
            title: 'aaa'
          },
          {
            id: 2,
            title: 'ABC'
          },
          {
            id: 5,
            title: 'CBA'
          }
        ]
        this.messages = messages
      }, 1000)
    }
  }
</script>

<style>

</style>

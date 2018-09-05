<template>
  <div>
    <ul>
      <li v-for="msg in messages" :key="msg.id">
        <!-- a標籤 -->
        <router-link :to="`/home/message/detail/${msg.id}`">{{msg.title}}</router-link>
        <!-- @click方式ROUTER -->
        <!-- push相當於 A連結 返回還是可以在當前介面 -->
        <button @click="pushShow(msg.id)">push 查看</button>
        <!-- replace 是給予新的路由替換當前路由 返回是在上一個介面 -->
        <button @click="replaceShow(msg.id)">replace 查看</button>
      </li>
    </ul>
    <button @click="$router.back()">上一步</button>
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
    },
    methods: {
      pushShow (id) {
        this.$router.push(`/home/message/detail/${id}`)
      },
      replaceShow (id) {
        this.$router.replace(`/home/message/detail/${id}`)
      }
    }
  }
</script>
<style>

</style>

<template>
  <div>
    <h2 v-if="firstView">請輸入用戶名稱</h2>
    <h2 v-if="loading">Loading...</h2>
    <h2 v-if="erroMsg">{{erroMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" width="100px">
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'

  export default {
    data () {
      return {
        firstView: true,
        loading: false,
        users: null,
        erroMsg: ''
      }
    },
    mounted () {
      // 訂閱消息
      PubSub.subscribe('search', (msg, searchName) => {
        // const url = `https://api.github.com/search/users?q=jiechen123`
        const url = `https://api.github.com/search/users?q=${searchName}`
        // console.log(url)
        // 更新狀態(請求中)
        this.firstView = false
        this.loading = true
        this.users = null
        this.erroMsg = ''
        // 發axios
        axios.get(url).then(response => {
          const result = response.data
          // 因為要取的欄位名稱不同所以要map另外處理
          console.log(result.items[0].login)
          const users = result.items.map(item => ({
            url: item.html_url,
            avatar_url: item.avatar_url,
            name: item.login
          }))
          // 成功 更新狀態
          this.loading = false
          this.users = users
        }).catch(error => {
          // 失敗 更新狀態
          this.loading = false
          this.erroMsg = error
        })
      })
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>

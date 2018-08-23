<template>
  <div id="app">
    <div v-if="!repoUrl">loading..</div>
    <div v-else>most star repo is <a :herf="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        repoUrl: '',
        repoName: ''
      }
    },
    mounted () {
      const url = `https://api.github.com/search/repositories?q=vu&sort=stars`
      axios.get(url).then(
        response => { // --成功
          const result = response.data
          const mostRepo = result.items[0]
          this.repoUrl = mostRepo.html_url
          this.repoName = mostRepo.name
        }).catch(e => {
          console.log(e.message)
          alert('失敗了!!')
      })
    }
  }
</script>

<style>
</style>

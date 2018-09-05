<template>
  <div>
    <H2>123</H2>
    <ul>
      <li v-for="(news,index) in newsArr" :key="index">{{news}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newsArr: ['aa', 'bb', 'cc']
      }
    }
  }
</script>

<style>

</style>

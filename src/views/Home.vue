<template>
  <div>
    <h2>home</h2>
    <div>
      <ul class="nav nav-tabs">
        <router-link to="/home/news">News</router-link>
        <router-link to="/home/message">Message</router-link>
      </ul>
    </div>
    <div>
      <hr>
      <router-view></router-view>
      <hr>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>

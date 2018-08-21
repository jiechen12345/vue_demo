<template>
  <div>
    <p>{{msg}}</p>
  </div>
</template>

<script>
  export default {
    data(){//組件裡面必須寫函數
      return {msg: "OK Vue"}
    }
  }
</script>

<style>
  .msg{
    color:blue;
    font-size: 40px;
  }
</style>

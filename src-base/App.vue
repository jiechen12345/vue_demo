<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png" alt="logo">
    <!--3.使用組件-->
    <HelloWorld/>
  </div>
</template>

<script>
  //1.引入組件
  import HelloWorld from './components/HelloWorld.vue'
export default {
      //2.映射組件
  components:{
    HelloWorld
  }

}
</script>

<style>
.logo {
 height: 400px;
 width: 400px;
  margin-top: 60px;
}
</style>

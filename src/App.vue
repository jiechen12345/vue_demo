<template>
  <div id="app">
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>評論</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!--3.使用組件-->
      <Add :addComment="addComment"/> <!--標籤傳遞-->
      <List :comments="comments" :deleteComment="deleteComment"/> <!--標籤傳遞-->
    </div>
  </div>
</template>

<script>
  //1.引入組件
  import Add from './components/Add.vue'
  import List from './components/List.vue'
  export default {
    data(){
      return {
        comments: [ //要傳給List組件通信
          {name: 'AA', content: 'goood'},
          {name: 'cc', content: 'soso'},
          {name: 'dd', content: 'BAD'},
        ]
      }
    },
    methods: {
      addComment(comment){
        this.comments.unshift(comment)//新增在前面
      },
      deleteComment(index){
        this.comments.splice(index, 1)
      }
    },
    //2.映射組件
    components: {
      Add,
      List,
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

<template>
  <ul>
    <p>ID: {{$route.params.id}}</p>
    <li>title:{{MessageDetail.title}}</li>
    <li>content:{{MessageDetail.content}}</li>
  </ul>
</template>

<script>

  export default {
    data () {
      return {
        MessageDetail: {
          id: '',
          title: '',
          content: ''
        }
      }
    },
    mounted () {
setTimeout(() => { // 模擬資料庫取出資料
  const allMessageDetail = [
    {
      id: 1,
      title: 'aaa',
      content: 'aaa.....'
    },
    {
      id: 2,
      title: 'ABC',
      content: 'bbb.....'
    },
    {
      id: 5,
      title: 'CBA',
      content: 'ccc.....'
    }
  ]
  this.allMessageDetail = allMessageDetail
}, 500)
    },
    watch: { // 因為路由位置沒變在同個頁面變換而已，所以不能寫在mounted，要監視$route變化就啟動
      $route: function (value) {
        const id = value.params.id * 1 // 這是畫面上點選的ID  強制轉成數字
        this.MessageDetail = this.allMessageDetail.find(detail => detail.id === id) // 查詢出跟畫面ID一樣的物件
      }
    }
  }
</script>

<style>

</style>

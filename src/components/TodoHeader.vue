<template>
  <div class="form-group">
    <input type="text" v-model="title" @keyup.enter="addItem" placeholder="todo">
  </div>
</template>

<script>
  export default {
      props: {
        addTodo: Function
      },
    data () {
      return {
        title: ''
      }
    },
    methods: {
      addItem () {
        /* 1. 檢查輸入合法 */
        const title = this.title.trim()
        if (!title) {
          alert('請輸入')
          return
        }
        /* 2. 根據輸入生成一個todo物件 */
        const todo = {
            title,
          complate: false
        }
        /* 3. 添加到todos */
        this.addTodo(todo)
        /* 4. 清除輸入框 */
        this.title = ''
      }
    }
  }
</script>

<style>

</style>

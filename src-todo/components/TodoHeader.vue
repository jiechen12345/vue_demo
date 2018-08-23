<template>
  <div class="form-group">
    <input type="text" v-model="title" @keyup.enter="addItem" placeholder="todo">
  </div>
</template>

<script>
  export default {
    props: {
      /* addTodo: Function 改用自訂義觸發 */
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
          complete: false
        }
        /* 3. 添加到todos */
        /* this.addTodo(xx) 改用自訂義觸發 */
        this.$emit('addTodo', todo)
        /* 4. 清除輸入框 */
        this.title = ''
      }
    },
    watch: {}
  }
</script>

<style>

</style>

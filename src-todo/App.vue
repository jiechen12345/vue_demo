<template>
  <div style="width: 50%;">
    <todo-header @addTodo="addTodo"></todo-header> <!--改用自訂義觸發-->
    <todo-list :todos="todos" :delTodo="delTodo"></todo-list>
    <todo-footer :todos="todos" :delCompleteTodos="delCompleteTodos" :selectAllTodos="selectAllTodos"/>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import storageUtil from './util/storageUtil'
  export default {
    data () {
      return {
        /* 取得localStorage的值 並且轉成json */
        todos: storageUtil.readTodos()
      }
    },
    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      delTodo (index) {
        this.todos.splice(index, 1)
      },
      delCompleteTodos () {
        /* '過濾' 出沒有完成的 */
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      selectAllTodos (isCheck) {
        /* 遍歷所有的todo 把complete值改為isCheck */
        this.todos.forEach(todo => todo.complete = isCheck)
      }
    },
    watch: {
      todos: {
        deep: true, /* 深度監視todos有變動就存檔 */
//        handler: function (value) {
//          storageUtil.saveTodos(value)
//        } 改寫如下
        handler: storageUtil.saveTodos
      }
    },
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>

</style>

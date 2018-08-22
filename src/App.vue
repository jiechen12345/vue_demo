<template>
  <div style="width: 50%;">
    <todo-header :addTodo="addTodo"></todo-header>
    <todo-list :todos="todos" :delTodo="delTodo"></todo-list>
    <todo-footer/>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  export default {
      data () {
          return {
              todos: [
                {title: '吃飯', complete: false},
                {title: '睡覺', complete: true},
                {title: 'coding', complete: false}
              ]
          }
      },
    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      delTodo (index) {
          this.todos.splice(index, 1)
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

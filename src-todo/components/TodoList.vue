<template>
    <ul>
      <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" :delTodo="delTodo"/>
    </ul>
</template>

<script>
  import TodoItem from './TodoItem.vue'
    export default {
        props: {
          todos: Array,
          delTodo: Function
        },
      components: {
            TodoItem
      }
    }
</script>

<style>

</style>

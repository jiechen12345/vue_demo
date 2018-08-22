<template>
  <div>
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
        <span>已完成{{completeSize}}</span>/全部{{todos.length}}
      </span>
    <button class="btn btn-danger pull-right" v-show="completeSize" @click="delCompleteTodos">清除已完成todo</button>
  </div>
</template>

<script>
  export default {
    props: {
      todos: Array,
      delCompleteTodos: Function,
      selectAllTodos: Function
    },
    computed: {
      completeSize () {
        /* reduce 可以取的回傳值再次計算 */
        return this.todos.reduce((total, todo) => total + (todo.complete ? 1 : 0), 0)
      },
      /* '讀取'值並'監視'值的變化 雙向影響 所以用get set */
      isAllCheck: {
        get () {
          return this.completeSize === this.todos.length && this.completeSize > 0
        },
        set (value) { /* value是當前checkbox的值 */
          this.selectAllTodos(value)
        }
      }
    }
  }
</script>

<style>

</style>

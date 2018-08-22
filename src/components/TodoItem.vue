<template>
  <li class="liBoder" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <!--mouseover是另外一種-->
    <input type="checkbox" v-model="todo.complete"/>
    <span>{{todo.title}}</span>
    <button class="btn btn-danger center" v-show="isShow" @click="delItem">刪除</button>
  </li>
</template>

<script>
  export default {
    props: {
      todo: Object,
      index: Number,
      delTodo: Function
    },
    data () {
      return {
        bgColor: 'white', /* 默認顏色 */
        isShow: false/* 默認按鈕 */
      }
    },
    methods: {
      handleEnter (isEnter) {
        if (isEnter) {
          this.bgColor = 'darkgray'
          this.isShow = true
        } else {
          this.bgColor = 'white'
          this.isShow = false
        }
      },
      delItem () {
        const {todo, index, delTodo} = this
        if (window.confirm(`確認刪除${todo.title}`)) {
          delTodo(index)
        }
      }
    }
  }
</script>

<style>
  .liBoder {
    width: 80%;
    border-style: solid;
    border-color: darkgray;
  }
</style>

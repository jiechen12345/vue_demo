<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem">刪除</a>
    </div>
    <P class="user"><span>{{comment.name}}</span><span>說:</span></P>
    <P class="content">{{comment.content}}</P>
  </li>
</template>

<script>
  export default {
    /* props:['comment'] */
    props: {
      comment: Object,
      deleteComment: Function,
      index: Number
      /* 除了指定屬姓名也可以順便指定類型 */
    },
    methods: {
      deleteItem () {
        const {comment, index, deleteComment} = this
        if (window.confirm(`你確定要刪${comment.name}的留言?`)) {
          deleteComment(index)
        }
      }
    }
  }
</script>

<style>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-groupitem .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>

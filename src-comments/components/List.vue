<template>
  <div class="col-md-8">
    <h3 class="reply">評價</h3>
    <h2 v-show="comments.length===0">無任何留言</h2>
    <ul class="list-group">
      <Item v-for="(comment,index) in comments" :key="index" :comment="comment"
            :deleteComment="deleteComment" :index="index"/>
    </ul>
  </div>
</template>

<script>
  import Item from './Item.vue'
  export default {
    /* 聲明接收屬性 */
    props: ['comments', 'deleteComment'],
    components: {
      Item
    }
  }
</script>

<style>
  .reply {
    margin-top: 0px;
  }

</style>

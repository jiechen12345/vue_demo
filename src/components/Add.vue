<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>name</label>
        <input type="text" class="form-control" v-model="name" placeholder="Enter your name">
        <small id="nameHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
      </div>
      <div class="form-group">
        <label>content</label>
        <textarea class="form-control" v-model="content" rows="6" placeholder="content"></textarea>
      </div>

      <button type="submit" class="btn btn-default pull-right" @click="add">add</button>
    </form>

  </div>
</template>

<script>
  export default {
    props: {
      addComment: {
        type: Function,
        required: true
      }
    },
    data(){
      return {
        name: '',
        content: ''
      }
    },
    methods: {
      add(){
        //1檢查輸入合法性
        const name = this.name.trim()
        const content = this.content.trim()
        if (!name || !content) {
          alert('不能為空')
          return
        }
        //2.把input數據封裝在comment物件
        const comment = {name, content}
        //3.傳到comments
        //comments是在APP組件更新(新增)也在APP做
        this.addComment(comment)
        //4.清除輸入
        this.name=''
        this.content=''
      }
    }
  }
</script>

<style>

</style>

<template>
  <ul>
    <p>ID: {{$route.params.id}}</p>
    <p>ID: {{$route.params.id}}</p>
    <li>title:AA</li>
    <li>content:aaaaa</li>
  </ul>
</template>

<script>
  const allMessageDetail = [
    {
      id: 1,
      title: 'aaa',
      content: 'aaa.....'
    },
    {
      id: 2,
      title: 'ABC',
      content: 'bbb.....'
    },
    {
      id: 5,
      title: 'CBA',
      content: 'ccc.....'
    }
  ]
  export default {
    data () {
      return {
        MessageDetail: {
          id: '',
          title: '',
          content: ''
        }
      }
    },
    mounted () {

    }
  }
</script>

<style>

</style>

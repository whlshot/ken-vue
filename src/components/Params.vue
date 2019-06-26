<template>
  <div>
    <h2>{{msg}}</h2>
    <p>新闻Id: {{$route.params.newsId}}</p>
    <p>新闻标题: {{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
  export default {
    name: "Params",
    data() {
      return {
        msg:'aaa'
      }
    },
    watch: {
      '$route'(to, from) {
        console.log("tttt")
        console.log(to)
        console.log('-------------')
        console.log(from)
      }
    }
  }
</script>

<style scoped>

</style>

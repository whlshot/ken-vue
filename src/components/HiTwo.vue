<template>
  <div>
    <h1>{{msg}}--{{$route.params.age}}</h1>
  </div>
</template>

<script>
  export default {
    name: "HiTwo",
    data() {
      return {
        msg: 'hi page child two '
      }
    }
  }
</script>

<style scoped>

</style>

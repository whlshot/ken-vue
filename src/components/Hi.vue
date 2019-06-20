<template>
  <div class="hi">
    <h1>{{msg}}</h1>
    <router-view class="rv"/>
  </div>
</template>

<script>
  export default {
    name: "Hi",
    data() {
      return {
        msg: 'hi page'
      }
    }
  }
</script>

<style scoped>
  .rv {
    color: yellowgreen;
  }
</style>

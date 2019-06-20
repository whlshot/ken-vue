<template>
  <div>
    <h1>{{msg}}</h1>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "HiOne", data() {
      return {
        msg: 'hi page child one'
      }
    }
  }
</script>

<style scoped>

</style>

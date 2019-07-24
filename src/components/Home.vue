<template>
  <div>
    <h1> {{msg}} </h1>
    <div>
      <el-button type="primary" plain @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        msg: 'home page'
      }
    },
    methods: {
      login() {
        this.$router.push("login")
      }
    }
  }
</script>

<style scoped>

</style>

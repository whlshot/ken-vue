<template>
  <div class="header-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in this.$router.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown>
      <img src="https://pic4.zhimg.com/v2-3acec903735c7fcdc5b8549619e959c8_xl.jpg" class="avatar" alt="">
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {}
    },
    methods: {
      handleCommand() {

      }
    }

  }
</script>

<style scoped>
  .header-container {
    background-color: #EFF2F7;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  }

  .avatar {
    width: 36px;
    height: 36px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-right: 40px;
  }

</style>


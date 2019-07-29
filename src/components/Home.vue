<template>
  <div class="fill-container">
    <el-row style="height: 100%">
      <el-col :span="4" style="height: 100%; min-height: 100%; background-color: #324057;">
        <el-menu default-active="home"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#324057"
                 text-color="#fff"
                 collapse-transition="true"
                 active-text-color="#ffd04b"
                 theme="dark"
                 router
                 style="min-height: 100%;">
          <el-menu-item index="home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item index="userList">用户列表</el-menu-item>
            <el-menu-item index="2-2">商家列表</el-menu-item>
            <el-menu-item index="2-3">食品列表</el-menu-item>
            <el-menu-item index="2-4">订单列表</el-menu-item>
            <el-menu-item index="2-5">管理员列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-add-location"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item index="3-1">添加商铺</el-menu-item>
            <el-menu-item index="3-2">添加商品</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>图表</span>
            </template>
            <el-menu-item index="4-1">用户分布</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑</span>
            </template>
            <el-menu-item index="5-1">文本编辑</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-aim"></i>
              <span>设置</span>
            </template>
            <el-menu-item index="6-1">用户分布</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-cherry"></i>
              <span>说明</span>
            </template>
            <el-menu-item index="7-1">说明</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {}
    },
    methods: {
      handleOpen() {
        console.log("open")
      },
      handleClose() {
        console.log("close")
      }
    }
  }
</script>

<style scoped>
  .fill-container {
    height: 100%;
    width: 100%;
  }
</style>

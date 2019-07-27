<template>
  <div class="login">
    <div class="content">
      <h1>XXX管理系统</h1>
      <el-form ref="form" class="login-form">
        <el-form-item label="用户名">
          <el-input v-model="userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {login} from '../../api/requestApi'

  export default {
    name: "",
    data() {
      return {
        userName: '',
        password: ''
      }
    },
    methods: {
      async login() {
        login(this.userName, this.password)
        this.$router.push("/home")
      }
    }
  }
</script>

<style scoped>
  .login {
    background-color: #324057;
    /*text-align: center;*/
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  h1 {
    color: white;
    padding-bottom: 50px;
  }

  .login .content {
    margin-top: -30px;
    width: 380px;
    height: 360px;
  }

  .login-form {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
  }

</style>

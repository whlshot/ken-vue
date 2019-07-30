<template>
  <div>
    <headTop></headTop>
    <section class="data-section">
      <h2>数据统计</h2>
      <el-row :gutter="40" class="section-one">
        <el-col :span="4"><div class="data-list"><span>当日数据:22</span></div></el-col>
        <el-col :span="4"><div class="data-list"><span>新增用户:1</span></div></el-col>
        <el-col :span="4"><div class="data-list"><span>新增订单:7</span></div></el-col>
        <el-col :span="4"><div class="data-list"><span>新增管理员:9</span></div></el-col>
      </el-row>
      <el-row :gutter="40" class="section-one">
        <el-col :span="4"><div class="data-list"><span>总数据:100</span></div></el-col>
        <el-col :span="4"><div class="data-list"><span>注册用户:20</span></div></el-col>
        <el-col :span="4"><div class="data-list"><span>订单:60</span></div></el-col>
        <el-col :span="4"><div class="data-list"><span>管理员:80</span></div></el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
  import headTop from '@/components/HeadTop'

  export default {
    name: "",
    components: {
      headTop
    }
  }
</script>

<style scoped>
  .data-section{
    background-color: darkkhaki;
    text-align: center;
    padding: 20px;
  }
  .section-one{
    margin: 20px;
  }
  .data-list{
    background-color:yellowgreen;
    border-radius: 6px;
  }
</style>

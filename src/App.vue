<template>
  <div id="app">

    <p>
      <router-link to="/">home</router-link>
      ||
      <router-link to="/hi">hi page</router-link>
      ||
      <router-link to="/hi/hiOne">hi page child one</router-link>
      ||
      <router-link to="/hi/hiTwo">hi page child two</router-link>
    </p>

    <router-view/>


  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

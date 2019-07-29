<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {}
    }
  }
</script>

<style>
  #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: gray;
  }
</style>

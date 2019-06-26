<template>
  <div id="app">
    <p>route_name: {{$route.name}}</p>
    <p>
      <router-link to="/">home</router-link>
      ||
      <router-link to="/hi">hi page</router-link>
      ||
      <router-link to="/params/192/ken ken 啊">params</router-link>
      ||
      <router-link to="/goBack">go back</router-link>
    </p>

    <router-view/>
    <router-view name="left" style="float: left;width: 50%;background-color: #ccc;height: 300px;"/>
    <router-view name="right" style="float: right;width:50%;background-color: #c0c;height: 300px;"/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        one: {
          name: '/hi/hiOne',
          params: {userName: 'ken-one'}
        },
        two: {
          name: '/hi/hiTwo',
          params: {age: '20-two'}
        }
      }
    },
    watch: {
      '$route'(to, from) {
        console.log('app');
        console.log(to);
        console.log('-----------')
        console.log('from:' )
        console.log(from)
      }
    }
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

<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
  import Navbar from './components/nav/Navbar';

  export default {
    name: 'App',
    components: { Navbar },
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

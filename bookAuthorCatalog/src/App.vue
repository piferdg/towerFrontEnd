<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: 'App',
  components: {
    Header,
  },
  
}
</script>

<style>
#app {
  background: url('./assets/library.jpg');
  min-height: 100vh;
  
}
</style>

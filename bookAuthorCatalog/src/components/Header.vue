<template>
  <router-link to='/' class="header">
    <img src= "../assets/logo.jpg" alt="Reads Logo">
    <h1>Galvanize Reads</h1> 
  </router-link>
</template>

<script>

export default {
  name: 'Header',
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
  display: flex;
  text-decoration: none;
  
}

.header h1 {
  font-size: 50px;
  color: white;
  -webkit-text-stroke: 1px black;
}

</style>
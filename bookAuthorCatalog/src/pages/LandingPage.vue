<template>
  <div class="landing-page">
    <router-link to="/books" class="books-main">
      <img src="../assets/books.jpg" alt="Book">
      <h2>Books</h2>
    </router-link>
    <router-link to="/authors" class="authors-main">
      <img src="../assets/twain.jpg" alt="Author">
      <h2>Authors</h2>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'LandingPage',
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.landing-page {
  display: flex;
  justify-content: space-around;
}

.landing-page h2 {
 text-align: center
}

</style>
<template>
  <div class="sidebar">
    <router-link to="/authors" class="authors">
      <img class="author-img" src="../assets/twain.jpg" alt="author">
      <h2>Authors</h2>
    </router-link>
    <router-link to="/books" class="books">
      <img class="book-img" src="../assets/books.jpg" alt="book">
      <h2>Books</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>

.sidebar {
  padding-top: 1vw;
}

  .books {
    border: 1px solid black;
    height: 18vw;
    width: 8vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    color: black;
    background-color:rgb(255, 255, 255, 0.8);
  }

  .book-img {
    border: 1px solid black;
    height: 5vw;
    width: 5vw;
  }

  .authors {
    border: 1px solid black;
    height: 18vw;
    width: 8vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    color: black;
    background-color:rgb(255, 255, 255, 0.8);

  }

  .author-img {
    border: 1px solid black;
    height: 5vw;
    width: 5vw;
  }

  h2 {
    writing-mode:vertical-lr;
    text-orientation: upright;
  }

</style>
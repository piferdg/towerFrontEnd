<template>
  <div class="book-card">
    <h2>{{bookTitle}}</h2>
    <img :src='bookCover'>
    <h5>Genre: {{bookGenre}}</h5>
    <p>About this book:<br> {{bookDescription}}</p>
    <button variant="primary" @click="this.deleteAuthor" :id='bookId' type="button" name="button">Delete</button>
  </div>
</template>

<script>

export default {
  name: 'BookCard',

  props: {
    bookTitle: String,
    bookGenre: String,
    bookDescription: String,
    bookCover: String,
    bookId: Number
  },

  methods: {
    deleteAuthor (event, bookId) {
      fetch('https://tower-project-bookcatalog.herokuapp.com/books/' + this.bookId, {
        method: 'DELETE'
      })       
    }
  }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.book-card {
  border: 1px solid black;
  padding: 5px;
}

.book-card img{
  border: 1px solid black;
  height: 18vw;
}

</style>
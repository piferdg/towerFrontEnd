<template>
  <div class="books-main">
    <h1>Books!</h1>
  </div>
</template>

<script>

export default {
  name: 'Books',
 
  data() {
    return {
      books: [],
    }
  },

  methods: {
    populateBooks() {
      fetch("https://tower-project-bookcatalog.herokuapp.com/books")
        .then(response => response.json())
        .then(response => {
          this.books = response.books;
        });
        console.log('BOOKS', this.books) 
  }
},
mounted() {
    this.populateBooks()
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
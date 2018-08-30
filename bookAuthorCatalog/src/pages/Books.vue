<template>
  <div class="books-main">
    <Sidebar />
    <div class="book-container">
      <BookCard v-for="book in books" :bookTitle='book.title' :bookGenre='book.genre' :bookDescription='book.description' :bookCover='book.cover_url' :bookId='book.id' :key='book.id'/>
    </div>
    <router-link to="/bookadd">
      <button>Add Book</button>
    </router-link>
  </div>
</template>

<script>
import BookCard from "../components/BookCard"
import Sidebar from "../components/Sidebar"
export default {
  name: 'Books',
  components: {
    BookCard,
    Sidebar
  },
 
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
<style scoped>

.books-main {
  display: flex;
  justify-content: flex-start
}

.book-container {
  margin: 1vw;
  background-color:rgb(255, 255, 255, 0.8);
  width: 75vw;
  margin-left: 6vw;
}

</style>


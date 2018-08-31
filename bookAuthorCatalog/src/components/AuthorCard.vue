<template>
  <div class="author-card">
    <h2>{{authorFirstName + ' ' + authorLastName}}</h2>
    <img :src='authorImage'>
    <p>About the author:<br> {{authorBio}}</p>
    <button variant="primary" @click="this.deleteAuthor" :id='authorId' type="button" name="button">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'AuthorCard',

  props: {
    authorFirstName: String,
    authorLastName: String,
    authorBio: String,
    authorImage: String,
    authorId: Number,
    authorIndex: Number
  },

  methods: {
    deleteAuthor (event, authorId) {
      fetch('https://tower-project-bookcatalog.herokuapp.com/authors/' + this.authorId, {
        method: 'DELETE'
      })
  }
}
}
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.author-card {
  border: 1px solid black;
  padding: 5px;
}

</style>
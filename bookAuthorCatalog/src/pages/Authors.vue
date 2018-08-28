<template>
  <div class="authors-main">
    <h1>Authors!</h1>
  </div>
</template>

<script>

export default {
  name: 'Authors',

  data() {
    return {
      authors: []

    }
  },

  methods: {
    populateAuthors() {
        fetch("https://tower-project-bookcatalog.herokuapp.com/authors")
        .then(response => response.json())
        .then(response => {
          this.authors = response.authors;
        });
        console.log('AUTHORS', this.authors)
    }
  },

  mounted() {
    this.populateAuthors()
  }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
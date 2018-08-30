<template>
  <div class="authors-main">
    <Sidebar />
    <div class='author-container'>
      <AuthorCard :authors='authors' v-for="(author, index) in authors" :authorFirstName='author.first_name' :authorLastName='author.last_name' :authorBio='author.bio' :authorImage='author.portrait_url' :authorId='author.id' :authorIndex='index' :key='author.id'/>
    </div>
    <router-link to="/authoradd">
      <button>Add Author</button>
    </router-link>
  </div>
</template>

<script>
import AuthorCard from "../components/AuthorCard"
import Sidebar from "../components/Sidebar"
export default {
  name: 'Authors',
  components: {
    AuthorCard,
    Sidebar
  },

  data() {
    return {
      authors: [],
    }
  },

  methods: {
    populateAuthors() {
        fetch("https://tower-project-bookcatalog.herokuapp.com/authors")
        .then(response => response.json())
        .then(response => {
          this.authors = response.authors;
        });
    }
  },

  mounted() {
    this.populateAuthors()
  }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.authors-main {
  display: flex;
  justify-content: flex-start;

}

.author-container {
  margin: 1vw;
  background-color:rgb(255, 255, 255, 0.8);
  width: 75vw;
  margin-left: 6vw;
}

</style>
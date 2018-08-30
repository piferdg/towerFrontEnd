<template>
  <div>
    <form v-on:submit.prevent='onSubmit' v-on:submit="resetForm">
      <input v-model="title" name="title" required placeholder="Book title"><br>
      <input v-model="genre" name="title" required placeholder="Genre"><br>
      <input v-model="cover_url" name="cover_url" required placeholder="Image URL"><br>
        <textarea id="textarea2" v-model="description" name="description" placeholder="Description..." :rows="3">
        </textarea>
      <button name="submit" value="submit" type="submit" variant="warning">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: null,
      genre: null,
      description: null,
      cover_url: null
    };
  },

  methods: {
    onSubmit() {
      console.log("Submit!");
      let newPost = {
        title: this.title,
        genre: this.genre,
        description: this.description,
        cover_url: this.cover_url
      };
      fetch("https://tower-project-bookcatalog.herokuapp.com/books", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: this.title,
          genre: this.genre,
          description: this.description,
          cover_url: this.cover_url
        })
      })
        .then(res => res.json())
        .then(() => {
          this.$emit("posted");
        });
    },
    //   console.log(newPost)

    resetForm() {
      this.title = null;
      this.genre = null;
      this.description = null;
      this.cover_url = null;
    }
  }
};
</script>

<style>

</style>
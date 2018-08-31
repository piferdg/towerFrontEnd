<template>
  <div>
    <div class="author-form">
      <form v-on:submit.prevent='onSubmit' v-on:submit="resetForm">
        <input v-model="first_name" name="first_name" required placeholder="First Name"><br>
        <input v-model="last_name" name="last_name" required placeholder="Last Name"><br>
        <input v-model="portrait_url" name="portrait_url" required placeholder="Image URL"><br>
          <textarea id="textarea2" v-model="bio" name="bio" placeholder="Biography..." :rows="3">
          </textarea><br>
        <button name="submit" value="submit" type="submit" variant="warning">Submit</button>
      </form>
    </div>
    <router-link to="/authors" class="back-to-authors">
      <h2>Back to Authors</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first_name: null,
      last_name: null,
      bio: null,
      portrait_url: null
    };
  },

  methods: {
    onSubmit() {
      console.log("Submit!");
      let newPost = {
        first_name: this.first_name,
        last_name: this.last_name,
        bio: this.bio,
        portrait_url: this.portrait_url
      };
      fetch("https://tower-project-bookcatalog.herokuapp.com/author", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          first_name: this.first_name,
          last_name: this.last_name,
          bio: this.bio,
          portrait_url: this.portrait_url
        })
      })
        .then(res => res.json())
        .then(() => {
          this.$emit("posted");
        });
    },

    resetForm() {
      this.first_name = null;
      this.last_name = null;
      this.bio = null;
      this.portrait_url = null;
    }
  }
};
</script>

<style scoped>

.back-to-authors h2 {
  color: white;
  margin-left: 40vw;
}

.author-form {
  margin-left: 40vw;
  margin-top: 10vw;
}

.author-form input {
  margin: 1vh;
}

.author-form textarea {
  margin: 1vh;
}

</style>
<template>
  <div>
    <form v-on:submit.prevent='onSubmit' v-on:submit="resetForm">
      <input v-model="first_name" name="first_name" required placeholder="First Name"><br>
      <input v-model="last_name" name="last_name" required placeholder="Last Name"><br>
      <input v-model="portrait_url" name="portrait_url" required placeholder="Image URL"><br>
        <textarea id="textarea2" v-model="bio" name="bio" placeholder="Biography..." :rows="3">
        </textarea>
      <button name="submit" value="submit" type="submit" variant="warning">Submit</button>
    </form>
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
    //   console.log(newPost)

    resetForm() {
      this.first_name = null;
      this.last_name = null;
      this.bio = null;
      this.portrait_url = null;
    }
  }
};
</script>

<style>
/* #modal1 {
    color: #007aff;
  }
  
  h6 {
    color: rosybrown;
  }
  
  .btn {
    width: 100%;
    margin-top: 0;
  }
  
  .btn-warning {
    background: linear-gradient(90deg, rgba(255, 185, 28, 1) 0%, rgba(255, 221, 58, 1) 50%, rgba(255, 215, 45, 1) 100%);
  }
  
  .btn-warning:hover {
    background-color: #e1ac74;
  }
  
  .btn-primary {
    display: none !important;
  }
  
  .btn-success {
    background-color: #ffdc36;
  } */
</style>
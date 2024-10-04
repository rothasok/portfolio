<template>
  <div>
    <h1>Programming Jokes</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <h2>{{ joke.setup }}</h2>
      <p>{{ joke.punchline }}</p>
      <button @click="fetchJoke">Get Another Joke</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      joke: {},
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.fetchJoke();
  },
  methods: {
    async fetchJoke() {
      this.loading = true;
      this.error = null;

      try {
        const response = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        this.joke = data[0]; // The response is an array, take the first joke
      } catch (error) {
        this.error = "Failed to load joke.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: #ffffff;
  padding-top: 40px;
}
button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>

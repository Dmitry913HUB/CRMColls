<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div v-for="(link, index) in links" :key="index">
        <label :for="'link-' + index">Link {{ index + 1 }}:</label>
        <input :id="'link-' + index" type="text" v-model="links[index]">
      </div>
      <button type="submit">Submit</button>
    </form>
    <div v-if="results">
      <p v-for="(result, index) in results" :key="index">Result {{ index + 1 }}:</p>
      <pre>{{ results }}</pre>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      links: ['https://storage.yandexcloud.net/ccscenario/00e55ba2bc529823c73edca5935b2366.json',
      'https://storage.yandexcloud.net/ccscenario/0497128d3f276247bdd751ba34cf5d80.json',
      'https://storage.yandexcloud.net/ccscenario/0b8ab09975fbd4589879351a6a51021d.json'],
      results: null
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('http://localhost:3000/processLinks', { links: this.links });
        this.results = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

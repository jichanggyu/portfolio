<template>
  <div id="app">
    <StrapHeader />
    <main>
      <section>
        <About />
      </section>
      <section>
    <div>
      <h2>Projects</h2>
    <div class="grid">
    <Card v-bind="specialProject" />
    <Card v-for="n in projects" v-bind:key="n" :name="n" />
    </div>
    </div>
      </section>
    </main>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import StrapHeader from './components/StrapHeader.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    Card,
    StrapHeader,
    About
  },
  data() {
    return {
      projects: ['Project01', 'Project02', 'Project03', 'Project04', 'Project05'],
      specialProject: {name: 'Hello World', desc: 'Greetings to the whole world and everyone in it!', icon: '🌍'}
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 80px;
}

main {
  max-width: 1000px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: 1fr;
  grid-gap: 10px;
  margin: 0 auto;
  max-width: 1000px;
}

h2 {
  text-align:left;
  padding: 0 10px;
  }

@media screen and (min-width: 999px) {
  section {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 999px) {
  .grid {
    max-width: 650px;
    grid-template-columns: repeat(2,1fr);
  }
}

@media screen and (max-width: 650px) {
  .grid {
    max-width: 350px;
    grid-template-columns: 100%;
  }
}
</style>

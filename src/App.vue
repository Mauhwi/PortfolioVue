<template>
  <div id="app">
    <Header />
    <AboutMe />
    <Skills />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
export default {
  name: 'App',
  components: {
    Header, AboutMe, Skills
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Varela+Round");
html, body {
  margin: 0px;
  padding: 0px;
}
#app {
font-family: "Varela Round", sans-serif;
}
</style>

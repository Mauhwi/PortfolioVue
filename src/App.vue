<template>
  <div id="app">
    <Header />
    <AboutMe />
    <Skills />
    <Education />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
export default {
  name: 'App',
  components: {
    Header, AboutMe, Skills, Education
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
html, body {
  margin: 0px;
  padding: 0px;
  min-width: 400px;
}
#app {
font-family: 'Nunito', sans-serif;
}
</style>

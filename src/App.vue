<template>
  <div id="app">
    <Header />
    <AboutMe />
    <Skills />
    <Education />
    <Contacts />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Contacts from './components/Contacts';
export default {
  name: 'App',
  components: {
    Header, AboutMe, Skills, Education, Contacts
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

a {
  text-decoration: none;
  color: #aaa;
  text-transform: uppercase;
  position: relative;
}
a,
a:after,
a:before {
  transition: all 0.5s;
}
a:hover {
  color: rgb(160, 81, 81);
}

a:after,
a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: ".";
  color: transparent;
  background: rgb(160, 81, 81);
  height: 1px;
}
a:hover:after {
  width: 100%;
}

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
    html, body {
    min-width: 320px;
    max-width: 480px;
  }
}
</style>

<template>
  <header class="header">
    <div class="localeselector">
      <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
    </div>
    <nav class="stroke">
      <ul>
        <li>
          <a href="#">{{ $t("message.aboutme") }}</a>
        </li>
        <li>
          <a href="#">{{ $t("message.skills") }}</a>
        </li>
        <li>
          <a href="#">Education</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
        <li>
          <a href="#">My Cat</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return { langs: ['EN', 'RU'] }
  }
};
</script>

<style scoped>
header {
  background: #1c1d22;
  position: relative;
}

.localeselector select {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #1c1d22;
  color: #aaa;
}

.localeselector option {
  background: #1c1d22;
  color: #aaa;
}

html {
  margin: 0px;
  padding: 0px;
}

nav {
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
}

nav ul {
  list-style: none;
  text-align: center;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: #aaa;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0 10px;
}
nav ul li a,
nav ul li a:after,
nav ul li a:before {
  transition: all 0.5s;
}
nav ul li a:hover {
  color: rgb(160, 81, 81);
}

nav.stroke ul li a,
nav.fill ul li a {
  position: relative;
}
nav.stroke ul li a:after,
nav.fill ul li a:after {
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
nav.stroke ul li a:hover:after {
  width: 100%;
}
</style>
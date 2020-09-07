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
          <a href="#aboutme">{{ $t("message.aboutme") }}</a>
        </li>
        <li>
          <a href="#skills">{{ $t("message.skills") }}</a>
        </li>
        <li>
          <a href="#education">{{ $t("message.education") }}</a>
        </li>
        <li>
          <a href="#contacts">{{ $t("message.contacts") }}</a>
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
  padding-inline-start: 0;
  list-style: none;
  text-align: center;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  display: block;
  padding: 15px;
  color: #aaa;
  font-weight: 800;
  margin: 0 10px;
}

nav ul li a:hover {
  color: rgb(160, 81, 81);
}
</style>
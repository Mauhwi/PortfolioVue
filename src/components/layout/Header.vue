<template>
  <header class="header">
    <nav class="stroke">
      <ul>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Skills</a>
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
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Varela+Round");
header {
  font-family: "Varela Round", sans-serif;
  background: #1c1d22;
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
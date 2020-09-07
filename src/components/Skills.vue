<template>
  <div class="skills" id="skills">
    <h1>{{ $t("message.skills") }}</h1>
    <div class="skills-nav center stroke">
      <ul>
        <li>
          <h3
            class="front-end"
            v-bind:class="{ active: frontIsActive }"
            v-on:click="markActive(); toggleContent()"
          >Front-end</h3>
        </li>
        <li>
          <h3
            class="back-end"
            v-bind:class="{ active: backIsActive }"
            v-on:click="markActive(); toggleContent()"
          >Back-end</h3>
        </li>
      </ul>
    </div>
    <div id="frontend" class="container">
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <div class="vl"></div>
      <p>{{ $t("message.frontendtext") }}</p>
    </div>
    <div id="backend" style="display: none" class="container">
      <ul>
        <li>Java</li>
      </ul>
      <div class="vl"></div>   
      <p>{{ $t("message.backendtext") }}</p>
    </div>
    <p class="githublink"><a href="https://github.com/Mauhwi" target="_blank">{{$t("message.github")}}</a></p>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      frontIsActive: true,
      backIsActive: false,
    };
  },
  methods: {
    markActive() {
      this.frontIsActive = !this.frontIsActive;
      this.backIsActive = !this.backIsActive;
    },
    toggleContent() {
      var x = document.getElementById("frontend");
      var y = document.getElementById("backend");
      if (x.style.display === "none") {
        x.style.display = "flex";
        x.style.justifyContent="center";
        y.style.display = "none";
      } else {
        y.style.display = "flex";
        y.style.justifyContent="center";
        x.style.display = "none";
      }
    },
  },
};
</script>

<style scoped>
.skills-nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding-inline-start: 0;
}

.container {
  padding: 20px 40px;
  display: flex;
  justify-content: center;
}

.container ul {
  list-style: none;
  padding-inline-start: 0px;
  color: #aaa;
  align-self: center;
  padding-right: 20px;
  font-size: 18px;
}


h3 {
  flex: 1 1;
  padding: 10px;
  text-decoration: none;
  color: #aaa;
  text-transform: uppercase;
  margin: 0 10px;
  cursor: pointer;
}

.skills {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: #1c1d22;
}
h1, .githublink {
  text-align: center;
  color: #aaa;
}
p {
  font-size: 18px;
  text-align: center;
  color: #aaa;
  max-width: 600px;
  padding: 0 20px;
}

.active {
  color: rgb(160, 81, 81);
  pointer-events: none;
  cursor: default;
  text-decoration: underline;
}

.vl {
  padding: 0, 4px;
  border-left: 1px solid #aaa;
  width: 1px;
}
</style>
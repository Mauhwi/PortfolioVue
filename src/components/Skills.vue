<template>
  <div class="skills">
    <h1>Skills</h1>
    <div class="skills-nav center stroke">
      <ul>
        <li>
          <a
            class="front-end"
            v-bind:class="{ active: frontIsActive }"
            v-on:click="markActive(); toggleContent()"
          >Front-end</a>
        </li>
        <li>
          <a
            class="back-end"
            v-bind:class="{ active: backIsActive }"
            v-on:click="markActive(); toggleContent()"
          >Back-end</a>
        </li>
      </ul>
    </div>
    <p id="frontend">
      Hi! My name is Darya, and I'm a fresh university graduate
      looking for a front-end internship.
    </p>
    <p id="backend">
      Hi! My name is Yoshikage Kira, I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink.
    </p>
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
        x.style.display = "block";
        y.style.display = "none";
      } else {
        y.style.display = "block";
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

a {
  flex: 1 1;
  padding: 10px;
  text-decoration: none;
  color: #aaa;
  text-transform: uppercase;
  margin: 0 10px;
  cursor: pointer;
}

.skills {
  padding: 30px;
  background: #1c1d22;
}
h1 {
  text-align: center;
  color: #aaa;
}
p {
  padding: 20px;
  flex: 80%;
  text-align: center;
  color: #aaa;
}

.active {
  color: rgb(160, 81, 81);
  pointer-events: none;
  cursor: default;
  text-decoration: underline;
}
</style>
<template>
    <div class="about">
        <div class="background-image"></div>
        <div class="content">
            <h1>About Me</h1>  
        <h3>Hi! My name is Darya, and I'm a fresh university graduate 
            looking for a front-end internship.</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutMe"
}
</script>

<style scoped>
    .about {
        background-image: url('https://i.imgur.com/W8E532e.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 140px;
        padding: 100px;
    }
    h1 {
        text-align: center;
    }
    h3 {
        text-align: center;
        font-weight: 400;
    }
</style>
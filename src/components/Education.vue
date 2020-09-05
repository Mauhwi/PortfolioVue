<template>
    <div class="education">
        <div class="content">
            <h1>{{ $t("message.education") }}</h1>  
        <h3>{{ $t("message.educationdetails") }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "Education"
}
</script>
<style scoped>
    .education {
        min-height: 120px;
        padding: 60px;
        background-color: rgba(170, 170, 170, 0.411);
    }
    h1 {
        text-align: center;
    }
    h3 {
        text-align: center;
        font-weight: 600;
    }
</style>
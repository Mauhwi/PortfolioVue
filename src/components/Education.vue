<template>
    <div class="education" id="education">
        <div class="content">
            <h1>{{ $t("message.education") }}</h1> 
            <div class="education-container">
                <h3 class="university">{{ $t("message.university") }}</h3>
                <h3 class="details">{{$t('message.educationdetails')}}</h3>
                <h3 class="year">{{$t('message.educationyear')}}</h3>
            </div> 
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
        padding: 36px;
        background-color: rgba(170, 170, 170, 0.411);
    }

    .education-container {
        padding: 18px 0;
        margin: auto;
        max-width: 400px;
        align-self: center;
    }
    h1 {
        text-align: center;
    }
    .university {
        padding-left: 18px;
        text-align: left;
    }
    .details {
        text-align: center;
    }
    .year {
        text-align: right;
        padding-right: 18px;

    }

    @media screen and (min-width: 900px) {
        .education-container {
        max-width: 600px;
        }
    }

    @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
        .education-container {
        min-width: 320px;
        max-width: 480px;
        }
    }

    
</style>
<template>
    <div class="contacts">
        <div class="content">
            <h1>{{ $t("message.contacts") }}</h1>
            <div class="contact-info"> 
                <div class="location-info flex-row">
                    <p class="location-info">{{ $t("message.city") }}</p>
                    <div class="vl"></div>
                </div>
                <div class="mail-phone">
                    <p>+7 (951) 450-66-56</p>
                    <p>darmit074@gmail.com</p>  
                </div> 
            </div>
            <p class="hh-link"><a href="https://chelyabinsk.hh.ru/resume/871754d9ff084767c90039ed1f367556504578">{{ $t("message.headhunter") }}</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contacts",
}
</script>

<style scoped>
    .contacts {
        padding: 30px;
        background: #1c1d22;
        color: #aaa;   
    }

    .content {
        font-size: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-info {
        display: flex;
        align-items: center;
    }

    .location-info {
        max-width: 420px;
        padding: 20px 10px;
        padding-left: 0;
    }
    .mail-phone {
       padding: 10px;
    }
    .vl {
    padding: 0, 4px;
    border-left: 1px solid #aaa;
    width: 1px;
    margin: 8px 0;
    }

    .flex-row {
        display: flex;
    }
</style>
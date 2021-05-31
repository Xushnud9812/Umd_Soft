<template>
    <div>
        <div class="head">
            <div class="login">
                <img class="close" src="@/assets/img/closeLogin.png" alt="">
                <h1>
                    Заполните форму прямо сейчас и получите квалифицированную
                </h1>
                <v-text-field
                :rules="required"
                    label=""
                    placeholder="Ф.И.О "
                ></v-text-field>
                <v-text-field
                    label=""
                    placeholder="Номер телефоSна"
                    value="+998"
                ></v-text-field>
                <v-text-field
                    label=""
                    placeholder="Удобное время звонка "
                ></v-text-field>
            </div>
            <img class="fon" src="@/assets/img/OBJECTS.png" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
*{
    pointer-events: none;
}
.head {
    
    width: 100vw;
    height: 600px;
    background: #9bc3f6;
    img.fon{
        left: 202px;
    top: 0;
    position: absolute;
    z-index: 122;
    }
    
}
.login {
        position: absolute;
    z-index: 122;
    left: 50%;
    transform: translate(-50%, 50px);
    width: 702px;
    height: 484px;
    margin: 0px auto;
    padding: 50px;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    h1 {
        margin-top: 10px;
        margin-bottom: 40px;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 134.3%;
        text-align: center;
        color: #1e6bdd;
    }
    img.close{
        position: absolute;
        right: 10px;
        top: 10px;
    }   
}
</style>

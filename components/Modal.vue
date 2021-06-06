<template>
    <div>
        <v-row justify="center">
            <!-- <v-btn color="primary" dark @click="dialog = true">
                Open Dialog
            </v-btn> -->

            <v-dialog
                v-model="dialog"
                max-width="702"
                @click:outside="clickOutside"
            >
                <v-card>
                    <div class="headone"> 
                        <!-- <div class="close">
                                x
                            </div> -->
                        <div class="login">
                           
                            <!-- <img
                                class="close"
                                src="@/assets/img/closeLogin.png"
                                alt=""
                                @click="dialog = false"
                            /> -->
                            <h1>
                                Заполните форму прямо сейчас и получите
                                квалифицированную
                            </h1>
                            
                            <v-text-field class="inputss"
                                :rules="required"
                                label=""
                                placeholder="Ф.И.О "
                            ></v-text-field>
                            <v-text-field class="inputss"
                                          type="number"
                                label=""
                                placeholder="Номер телефона"

                            ></v-text-field>
                            <v-text-field class="inputss"
                            type="time"
                                label=""
                                placeholder="Удобное время звонка "
                            ></v-text-field>

                            <v-text-field class="inputss"
                            type="text"
                                label=""
                                placeholder="Описание"
                            ></v-text-field>



<!--                            <v-text-field class="inputss"-->
<!--                                          type="textarea"-->
<!--                                          label=""-->
<!--                                          placeholder="Удобное время звонка "-->
<!--                            ></v-text-field>-->

                            <button>Заказат проект</button>
                        </div>
                    </div>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>
<script>
export default {
    computed: {
        dialog() {
            return this.$store.state.dialog;
        }
    },
    methods: {
        clickOutside() {
            this.$store.commit("changeButton");
        }
    }
};
</script>

<style lang="scss" scoped>
h1 {
    margin-bottom: 100px;
}

.headone {
    height: 484px;
    background: #f6f6f6;
}
.login {
    position: absolute;
    z-index: 122;
    left: 50%;
    transform: translate(-50%, 0px);
    width: 702px;
    height: 484px;
    margin: 0px auto;
    padding: 25px 50px;
    // background: rgba(255, 255, 255, 0.5);
    background-color: transparent;
    backdrop-filter: blur(5px);
    border-radius: 10px;
    h1 {
        margin-top: 10px;
        margin-bottom: 40px;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        // line-height: 134.3%;
        text-align: center;
        color: #1e6bdd;
    }

    button {
        width: 100%;
        border-radius: 5px;
        padding: 12px 16px;
        margin-top: 20px;
        transition: 0.3s ease;
        border: 1px solid #1e6bdd;
        background: #1e6bdd;
        color: #fff;
    }

    button:hover {
        border: 1px solid #1e6bdd;
        color: #1e6bdd;
        background: #fff;
    }
}

    @media (min-width: 340px) and (max-width: 576px){
        .headone{
            padding-top: 30px;
            //width: 300px;
            .login{
                padding: 0;
                width: 300px;
                h1{
                    font-size: 18px;
                    display: flex;
                    // margin-top: 30px;    
                    // margin-bottom: 20px;
                    // line-height: 35px;

                }
                .inputss{
                    font-size: 13px;
                    // margin-top: 20px;
                }
                button{
                    margin-top: 10px;
                }
            }
        }
    }
    @media (min-width: 576px) and (max-width: 768px){
        .headone{

            //width: 300px;
            .login{
                padding: 0;
                width: 300px;
                h1{
                    font-size: 19px;
                    display: flex;
                    margin-top: 30px;
                    margin-bottom: 20px;
                    line-height: 35px;

                }
                .inputss{
                    font-size: 14px;
                    margin-top: 20px;
                }
                button{
                    margin-top: 10px;
                }
            }
        }
    }
    @media (min-width: 768px) and (max-width: 960px){
        .headone{

            //width: 300px;
            .login{
                padding: 0;
                width: 300px;
                h1{
                    font-size: 19px;
                    display: flex;
                    margin-top: 30px;
                    margin-bottom: 20px;
                    line-height: 35px;

                }
                .inputss{
                    font-size: 14px;
                    margin-top: 22px;
                }
                button{
                    margin-top: 10px;
                    /*margin-bottom: 40px;*/
                }
            }
        }
    }
</style>

<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="row ">
                    <div class="col-md-4 col-6 left">
                        <h1>
                          Заказать 
приложения
                        </h1>
                        <button @click="modal" class="">Заказат проект</button>
                    </div>
                    <div class="col-md-8 right">
                        <img src="@/assets/img/mobileimg.png" alt="" />
                        <!-- <img src="@/assets/img/Group.png" alt="" /> -->
                    </div>
                </div>
            </div>
        </div>

        <u-animate-container>
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6  col boxs">
                        <u-animate
                            name="fadeIn"
                            delay="0.5s"
                            duration="2s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <div class="box ">
                                <img src="@/assets/img/Group (1).png" alt="" />
                                <h2>Landing page</h2>
                                <p>
                                    Получиили бесценный опыт идоверие клиентов
                                </p>
                            </div>
                        </u-animate>
                    </div>
                    <div class="col-md-3 col-sm-6 boxs">
                        <u-animate
                            name="fadeIn"
                            delay="0.7s"
                            duration="2s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <div class="box down">
                                <img src="@/assets/img/Group (2).png" alt="" />
                                <h2>Интернет магазин
</h2>
                                <p>
                                  Экономим на времени,но не экономим на качестве
                                </p>
                            </div>
                        </u-animate>
                    </div>
                    <div class="col-md-3 col-sm-6 boxs">
                        <u-animate
                            name="fadeIn"
                            delay="1s"
                            duration="2s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <div class="box">
                                <img src="@/assets/img/Group (3).png" alt="" />
                                <h2>Многостраничные сайты
</h2>
                                <p>Наша цель-сделать Ваш бизнес эффективне</p>
                            </div>
                        </u-animate>
                    </div>
                    <div class="col-md-3 col-sm-6 boxs">
                        <u-animate
                            name="fadeIn"
                            delay="1.3s"
                            duration="2s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <div class="box down">
                                <img src="@/assets/img/Group (4).png" alt="" />
                                <h2>Мобильные приложения
</h2>
                                <p>
                                  Найдем наилучшее решение для каждой задачи и каждого человека
                                </p>
                            </div>
                        </u-animate>
                    </div>
                </div>
            </div>
        </u-animate-container>


       

        <u-animate-container>
            <div class="container main">
                <div class="row">
                    <div class="col-md-3 col-12">
                        <u-animate
                            name="fadeIn"
                            delay="0s"
                            duration="2s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <h1>Наши Cтеки</h1>
                            <div class="pag">
                                <button
                                    data-v-21137603=""
                                    data-v-3d1a4f76=""
                                    type="button"
                                    data-role="none"
                                    class="slick-arrow slick-prev slick-disabled"
                                    style="display: block; prew"
                                >
                                    Previous
                                </button>
                                <button @click="bos">
                                    <img
                                        src="@/assets/img/Arrow 1.png"
                                        alt=""
                                    />
                                </button>
                                <img src="@/assets/img/Arrow 2.png" alt="" />
                            </div>
                        </u-animate>
                    </div>
                    <div class="col-md-9 col-12">
                        <div class="lan">
                            <Carousel v-bind="slickOptions">
                                <u-animate
                                    name="fadeIn"
                                    delay="0.5s"
                                    duration="2s"
                                    :iteration="1"
                                    :offset="0"
                                    animateClass="animate__animated animate__fadeInUp"
                                    :begin="false"
                                >
                                    <div class="card">
                                        <img
                                            src="@/assets/img/node.png"
                                            alt=""
                                        />
                                        <p>NodeJS</p>
                                    </div>
                                </u-animate>

                                <u-animate
                                    name="fadeIn"
                                    delay="0.8s"
                                    duration="2s"
                                    :iteration="1"
                                    :offset="0"
                                    animateClass="animate__animated animate__fadeInUp"
                                    :begin="false"
                                >
                                    <div class="card">
                                        <img
                                            src="@/assets/img/Vue.png"
                                            alt=""
                                        />
                                        <p>Vue</p>
                                    </div>
                                </u-animate>

                                <u-animate
                                    name="fadeIn"
                                    delay="1.1s"
                                    duration="2s"
                                    :iteration="1"
                                    :offset="0"
                                    animateClass="animate__animated animate__fadeInUp"
                                    :begin="false"
                                >
                                    <div class="card">
                                        <img
                                            src="@/assets/img/Python.png"
                                            alt=""
                                        />
                                        <p>Python</p>
                                    </div>
                                </u-animate>

                                <u-animate
                                    name="fadeIn"
                                    delay="1.4s"
                                    duration="2s"
                                    :iteration="1"
                                    :offset="0"
                                    animateClass="animate__animated animate__fadeInUp"
                                    :begin="false"
                                >
                                    <div class="card">
                                        <img
                                            src="@/assets/img/React.png"
                                            alt=""
                                        />
                                        <p>React</p>
                                    </div>
                                </u-animate>
                                <u-animate
                                    name="fadeIn"
                                    delay="1.4s"
                                    duration="2s"
                                    :iteration="1"
                                    :offset="0"
                                    animateClass="animate__animated animate__fadeInUp"
                                    :begin="false"
                                >
                                    <div class="card">
                                        <img
                                            src="@/assets/img/adobe-x.png"
                                            alt=""
                                        />
                                        <p>Xd</p>
                                    </div>
                                </u-animate>
                                <u-animate
                                    name="fadeIn"
                                    delay="1.4s"
                                    duration="2s"
                                    :iteration="1"
                                    :offset="0"
                                    animateClass="animate__animated animate__fadeInUp"
                                    :begin="false"
                                >
                                    <div class="card">
                                        <img
                                            src="@/assets/img/adobe-x.png"
                                            alt=""
                                        />
                                        <p>Xd</p>
                                    </div>
                                </u-animate>
                            </Carousel>
                        </div>

                        <div></div>
                    </div>
                </div>
            </div>
        </u-animate-container>

        <oplata />

        <u-animate-container>
            <u-animate
                name="fadeIn"
                delay="0.5s"
                duration="2s"
                :iteration="1"
                :offset="0"
                animateClass="animate__animated animate__fadeInUp"
                :begin="false"
            >
                <div class="container-fluid four">
                    <div class="form">
                        <h1>
                            Заполните форму прямо сейчас и получите
                            квалифицированную
                        </h1>

                        <div class="tab" v-if="tabIndex == 1">
                            <v-app id="inspire">
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                >
                                    <p>Название организации</p>
                                    <v-text-field
                                        value=""
                                        v-model="name"
                                        :rules="nameRules"
                                        required
                                        label=""
                                        placeholder="Пример : UMDSOFT "
                                        @keypress.enter="nextTab"
                                    ></v-text-field>
                                </v-form>
                            </v-app>
                            <div class="img">
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkFalse.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkFalse.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkFalse.png" alt="" />
                            </div>
                            <div class="pagtwo">
                                <img src="@/assets/img/Arrow 1.png" alt="" />

                                <button :disabled="!valid" @click="validate">
                                    <img
                                        src="@/assets/img/Arrow 2.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                        <div class="tab" v-if="tabIndex == 2">
                            <v-app id="inspire">
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                >
                                    <p>Ф.И.О</p>
                                    <v-text-field
                                        value=" "
                                        v-model="name"
                                        :rules="nameRules"
                                        required
                                        label=""
                                        placeholder="Пример : Насимов Мироншох "
                                        @keypress.enter="nextTab"
                                        autofocus
                                    ></v-text-field>
                                </v-form>
                            </v-app>

                            <div class="img">
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkFalse.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkFalse.png" alt="" />
                            </div>
                            <div class="pagtwo">
                                <button @click="prewTaba">
                                    <img
                                        src="@/assets/img/Arrow 1.png"
                                        alt=""
                                    />
                                </button>

                                <button :disabled="!valid" @click="validate">
                                    <img
                                        src="@/assets/img/Arrow 2.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                        <div class="tab" v-if="tabIndex == 3">
                            <v-app id="inspire">
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                >
                                    <p>Номер телефона</p>
                                    <v-text-field
                                        type="number"
                                        v-model="name"
                                        :rules="nameRules"
                                        required
                                        label=""
                                        @keypress.enter="nextTab"
                                        autofocus
                                        value="+998"
                                    ></v-text-field>
                                </v-form>
                            </v-app>

                            <div class="img">
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkFalse.png" alt="" />
                            </div>
                            <div class="pagtwo">
                                <button @click="prewTaba">
                                    <img
                                        src="@/assets/img/Arrow 1.png"
                                        alt=""
                                    />
                                </button>

                                <button @click="validate">
                                    <img
                                        src="@/assets/img/Arrow 2.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                        <div class="tab" v-if="tabIndex == 4">
                            <p>Удобное время звонка</p>
                            <v-text-field
                                type="time"
                                label=""
                                placeholder="-- : --"
                            ></v-text-field>

                            <div class="img">
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkTrue.png" alt="" />
                            </div>
                            <div class="pagtwo">
                                <button @click="prewTaba">
                                    <img
                                        src="@/assets/img/Arrow 1.png"
                                        alt=""
                                    />
                                </button>

                                <img src="@/assets/img/Arrow 2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </u-animate>
        </u-animate-container>
    </div>
</template>

<script>
import oplata from "../components/oplata.vue";
export default {
    components: { oplata },

    data() {
        return {
            slickOptions: {
                // dots: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 2,
                draggable: true,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            infinite: false,
                            slidesToScroll: 4,
                            dots: true,
                            draggable: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            dots: true,
                            slidesToShow: 2,
                            speed: 1500,
                            touchThreshold: 1000,
                            autoplay: true,
                            autoplaySpeed: 3000,
                            infinite: true,
                            slidesToScroll: 1,
                            draggable: true
                        }
                    }
                ]
            },
            nightMode: false,
            tabIndex: 1,
            ex2: { color: "silver" },
            model: 0,
            page: 1,
            data: [],
            valid: true,
            name: "",
            nameRules: [v => !!v || " required"]
        };
    },

    methods: {
        modal() {
            this.$store.commit("changeButton");
            // clickoutside(changeButton)
        },
        validate() {
            this.$refs.form.validate();
            this.nextTab();
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
        bos() {
            let btn = document.querySelector(".prew");
            btn;
        },
        nextTab() {
            this.tabIndex = this.tabIndex + 1;
        },
        prewTaba() {
            this.tabIndex = this.tabIndex - 1;
        }
    }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap");
* {
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
    transition: 0.5s ease;
    // pointer-events: none;
    // user-select: none;
}
img {
    pointer-events: none;
}
.design {
    img {
        margin-top: -60px;
    }
    h1 {
        font-style: normal;
        font-weight: 600;
        font-size: calc(1.375rem + 1.5vw);
        line-height: 72px;
        margin-top: 20px;
        color: #1e6bdd;
    }
    p {
        margin: 25px 0;
        font-style: normal;
        font-weight: 500;
        font-size: calc(0.475rem + 1.5vw);
        line-height: 36px;
        color: #000000;
    }
    // .little {
    //     width: 82%;
    // }
    .littlecard {
        padding: 15px;
        // width: 166px;
        height: 141px;
        background: #f6f6f6;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        .txt {
            margin-top: 20px;
            p {
                margin-top: 10px;
                font-weight: 500;
                font-size: 18px;
                line-height: 141.3%;
                color: #202020;
            }
        }

        svg {
            height: 60px;
            margin-bottom: 10px;
        }
    }
}

.img {
    width: 270px;
    margin: 0 auto;
}
.header {
    // height: 640px;
    margin-top: 60px;
    width: 100%;
    .left {
        padding-top: 200px;
        h1 {
            font-style: normal;
            font-weight: 600;
            font-size: 48px;
            line-height: 141.3%;
        }
        button {
            margin-top: 10px;

            padding: 10px 12px;
            background: #1e6bdd;
            color: #fff;
            border-radius: 5px;
            transition: 0.3s ease;
            border: 1px solid #1e6bdd;
        }
        button:active {
            outline: none;
        }
        button:focus {
            outline: none !important;
        }
        button:hover {
            background: #fff;
            color: #1e6bdd;
            border: 1px solid #1e6bdd;
        }
    }
    .right {
        display: flex;
        justify-content: flex-end;
        img {
            width: 80%;
        }
    }
}

.down {
    margin-top: 30px;
}

.boxs {
    padding: 20px;
    margin-top: 40px;
    .box {
        height: 300px;
        border-radius: 5px 0px;
        border-top: 7px solid #1e6bdd;
        background: #f6f6f6;
        padding: 20px;
        transition: 0.2s ease;
        // cursor: pointer;
        h2 {
            margin-top: 30px;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 141.3%;
            color: #1e6bdd;
        }
        p {
            margin-top: 20px;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 141.3%;
            color: #000000;
        }
    }
    .box:hover {
        transform: translateY(-10px);
        // transform: scale(1.05);
        // margin-top: -10px;
    }
}

.two {
    margin-top: 100px;
}
.main {
    padding: 50px 0;
}

.three {
    margin-left: 100px;
}
.card {
    background: #f6f6f6;
    padding: 20px 20px;
    margin-left: 40px;
    width: 178px;
    height: 240px;
    cursor: pointer;
    transition: 0.5s ease;
    border-radius: 5px;
    img {
        width: 107px;
        height: 105px;
        margin: 0 auto;
    }
    p {
        margin-top: 30px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #1e6bdd;
        text-align: center;
    }
}
.card:hover {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
}
.pag {
    margin: 150px 0 0 0px;
    img {
        margin-left: 50px;
    }
}
.four {
    margin-top: 30px;
    background: #f6f6f6;
    padding-top: 50px;
    padding-bottom: 60px;
    .form {
        padding: 40px 80px;
        width: 793px;
        height: 403px;
        background: #ffffff;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin: 0 auto;
        .pagtwo {
            margin: 50px 35%;
            img {
                margin-left: 20px;
            }
        }
        h1 {
            font-style: normal;
            font-weight: 600;
            text-align: center;
            font-size: 32px;
            line-height: 134.3%;
            color: #1e6bdd;
        }
        p {
            margin-top: 30px;
            font-style: normal;
            font-weight: normal;
            font-size: 23px;
            line-height: 141.3%;
            color: #202020;
        }
    }
}
.v-application--wrap {
    min-height: auto !important;
}

@media (min-width: 1025px) and (max-width: 1280px) {
}

@media (min-width: 950px) and (max-width: 1024px) {
    .narx {
        width: auto !important;
    }
    v-container {
        padding: 0;
    }
    .down {
        margin-top: 0;
    }
}

@media (min-width: 768px) and (max-width: 950px) {
    .right {
        display: none;
    }
    .pag {
        display: none;
    }
    .design {
        img {
            display: none;
        }
    }

    v-container {
        padding: 0;
    }
    .down {
        margin-top: 0;
    }
    .form {
        width: 75% !important;
    }
    .left {
        h1 {
            font-size: 40px;
        }
        button {
            font-size: 14px;
        }
    }
    .right img {
        width: 100%;
        margin-top: 110px;
    }
    .full {
        h1 {
            font-size: 40px;
        }
    }
}

@media (min-width: 577px) and (max-width: 767px) {
    .pag {
        display: none;
    }
    .design {
        img {
            display: none;
        }
    }
    .header {
        margin-bottom: 20px;
    }
    .boxs {
        margin-top: 0;
        .box {
            height: 265px;
            h2 {
                font-size: 20px;
            }
        }
    }
    .right {
        display: none;
    }
    .littlecard {
        img {
            display: none !important;
        }
    }

    .form {
        width: auto !important;
    }
    .down {
        margin-top: 0;
    }

    .four {
        .form {
            h1 {
                font-size: 23px;
            }
            p {
                font-size: 20px;
            }
            .pagtwo {
                margin: 40px 30%;
            }
        }
    }
    .full {
        h1 {
            font-size: 30px;
        }
    }
}

@media (min-width: 330px) and (max-width: 576px) {
    .hedaer {
        .left {
            padding-top: 30px !important;
        }
    }

    .pag {
        display: none;
    }
    .lan {
        .card {
            margin-left: 0;
        }
    }
    .header {
        .right {
            display: none;
        }
    }
    .col-md-2 {
        display: none;
    }

    .four {
        .form {
            width: auto !important;
            h1 {
                font-size: 18px;
            }
            p {
                font-size: 16px;
            }
            .pagtwo {
                margin: 45px 20%;
            }
        }
    }

    .boxs {
        margin-top: 0;
    }
    .down {
        margin-top: 0;
    }
    .design {
        .little {
            // width: 100%;
            margin-top: 10px;
            .littlecard {
                // width: 145px;
                padding: 12px;
                .txt {
                    p {
                        font-size: 16px;
                    }
                }
            }
        }
        p {
            margin: 0;
        }
        img {
            display: none;
        }
    }
}
</style>

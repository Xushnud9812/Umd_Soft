<template>
    <div>
        <anime />

        <u-animate-container>
            <div class="wrap">
                <div class="container">
                    <div class="row asl">
                        <div class="col-md-6 col-sm-12 order-md-1 order-2 left">
                            <u-animate
                                name="fadeIn"
                                delay="0s"
                                duration="1.5s"
                                :iteration="1"
                                :offset="0"
                                animateClass="animate__animated animate__fadeInUp"
                                :begin="false"
                            >
                                <h1>О нас</h1>
                                <p>
                                    Качественный сайт – это основа продвижения
                                    Вашего бизнеса в интернете. Он создаёт имидж
                                    компании и увеличивает Ваши продажи 24/7. Мы
                                    сделаем для Вас рабочий инструмент, который
                                    значительно поможет в развитии бизнеса.
                                    Качественный сайт – это основа продвижения
                                    Вашего бизнеса в интернете. Он создаёт имидж
                                    компании и увеличивает Ваши продажи 24/7. Мы
                                    сделаем для Вас рабочий инструмент, который
                                    значительно поможет в развитии бизнеса.
                                </p>
                                <div class="lan">
                                    <span>Подробнее</span>
                                </div>
                                <img src="@/assets/img/Arrow 2.png" alt="" />
                            </u-animate>
                        </div>

                        <div
                            class="col-md-6 col-sm-12 order-md-2 order-1  right"
                        >
                            <u-animate
                                name="fadeIn"
                                delay="0.2s"
                                duration="1.5s"
                                :iteration="1"
                                :offset="0"
                                animateClass="animate__animated animate__fadeInUp"
                                :begin="false"
                            >
                                <div class="img"></div>
                            </u-animate>
                        </div>
                    </div>
                </div>
            </div>
        </u-animate-container>

        <u-animate-container>
            <div class="container">
                <h1>Наши преимущества</h1>
                <div class="row">
                    <div class="col-md-3  col-6 tab">
                        <u-animate
                            name="fadeIn"
                            delay="0s"
                            duration="1.5s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <div class="box ">
                                <h2>Опыт</h2>
                                <p>
                                    Получиили бесценный опыт идоверие клиентов
                                </p>
                                <span>01</span>
                            </div>
                        </u-animate>
                    </div>

                    <div class="col-md-3 col-6 tab down">
                        <u-animate
                            name="fadeIn"
                            delay="0.2s"
                            duration="1.5s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <div class="box ">
                                <h2>Скорость</h2>
                                <p>
                                    Экономим на времени,но неэкономим на
                                    качестве
                                </p>
                                <span>02</span>
                            </div>
                        </u-animate>
                    </div>

                    <div class="col-md-3 col-6 tab">
                        <u-animate
                            name="fadeIn"
                            delay="0.4s"
                            duration="1.5s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <div class="box ">
                                <h2>Результат</h2>
                                <p>Наша цель-сделать Ваш бизнес эффективне</p>
                                <span>03</span>
                            </div>
                        </u-animate>
                    </div>

                    <div class="col-md-3 col-6 tab down">
                        <u-animate
                            name="fadeIn"
                            delay="0.6s"
                            duration="1.5s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <div class="box">
                                <h2>Индивидиульный подход</h2>
                                <p>
                                    Найдем наилучшее решение для каждой задачи и
                                    каждого человека
                                </p>
                                <span class="four">04</span>
                            </div></u-animate
                        >
                    </div>
                </div>
            </div>
        </u-animate-container>

        <service />

        <result />

        <wework />

        <team />

        <coment />

        <karta />
    </div>
</template>

<script>
import Coment from "../components/coment.vue";
import result from "../components/result.vue";
import Team from "../components/team.vue";
import wework from "../components/wework.vue";
import karta from "../components/karta.vue";
export default {
    components: { wework, Team, result, Coment, karta }
};

// data() {
//     return {
//         posts: null
//     };
// },
// async mounted() {
//     const posts = await this.$axios.$get(
//         "https://jsonplaceholder.typicode.com/posts"
//     );
//     this.posts = posts;
// }
</script>

<style lang="scss">
* {
    scroll-behavior: smooth;
    button:focus{
        outline: none;
    }
}
.wrap {
    background: #f6f6f6;
    padding: 20px 0;
    margin-bottom: 20px;
    .left {
        padding-right: 20px;
        h1 {
            font-weight: 600;
            font-size: 48px;
            line-height: 72px;
            color: #1e6bdd;
        }
        p {
            font-weight: normal;
            font-size: 16px;
            // line-height: 130%;
            color: #202020;
            margin-bottom: 40px;
        }
        .lan {
            margin: 100px 0 0 0px;
        }
        img {
            margin: -10px 0 0 55px;
        }
    }
}
.right {
    padding: 20px 0;
    div.img {
        margin-left: 110px;
        width: 470px;
        height: 400px;
        background: #ffffff;
        border: 2px solid #1e6bdd;
        box-sizing: border-box;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
    }
}

.down {
    margin-top: 30px;
}
.tab .box {
    margin-top: 30px;
    padding: 25px 10px;
    width: 250px;
    height: 295px;
    background: #f6f6f6;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px 0px;
    border-bottom: 8px solid #1e6bdd;
    overflow: hidden;
    h2 {
        font-weight: 600;
        font-size: 28px;
        line-height: 141.3%;
        color: #1e6bdd;
    }
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        // line-height: 141.3%;
        color: #000000;
    }
    span {
        font-style: normal;
        font-weight: bold;
        font-size: 160px;
        line-height: 120%;
        color: #ffffff;
        margin: 0px 0 0 90px;
    }
    span.four {
        // margin-top: -80px;
        line-height: 50%;
    }
}

.boxs {
    margin-bottom: 40px;
}

@media (min-width: 576px) and (max-width: 953px) {
    .right {
        div.img {
            margin-left: 0;
            margin: 0 auto;
        }
    }
    .down {
        margin-top: 0;
    }
}
@media (min-width: 320px) and (max-width: 576px) {
    .right {
        div.img {
            margin-left: 0;
            margin: 0 auto;
            width: 281px;
            height: 201px;
        }
    }
    .left {
        h1 {
            font-size: 24px;
        }
        p {
            font-size: 14px;
        }
    }
    .tab {
        .box {
            width: 157px;
            height: 180px;
            border-bottom: 0px;
            h2 {
                font-size: 16px;
            }
            p {
                font-size: 11px;
            }
            span {
                font-size: 70px;
                margin: 0px 0 0 80px;
            }
            span.four {
                line-height: 0%;
                margin: 0px 0 0 80px;
            }
        }
    }
    .down {
        margin-top: 0;
    }
}
</style>

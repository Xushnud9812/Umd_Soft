<template>
    <div>
        <u-animate-container>
            <div class="container imags">
                <div class="row">
                    <div class="col-12">
                        <u-animate
                            name="fadeIn"
                            delay="0s"
                            duration="1.5s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <h1>Наши работы</h1>
                        </u-animate>
                    </div>
                    <u-animate
                        name="fadeIn"
                        delay="0s"
                        duration="1.5s"
                        :iteration="1"
                        :offset="0"
                        animateClass="animate__animated animate__fadeInUp"
                        :begin="false"
                    >
                        <ul class="nav d-flex justify-content-between">
                            <li class="nav-item">
                                <a href="#" class="nav-link d-block">Все проекты</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Landing page</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Сайты визитки</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link"
                                    >Корпоративные сайты
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link"
                                    >Интернет магазини</a
                                >
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Каталог сайты</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link"
                                    >Мобильные приложения
                                </a>
                            </li>
                        </ul>

                    </u-animate>
                    <u-animate
                        name="fadeIn"
                        delay="0s"
                        duration="1.5s"
                        :iteration="1"
                        :offset="0"
                        animateClass="animate__animated animate__fadeInUp"
                        :begin="false"
                    >
                        <div class="boxs">
                            <div class="box-afrika">
                                <nuxt-link tag="div" class="afrika" to="/product">
                                    <img src="@/assets/img/card1.png" alt="" />
                                </nuxt-link>
                                <nuxt-link tag="div" class="afrika" to="/product">
                                    <img src="@/assets/img/card2.png" alt="" />
                                </nuxt-link>
                                <nuxt-link tag="div" class="afrika" to="/product">
                                    <img src="@/assets/img/card3.png" alt="" />
                                </nuxt-link>
                            </div>
                            <div class="box-afrika mt-0">
                                <nuxt-link tag="div" class="afrika" to="/product">
                                    <img src="@/assets/img/card4.png" alt="" />
                                </nuxt-link>
                                <nuxt-link tag="div" class="afrika" to="/product">
                                    <img src="@/assets/img/card1.png" alt="" />
                                </nuxt-link>
                               <nuxt-link tag="div" class="afrika" to="/product">
                                    <img src="@/assets/img/card5.png" alt="" />
                                </nuxt-link>
                            </div>
                        </div>
                    </u-animate>
                </div>
            </div>
        </u-animate-container>
    </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.v-application ul,
.v-application ol {
    margin-left: 0px !important;
}
.v-application ul,
.v-application ol {
    padding-left: 0px !important;
}
.imags {
    .col-12 {
        h1 {
            font-size: 48px;
            font-weight: bold;
            margin-top: 70px;
        }
    }

    .nav {

        margin-top: 40px;
        margin-left: 0 !important;

        li a {
            color: #8c8c8c;
            font-size: 16px;
            font-weight: 600;
        }

        li a:hover {
            color: #000;
            position: relative;
        }
    }

    li a::after {
        content: "";
        width: 0;
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 2px;
        background-color: #1e6bdd;
        transition: all 0.2s linear;
    }

    li a:hover::after {
        width: 100%;
    }

    .box-afrika {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        padding-right: 35px;

        .afrika {
            box-sizing: border-box;
            width: calc(100% / 3);
            position: relative;

            img {
                width: 100%;
            }
        }

        .afrika::after {
            content: "";
            width: 0;
            height: 7px;
            position: absolute;
            left: 0;
            bottom: 0;
            background: #1e6bdd;
            transition: all 0.2s linear;
        }

        .afrika:hover::after {
            width: 100%;
        }
    }
}

    @media (min-width: 768px) and (max-width: 960px){

    }
    @media (min-width: 576px) and (max-width: 768px){

    }
    @media (min-width: 340px) and (max-width: 576px){

    }
</style>

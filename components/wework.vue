<template>
    <div>
        <u-animate-container>
            <div class="container imags">
                <div class="row">
                    <div class="col-md-12 col-6">
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
                    <div class="col-md-12 col-6 link">
                        <u-animate
                            name="fadeIn"
                            delay="0s"
                            duration="1.5s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <div class="line">
                                <ul class="all" @click="toggleUl = !toggleUl">
                                    <li class="nav-item">
                                        Все проекты
                                        <svg
                                            :class="toggleUl ? 'bur' : ''"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="8"
                                            height="6"
                                            viewBox="0 0 8 6"
                                            fill="none"
                                        >
                                            <path
                                                d="M7.95898 1.56258L7.31315 0.916748L4.00065 4.22925L0.688151 0.916748L0.0423178 1.56258L4.00065 5.50008L7.95898 1.56258Z"
                                                fill="#1E6BDD"
                                            />
                                        </svg>
                                    </li>
                                </ul>
                                <ul :class="toggleUl ? 'pages-media' : 'pages'">
                                    <li class="nav-item one">Landing page</li>
                                    <li class="nav-item">Сайты визитки</li>
                                    <li class="nav-item">
                                        Корпоративные сайты
                                    </li>
                                    <li class="nav-item">Интернет магазини</li>
                                    <li class="nav-item">Каталог сайты</li>
                                    <li class="nav-item">
                                        Мобильные приложения
                                    </li>
                                </ul>
                            </div>
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
                        <div class="boxs">
                            <div class="box-afrika">
                                <nuxt-link
                                    tag="div"
                                    class="afrika"
                                    to="/product"
                                >
                                    <img src="@/assets/img/card1.png" alt="" />
                                </nuxt-link>
                                <nuxt-link
                                    tag="div"
                                    class="afrika"
                                    to="/product"
                                >
                                    <img src="@/assets/img/card2.png" alt="" />
                                </nuxt-link>
                                <nuxt-link
                                    tag="div"
                                    class="afrika"
                                    to="/product"
                                >
                                    <img src="@/assets/img/card3.png" alt="" />
                                </nuxt-link>
                            </div>
                            <div class="box-afrika mt-0">
                                <nuxt-link
                                    tag="div"
                                    class="afrika"
                                    to="/product"
                                >
                                    <img src="@/assets/img/card4.png" alt="" />
                                </nuxt-link>
                                <nuxt-link
                                    tag="div"
                                    class="afrika"
                                    to="/product"
                                >
                                    <img src="@/assets/img/card1.png" alt="" />
                                </nuxt-link>
                                <nuxt-link
                                    tag="div"
                                    class="afrika"
                                    to="/product"
                                >
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
export default {
    data() {
        return {
            toggleUl: false
        };
    }
};
</script>

<style lang="scss">
* {
    transition: 0.5s;
}
.v-application ul,
.v-application ol {
    margin-left: 0px !important;
}
.v-application ul,
.v-application ol {
    padding-left: 0px !important;
}

.link {
    display: flex;
    transition: 0.5s;
    // justify-content: space-between;
}
.line{
    display: flex;
    transition: .5s;
}
ul.all {
    list-style: none;
    svg {
        display: none;
    }
    li {
        display: inline-block;
        color: #8c8c8c;
        font-size: 16px;
        font-weight: 600;
    }
}
ul.pages {
    // display: none;
    transition: .5s;
    list-style: none !important;
    li {
        display: inline-block;
        margin-left: 25px;
        color: #8c8c8c;
        font-size: 16px;
        font-weight: 600;
        transition: .5s;
    }
}

.imags {
    .col-12 {
        h1 {
            font-size: 48px;
            font-weight: bold;
            margin-top: 70px;
        }
    }

    li:hover {
        color: #000;
        position: relative;
    }

    li::after {
        content: "";
        width: 0;
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 2px;
        background-color: #1e6bdd;
        transition: all 0.2s linear;
    }

    li:hover::after {
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
@media (min-width: 280px) and (max-width: 950px) {
    *{
        transition: .5s;
    }
    .imags .box-afrika {
        display: block;
        padding-right: 0px;
        .afrika {
            width: 100%;
        }
    }
    .col-12 {
        h1 {
            font-weight: 600;
            font-size: 24px;
            line-height: 36px;
        }
    }
    .link {
        display: flex;
        // justify-content: flex-end;
        // align-items: center;
        padding: 10px 0;
    }

    ul.all {
        display: block;
        transition: .5s;
        svg {
            display: block;
            transform: rotate(0deg);
        }
        svg.bur {
            display: block;
            transform: rotate(-180deg);
        }
        li {
            margin-top: 12px;
            display: flex;
            align-items: center;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 120%;
            color: #1e6bdd !important;
        }
        li:hover::after {
            width: 0;
            display: none;
        }
    }
    .line{
        display: block;
        transition: .5s;
        margin-left: 60px;
    }
    ul.pages{
        display: none;
        transition: .5s;
    }
    ul.pages-media {
        transition: .5s;
        display: block;
        list-style: none;
        li {
            margin-top: 10px;
            display: block;
            margin-left: 0px;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 120%;
            color: #666666;
        }

        li:hover::after {
            width: 0;
            display: none;
        }
    }
}

@media (min-width: 768px) and (max-width: 960px) {
}
@media (min-width: 576px) and (max-width: 768px) {
}
@media (min-width: 340px) and (max-width: 576px) {
}
</style>

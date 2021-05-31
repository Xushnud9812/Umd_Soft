<template>
    <div>
        <div class="clent">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex justify-content-between">
                            <h1>Наши клиенты говорят</h1>
                            <img src="@/assets/img/lodo5.png" alt="" />
                        </div>
                    </div>
                    <Carousel v-bind="slickOptions">
                        <div class="col-6 axror">
                            <div class="card">
                                <h4>Невероятный опыт</h4>
                                <p>
                                    Мне очень понравилась работа этой команды.
                                    Мастера своего дела <br />
                                    выполнили проект в короткие сроки,
                                    качественно, по доступной цене.
                                    <br />
                                    Рекомендую вам и буду работать с этой
                                    командой снова в будущем.
                                </p>
                            </div>
                            <div class="person">
                                <div>
                                    <img src="@/assets/img/logo6.png" alt="" />
                                </div>
                                <div class="name">
                                    <h4>Максудов Ахрор</h4>
                                    <p>Директор, Tujjor</p>
                                </div>
                            </div>
                            <div class="rectangle"></div>
                        </div>
                        <div class="col-6 axror">
                            <div class="card">
                                <h4>Надежный, профессиональный партнер</h4>
                                <p>
                                    ММне очень понравилась работа этой команды.
                                    Мастера своего дела выполнили проект в
                                    короткие сроки, качественно, по доступной
                                    цене. Рекомендую вам и буду работать с этой
                                    командой снова в будущем.
                                </p>
                            </div>
                            <div class="person">
                                <div>
                                    <img src="@/assets/img/logo7.png" alt="" />
                                </div>
                                <div class="name">
                                    <h4>Ибрахим Турдиев</h4>
                                    <p>CEO, CLOZZONE</p>
                                </div>
                            </div>
                            <div class="rectangle"></div>
                        </div>
                        <div class="col-6 axror">
                            <div class="card">
                                <h4>Невероятный опыт</h4>
                                <p>
                                    Мне очень понравилась работа этой команды.
                                    Мастера своего дела <br />
                                    выполнили проект в короткие сроки,
                                    качественно, по доступной цене.
                                    <br />
                                    Рекомендую вам и буду работать с этой
                                    командой снова в будущем.
                                </p>
                            </div>
                            <div class="person">
                                <div>
                                    <img src="@/assets/img/logo6.png" alt="" />
                                </div>
                                <div class="name">
                                    <h4>Максудов Ахрор</h4>
                                    <p>Директор, Tujjor</p>
                                </div>
                            </div>
                            <div class="rectangle"></div>
                        </div>
                        <div class="col-6 axror">
                            <div class="card">
                                <h4>Невероятный опыт</h4>
                                <p>
                                    Мне очень понравилась работа этой команды.
                                    Мастера своего дела <br />
                                    выполнили проект в короткие сроки,
                                    качественно, по доступной цене.
                                    <br />
                                    Рекомендую вам и буду работать с этой
                                    командой снова в будущем.
                                </p>
                            </div>
                            <div class="person">
                                <div>
                                    <img src="@/assets/img/logo6.png" alt="" />
                                </div>
                                <div class="name">
                                    <h4>Максудов Ахрор</h4>
                                    <p>Директор, Tujjor</p>
                                </div>
                            </div>
                            <div class="rectangle"></div>
                        </div>
                        <div class="col-6 axror">
                            <div class="card">
                                <h4>Невероятный опыт</h4>
                                <p>
                                    Мне очень понравилась работа этой команды.
                                    Мастера своего дела <br />
                                    выполнили проект в короткие сроки,
                                    качественно, по доступной цене.
                                    <br />
                                    Рекомендую вам и буду работать с этой
                                    командой снова в будущем.
                                </p>
                            </div>
                            <div class="person">
                                <div>
                                    <img src="@/assets/img/logo6.png" alt="" />
                                </div>
                                <div class="name">
                                    <h4>Максудов Ахрор</h4>
                                    <p>Директор, Tujjor</p>
                                </div>
                            </div>
                            <div class="rectangle"></div>
                        </div>
                        <div class="col-6 axror">
                            <div class="card">
                                <h4>Невероятный опыт</h4>
                                <p>
                                    Мне очень понравилась работа этой команды.
                                    Мастера своего дела <br />
                                    выполнили проект в короткие сроки,
                                    качественно, по доступной цене.
                                    <br />
                                    Рекомендую вам и буду работать с этой
                                    командой снова в будущем.
                                </p>
                            </div>
                            <div class="person">
                                <div>
                                    <img src="@/assets/img/logo6.png" alt="" />
                                </div>
                                <div class="name">
                                    <h4>Максудов Ахрор</h4>
                                    <p>Директор, Tujjor</p>
                                </div>
                            </div>
                            <div class="rectangle"></div>
                        </div>
                    </Carousel>

                    <div class="rounttop">
                        <div style="background: #1e6bdd" class="round"></div>
                        <div class="round"></div>
                        <div class="round"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            slickOptions: {
                dots: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                draggable: true,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            infinite: false,
                            slidesToScroll: 4,
                            dots: true,
                            draggable: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            infinite: false,
                            slidesToScroll: 2,
                            draggable: true
                        }
                    }
                ]
            }
        };
    }
};
</script>

<style lang="scss">
.clent {
    .slick-dots li button:before {
        font-family: "slick";
        font-size: 6px;
        line-height: 20px;
        width: 10px;
        height: 10px;
        content: "";
        text-align: center;
        border-radius: 50%;
        background: #1e6bdd;
        border: 1px solid #1e6bdd;
        box-sizing: border-box;
    }
}
.person {
    width: 100%;
    display: flex;
    margin: 20px 0 0 150px;
    img {
        width: 69px;
        height: 69px;
    }
    h4 {
        font-size: 18px;
        color: #202020;
        margin-top: 8px;
    }
    p {
        margin-top: -6px;
        font-size: 14px;
        color: #202020;
    }
    .name {
        margin-left: 10px;
    }
}
.comment {
    height: 220px;
    background: #ffffff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}
.clent {
    background: #f6f6f6;
    margin-top: 30px;

    .col-12 {
        h1 {
            font-weight: bold;
            font-size: 48px;
            margin-top: 20px;
            color: #1e6bdd;
        }

        img {
            // margin-top: 68px;
            position: absolute;
            right: 80px;
            margin-left: 10px;
            margin-top: 20px;
            z-index: 0;
        }
    }

    .axror {
        margin-top: 20px;
        .card {
            padding: 35px 25px;
            border: 0;
            width: 540px;
            height: 220px;
            border-radius: 5px;
            box-shadow: 0 5px 10px #d2d2d2;

            h4 {
                margin-top: 15px;
                font-weight: 600;
                font-size: 18px;
                line-height: 28px;
                color: #18191f;
            }

            p {
                font-size: 14px;
            }
        }
        .rectangle {
            width: 24px;
            height: 24px;
            background: #fff;
            position: absolute;
            margin-left: 250px;
            margin-top: -105px;
            transform: rotate(45deg);
        }
    }
    .rounttop {
        margin-bottom: 80px;
    }
}
</style>

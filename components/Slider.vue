<template>
    <div>
         <Carousel v-bind="slickOptions">
                        <div class="col-6 axror">
                                <div class="card">
                                    <h4>Невероятный опыт</h4>
                                    <p>
                                        Мне очень понравилась работа этой
                                        команды. Мастера своего дела <br />
                                        выполнили проект в короткие сроки,
                                        качественно, по доступной цене.
                                        <br />
                                        Рекомендую вам и буду работать с этой
                                        командой снова в будущем.
                                    </p>
                                </div>
                                <div class="d-flex deriktor">
                                    <div>
                                        <img
                                            src="@/assets/img/logo6.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="logo">
                                        <h4 class="mb-0">Максудов Ахрор</h4>
                                        <p>Директор, Tujjor</p>
                                    </div>
                                </div>
                                <div class="rectangle"></div>
                            </div>
                        <div class="col-6 axror">
                                <div class="card">
                                    <h4>Невероятный опыт</h4>
                                    <p>
                                        Мне очень понравилась работа этой
                                        команды. Мастера своего дела <br />
                                        выполнили проект в короткие сроки,
                                        качественно, по доступной цене.
                                        <br />
                                        Рекомендую вам и буду работать с этой
                                        командой снова в будущем.
                                    </p>
                                </div>
                                <div class="d-flex deriktor">
                                    <div>
                                        <img
                                            src="@/assets/img/logo6.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="logo">
                                        <h4 class="mb-0">Максудов Ахрор</h4>
                                        <p>Директор, Tujjor</p>
                                    </div>
                                </div>
                                <div class="rectangle"></div>
                            </div>
                        <div class="col-6 axror">
                                <div class="card">
                                    <h4>Невероятный опыт</h4>
                                    <p>
                                        Мне очень понравилась работа этой
                                        команды. Мастера своего дела <br />
                                        выполнили проект в короткие сроки,
                                        качественно, по доступной цене.
                                        <br />
                                        Рекомендую вам и буду работать с этой
                                        командой снова в будущем.
                                    </p>
                                </div>
                                <div class="d-flex deriktor">
                                    <div>
                                        <img
                                            src="@/assets/img/logo6.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="logo">
                                        <h4 class="mb-0">Максудов Ахрор</h4>
                                        <p>Директор, Tujjor</p>
                                    </div>
                                </div>
                                <div class="rectangle"></div>
                            </div>
                    </Carousel>
    </div>
</template>

<script>
export default {
     slickOptions: {
                dots: true,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 3,
                draggable: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            infinite: false,
                            slidesToScroll: 4,
                            dots: true,
                            draggable: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            infinite: false,
                            slidesToScroll: 2,
                            draggable: true
                        }
                    }
                ]
            }
}
</script>
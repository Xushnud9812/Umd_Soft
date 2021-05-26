<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-3 umd">
                    <div class="img">
                        <img src="@/assets/img/umd.png" alt="">
                    </div>

                    <ul class="nav flex-column">
                        <a href="#" class="nav-link">Lorem ipsum dolor amet, consectetur <br> adipiscing elit. Eget nisl nunc
                            quam ac <br>  sed turpis volutpat. Cursus sed  massa <br> non nisi, placerat.</a>
                    </ul>
                </div>
                <div class="col-3 umd">
                    <h4>Быстрые ссылки</h4>
                    <ul class="nav flex-column">
                        <a href="#" class="nav-link">О нас</a>
                        <a href="#" class="nav-link">Наши услуги</a>
                        <a href="#" class="nav-link">Обучения</a>
                        <a href="#" class="nav-link">Портфолио</a>
                        <a href="#" class="nav-link">Отзывы</a>
                    </ul>
                </div>
                <div class="col-3 umd">
                    <h4>Связаться с нами</h4>
                    <ul class="nav flex-column">
                        <a href="#" class="nav-link "><img class="me-2" src="@/assets/img/logo9.png" alt="">info@umdsoft.org</a>
                        <a href="#" class="nav-link"><img class="me-2" src="@/assets/img/logo10.png" alt="">+998 91 134 77 73</a>
                        <a style="line-height: 28px" href="#" class="nav-link"><img class="me-2" src="@/assets/img/logo11.png" alt="">Tashkent city, Amir Temur
                            <br> district, 64 B </a>
                    </ul>
                </div>
                <div class="col-3 umd">
                    <h4>Cоциальные сети</h4>
                    <ul class="nav bacround">
                        <a href="#" class="nav-link "><img class="me-2" src="@/assets/img/logo12.png" alt=""></a>
                        <a href="#" class="nav-link"><img class="me-2" src="@/assets/img/logo13.png" alt=""></a>
                        <a href="#" class="nav-link"><img class="me-2" src="@/assets/img/logo14.png" alt=""></a>
                    </ul>
                </div>
                <div class="col-6 umd">
                    <h5>© 2020 UMD SOFT . Все права защищены</h5>
                    <div class="up">
                        <h5>&#x276E;</h5>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<!--#4f4f4f-->

<style lang="scss">
    .footer {
        background: #202020;
        .umd{
            .up{
                width: 40px;
                height: 40px;
                border-radius: 20px;
                background: #FFFFFF;
                text-align: center;
                align-items: center;
                display: flex;
                justify-content: center;
                position: absolute;
                left: 1265px;
                    /*top: 1261%;*/
                margin-top: -120px;


            h5{
                    color: #000;
                    transform: rotate(90deg);
                    margin-top: 10px;
                }
            }
                h5{
                    margin-top: 50px;
                    color: #fff;
                    font-size: 14px;
                }
            .img{
                img{
                    margin-top: 71px;
                }
            }
            .nav{
                margin-top: 24px;
                margin-left: -10px;
                a{
                    color: #fff;
                    font-size: 14px;
                    line-height: 24px;
                    font-weight: lighter;
                }
            }
            h4{
                color: #fff;
                margin-top: 70px;
                font-size: 20px;
            }
        }
    }
</style>
<script>

</script>




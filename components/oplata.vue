<template>
    <div>
        <u-animate-container>
            <u-animate
                name="fadeIn"
                delay="0s"
                duration="1s"
                :iteration="1"
                :offset="0"
                animateClass="animate__animated animate__fadeInUp"
                :begin="false"
            >
                <div class="container">
                    <div class="oplata">
                        <div class="row">
                            <h1>Интеграция платежних системы</h1>
                            <div class="col-md-2 col-sm-4 col-6">
                                <div class="op-box">
                                    <img src="@/assets/img/Click.png" alt="" />
                                </div>
                            </div>
                            <div class="col-md-2  col-sm-4 col-6">
                                <div class="op-box">
                                    <img src="@/assets/img/payme.png" alt="" />
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-4 col-6">
                                <div class="op-box">
                                    <img src="@/assets/img/stripe.png" alt="" />
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-4 col-6">
                                <div class="op-box">
                                    <img src="@/assets/img/oson.png" alt="" />
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-4 col-6">
                                <div class="op-box">
                                    <img
                                        src="@/assets/img/apelsin.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-4 col-6">
                                <div class="op-box">
                                    <img src="@/assets/img/visa.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </u-animate>
        </u-animate-container>
    </div>
</template>

<style lang="scss" scoped>
    .op-box {
    cursor: pointer;
    background: #f6f6f6;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 30px 10px;
    // margin-left: 20px;
    margin: 20px 0 0px 0px;
    // margin-top: 10px;
    width: 169px;
    margin: 20px auto;
    height: 139px;
    display: flex;
    align-items: center;
    img {
        width: 144px;
    }
}
@media (min-width: 330px) and (max-width: 576px){
    .op-box{
        width: 150px;
        img{
            width: 125px
        }
    }
}
</style>
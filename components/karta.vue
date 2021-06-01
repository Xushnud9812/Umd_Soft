<template>
    <div>
        <div class="navigator">
            <div class="div-map">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?z=16&ol=biz&oid=185254169255"
                    width="100%"
                    height="700px"
                    frameborder="0"
                ></iframe>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="col-6 ms-auto inputs">
                            <div class="card">
                                <h4>Cвяжитесь с нами</h4>
                                <h5>Имя</h5>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Ваше имя"
                                />

                                <h5>Номер</h5>
                                <input
                                    type="number"
                                    class="form-control"
                                    placeholder="Ваш номер"
                                />

                                <h5>Коментарий</h5>
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                    placeholder="Оставьте отзыв"
                                ></textarea>

                                <button type="button" class="btn send ">
                                    Отправить сообщение
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.navigator {
    position: relative;
    overflow: hidden;

    div.div-map {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .inputs {
        .card {
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
            width: 400px;
            margin-left: auto;
            h4 {
                font-weight: bold;
                font-size: 28px;
                margin-top: 30px;
                margin-left: 22px;
            }
            h5 {
                font-weight: 500;
                font-size: 16px;
                margin-left: 22px;
            }
            input {
                width: 356px;
                height: 40px;
                border: 1px solid #1e6bdd;
                box-sizing: border-box;
                border-radius: 5px;
                margin-bottom: 10px;
                margin-left: 22px;
                margin-top: 5px;
            }
            textarea {
                width: 356px;
                height: 126px;
                border: 1px solid #1e6bdd;
                box-sizing: border-box;
                border-radius: 5px;
                margin-left: 22px;
                margin-top: 5px;
                padding: 10px;
            }
            button {
                width: 356px;
                height: 50px;
                background: #1e6bdd;
                box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
                border-radius: 5px;
                margin-left: 22px;
                margin-top: 20px;
                margin-bottom: 30px;
                color: #fff;
            }
            button:hover {
                background: #fff;
                border: 1px solid #1e6bdd;
                color: #1e6bdd;
            }
        }
    }
}

    @media (min-width: 340px) and (max-width: 576px){
        .navigator{
            .inputs{
                .card{
                    width: 230px;
                    /*height: 282px;*/
                    margin-left: -60px;
                    h4{
                        font-size: 14px;
                        margin-top: 10px;
                    }
                    h5{
                        font-size: 10px;
                        margin-top: 7px;
                    }
                    input{
                        width: 185px;
                        height: 24px;
                        font-size: 10px;
                        margin-top: 0;
                    }
                    textarea{
                        width: 185px;
                        height: 60px;
                        margin-top: 0;
                        font-size: 10px;
                    }
                    button{
                        width: 185px;
                        height: 24px;
                        font-size: 10px;
                        margin-top: 27px;
                        margin-bottom: 13px;
                    }
                }
            }
        }

    }
    @media (min-width: 576px) and (max-width: 768px){
        .navigator{
            .inputs{
                .card{
                    width: 230px;
                    /*height: 282px;*/
                    margin-left: -80px;
                    h4{
                        font-size: 14px;
                        margin-top: 10px;
                    }
                    h5{
                        font-size: 10px;
                        margin-top: 7px;
                    }
                    input{
                        width: 185px;
                        height: 24px;
                        font-size: 10px;
                        margin-top: 0;
                    }
                    textarea{
                        width: 185px;
                        height: 60px;
                        margin-top: 0;
                        font-size: 10px;
                    }
                    button{
                        width: 185px;
                        height: 28px;
                        font-size: 10px;
                        margin-top: 27px;
                        margin-bottom: 13px;
                    }
                }
            }
        }
    }
    @media (min-width: 768px) and (max-width: 960px){
        .navigator{
            .inputs{
                .card{
                    width: 230px;
                    /*height: 282px;*/
                    margin-left: -80px;
                    h4{
                        font-size: 14px;
                        margin-top: 10px;
                    }
                    h5{
                        font-size: 10px;
                        margin-top: 7px;
                    }
                    input{
                        width: 185px;
                        height: 24px;
                        font-size: 10px;
                        margin-top: 0;
                    }
                    textarea{
                        width: 185px;
                        height: 60px;
                        margin-top: 0;
                        font-size: 10px;
                    }
                    button{
                        width: 185px;
                        height: 28px;
                        font-size: 10px;
                        margin-top: 27px;
                        margin-bottom: 13px;
                    }
                }
            }
        }
    }
</style>

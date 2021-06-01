<template>
    <div>
        <div class="container">
            <div class="row tag">
                <div class="col-md-4 col-12 order-md-1 order-2">
                    <div class="text">
                        <img src="@/assets/img/UMDSOFT.png" alt="" />
                        <h1>IT Компания</h1>
                        <h2>Мобильная разрвязаться</h2>
                        <button @click="modal" type="button" class="">
                            Заказат проект
                        </button>
                    </div>
                </div>
                <div class="col-md-8 col-12 order-md-2  order-1">
                    <div class="img">
                        <img src="@/assets/img/Graphics.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        modal() {
            this.$store.commit("changeButton");
            // clickoutside(changeButton)
        }
    }
};
</script>

<style lang="scss">
.tag {
    margin-top: 70px;
    .text {
        padding: 160px 0;
        img {
            width: 343px;
        }
        h1 {
            margin-top: 20px;
            // margin-bottom: 20px;
            font-style: normal;
            font-weight: 600;
            font-size: 30px;
            line-height: 141.3%;
            color: #202020;
        }
        h2 {
            font-weight: 500;
            font-size: 30px;
            line-height: 141.3%;
            color: #1e6bdd;
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

    div.img {
        width: 100%;
        // height: 560, 36px;
        margin-left: 50px;
    }
    img {
        width: 100%;
        pointer-events: none;
        // user-select: none;
        // margin-top: 30px;
        // margin-left: 400px;
    }
}
@media (min-width: 320px) and (max-width: 576px) {
    .tag{
        .text{
            padding: 20px 0;
            margin: 0 0 0 30px;
            img{
                width: 200px;
            }
            h1, h2{
                font-size: 20px;
            }
        }
    }
    div.img {
        width: 100%;
        //height: 560, 36px;
        margin-left: 0px;
    }
}
</style>

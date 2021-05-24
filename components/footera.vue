<template>
    <div>
        <footer>
            <div class="container foot">
                <div class="row">
                    <div class="col-md-3 col-sm-6 box">
                        <img src="@/assets/img/logo.png" alt="" />
                        <p>
                            Lorem ipsum dolor amet, consectetur adipiscing elit.
                            Eget nisl nunc quam ac sed turpis volutpat. Cursus
                            sed massa non nisi, placerat.
                        </p>
                    </div>
                    <div class="col-md-3 col-sm-6 box">
                        <h2>Быстрые ссылки</h2>
                        <ul>
                            <li>О нас</li>
                            <li>Наши услуги</li>
                            <li>Портфолио</li>
                            <li>Отзывы</li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-6 box">
                        <h2>Связаться с нами</h2>
                        <ul>
                            <li>info@umdsoft.org</li>
                            <li>+998 91 134 77 73</li>
                            <li>Tashkent city, Amir Temur district, 64 B</li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-6 box">
                        <h2>Cоциальные сети</h2>
                        <div class="set">
                            <span>insta</span>
                            <span>teleg</span>
                            <span>face</span>
                        </div>
                    </div>
                </div>
                <p class="past">© 2020 UMD SOFT . Все права защищены</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
    background: #202020;
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    font-feature-settings: "liga" off;

    /* Default / White */

    color: #ffffff;
}
.foot {
    margin: 0 auto;
    padding: 20px;
    .box{
        padding: 20px;
    }
    img{
        width: 114.98px;
height: 67.54px;
    }
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        /* or 171% */

        font-feature-settings: "liga" off;

        /* Text / Gray 300 */

        color: #d9dbe1;
    }
    p.past{
        margin-top: 50px;
        margin-left: 20px;
    }
    h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        /* identical to box height, or 150% */

        font-feature-settings: "liga" off;

        /* Default / White */

        color: #ffffff;
    }
    ul {
        list-style: none;
        li {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 24px;
            font-feature-settings: "liga" off;
            color: #d9dbe1;
            margin-top: 10px;
        }
    }
}
</style>

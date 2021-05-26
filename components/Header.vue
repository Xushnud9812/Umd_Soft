<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <div>
                    <img src="@/assets/img/logo8.png" alt="">
                </div>
                <div>
                    <ul class="nav">
                        <li class="nav-item"><a href="#" class="nav-link text-primary">О нас</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Наши услуги</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Обучения</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Портфолио</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Контакты</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Отзыве</a></li>
                        <button type="button" class="btn">Заказат проект</button>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .navbar{
        height: 90px;
        background: #F6F6F6;
        .nav{
            button{
                width: 145px;
                height: 47px;
                background: #1e6bdd;
                color: #fff;
            }
            li a{
                color: #000000;
            }
        }
    }
</style>

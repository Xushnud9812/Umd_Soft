<template>
    <div>
        <nav class="navbar" id="navbar">
            <div class="navbar-inner" id="navbar-inner">
                <!-- <div class="two" id="menu">  -->

                <select name="category" id="category" class="category-select">
                    <option value="#">Qozon</option>
                    <option value="#">Tovoq</option>
                </select>

                <ul class="nav-link" id="menu">
                    <li><a href="#" style="color: #148E3C;">Главная</a></li>
                    <li><a href="#">О продукции</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Информации</a></li>
                    <li><a href="#">Новости</a></li>
                    <li><a href="#">Акции</a></li>
                    <li><a href="#">Медиа</a></li>
                    <li><a href="#">Отзывы</a></li>
                    <li><a href="#">Вопросы и ответы</a></li>
                    <li><a href="#">Для оптовых клиенты</a></li>
                </ul>
                <!-- </div> -->
            </div>
        </nav>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
*{
    transition: .5s;
}
.opened {
    opacity: 1 !important;
    opacity: 1 !important;
    top: 0 !important;
    display: flex !important;
    left: 0 !important;
    .nav-link {
        top: 39px !important;
        left: 0% !important;
        z-index: 10000;
    }
    .navbar-inner {
        z-index: 1000;
    }
    .category-select {
        top: 0px !important;
        left: 0% !important;
        z-index: 111;
    }
}

// ================ NAvbar section =============
.navbar {
    background-color: #ffffff;
}
.navbar-inner {
    width: 90%;
    height: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.category-select {
    flex: 1 1 10rem;
    margin-right: 40px;
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    outline: none;
    border: none;
    background: transparent;
    color: #148e3c;
}
.nav-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 5 1 100rem;

    li {
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        list-style-type: none;
        a {
            color: #666666;
            text-decoration: none;
        }
    }
}

////////// media
@media (min-width: 1024px) and (max-width: 1280px) {
    .nav-link li a {
        padding: 8px 0px;
        font-size: 14px;
    }
    .category-select {
        font-size: 14px;
    }
}
@media (min-width: 768px) and (max-width: 1024px) {
    .nav-link li a {
        padding: 8px 0px;
        font-size: 11px;
    }
    .category-select {
        font-size: 10px;
    }
    .navbar-inner {
        width: 98% !important;
    }
}
@media (min-width: 481px) and (max-width: 767px) {
    .bar {
        display: block !important;
    }
    .navbar-inner {
        position: absolute;
        flex-direction: column;
        height: auto;
        width: 100% !important;
        transition: 0.5s;
        // top: -40px;
    }
    .nav-link {
        display: block !important;
        z-index: 2;
        display: block;
        background: #699536 !important ;
        z-index: 2;
        width: 50% !important;
        position: absolute;
        left: -100%;
        z-index: 22;
        transition: 0.5s;
        top: 109px;
        opacity: 1;
    }
    .nav-link li {
        padding: 10px;
        border-bottom: 1px solid yellowgreen;
        cursor: pointer;
    }
    .navbar {
        background: none !important;
        width: 100%;
        height: 100vh;
        transition: 0.5s;
        left: 0px;
        position: absolute;
        z-index: 10;
    }
    .nav-link li a {
        color: #fff !important;
    }
    .category-select {
        position: absolute;
        top: 70px;
        left: -100%;
        flex: 0 !important;
        color: #fff !important;
        background: #699212 !important;
        padding: 10px 40px;
        width: 50%;
        margin: 0 !important;
    }
}
@media (max-width: 480px) {
    .bar {
        display: block !important;
    }
    .navbar-inner {
        // display: none !important;
        position: absolute;
        flex-direction: column;
        height: auto;
        width: 100% !important;
        transition: 0.5s;
        // z-index: 11;
    }
    .nav-link {
        display: block !important;
        z-index: 2;
        display: block;
        background: #699536 !important ;
        z-index: 2;
        width: 100% !important;
        position: absolute;
        left: -100%;
        z-index: 22;
        transition: 0.5s;
        top: 39px !important;
    }
    .nav-link li {
        padding: 10px;
        border-bottom: 1px solid yellowgreen;
        cursor: pointer;
    }
    .navbar {
        background: none !important;
        transition: 0.5s;
        z-index: 100;
        position: relative;
        left: 0;
    }
    .nav-link li a {
        color: #fff !important;
    }
    .category-select {
        position: absolute;
        top: 0px;
        left: -100%;
        flex: 0 !important;
        color: #fff !important;
        background: #699212 !important;
        padding: 10px 40px;
        width: 100%;
        margin: 0 !important;
    }
}
</style>

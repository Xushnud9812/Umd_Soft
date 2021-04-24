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
</style>

<template>
  <div>
      <nav class="navbar">
        <div class="navbar-inner">
            <select name="category" id="category" class="category-select">
              
                    <option value="#">Qozon</option>
                     <option value="#">Tovoq</option>
                    
            </select>
            <ul class="nav-link">
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
        </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// ================ NAvbar section =============
.navbar{
    background-color: #FFFFFF;
}
.navbar-inner{
    width: 90%;
    height: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.category-select{
    flex: 1 1 10rem;
    margin-right: 40px;
    font-family: "Roboto Bold",sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    outline: none;
    border: none;
    background: transparent;
    color: #148E3C;
}
.nav-link{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 5 1 100rem;
    
    li{
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        a{
            color: #666666;
        }
    }
}
</style>
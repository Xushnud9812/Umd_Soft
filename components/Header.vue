<template>
  <div>
    <header>
      <nav class="header-nav">
        <div class="logo">
          <img src="@/assets/image/logo.svg" alt="" />
        </div>
        <div class="office-shop">
          <p>ОФИЦИАЛНЫЙ ИНТЕРНЕТ МАГАЗИН В УЗБЕКИСТАНЕ</p>
          <h3>Все наченается с мечты !</h3>
        </div>
        <div class="contact-language">
          <img class="header-phone-icon" src="@/assets/image/phone.svg" alt="" />
          <p class="head-phone-number">+998 (99) 329-14-04</p>
          <select name="#" id="#">
            <option value="#">uz</option>
            <option value="#">ру</option>
          </select>
          <div class="header-bag-icon">
            <img src="@/assets/image/bag.svg" alt="" />
            <div class="header-count">
              <span>3</span>
            </div>
          </div>
        </div>
      </nav>
      <select name="#" id="#" class="mobile-select">
        <option value="#">uz</option>
        <option value="#">ру</option>
      </select>
      <div class="burger">
        <span class="line1"></span>
        <span class="line2"></span>
        <span class="line3"></span>
      </div>
    </header>

    <nav class="navbar">
      <div class="navbar-inner">
        <div class="office-shop">
          <p>
            ОФИЦИАЛНЫЙ ИНТЕРНЕТ <br />
            МАГАЗИН В УЗБЕКИСТАНЕ
          </p>
          <h3>Все наченается с мечты !</h3>
        </div>
        <select name="category" id="category" class="category-select">
          <option value="#">Qozon</option>
          <option value="#">Tovoq</option>
        </select>
        <div class="contact-language">
          <img class="header-phone-icon" src="@/assets/image/phone.svg" alt="" />
          <p class="head-phone-number">+998 (99) 329-14-04</p>
          <select name="#" id="#">
            <option value="#">uz</option>
            <option value="#">ру</option>
          </select>
          <div class="header-bag-icon">
            <img src="@/assets/image/bag.svg" alt="" />
            <div class="header-count">
              <span>3</span>
            </div>
          </div>
        </div>
        <ul class="nav-link">
          <li><a href="#">Главная</a></li>
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
  mounted() {
    const nav = document.querySelector(".navbar");
    const burger = document.querySelector(".burger");
    const links = nav.querySelectorAll("a");

    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
      burger.classList.toggle("toggle");
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle");
      });
    });
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}
html, body{
  overflow-x: hidden;
}
// ========== Header section ===========

header {
  background: #148e3c;
}
.header-nav {
  width: 90%;
  height: 79px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: 1px solid;
}
.logo {
  height: 60px;
}
.office-shop {
  // border: 1px solid;
  p {
    font-family: "Roboto Bold", sans-serif;
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 110%;
  }
  h3 {
    font-family: "Lobster", cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    color: #e7ea09;
    text-align: center;
  }
}
.contact-language {
  // border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-phone-icon {
    margin-right: 20px;
  }
  .head-phone-number {
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    margin-right: 20px;
  }
  select {
    border: none;
    outline: none;
    background: transparent;
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    margin-right: 20px;
    option {
      color: black;
    }
  }
  .header-bag-icon {
    position: relative;
    .header-count {
      position: absolute;
      top: 0;
      right: 0;
      width: 13px;
      height: 13px;
      border-radius: 15px;
      background: #f7fa00;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        display: block;
        color: black;
        font-family: "Roboto Bold", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
}
.mobile-select {
  display: none;
}
.burger {
  display: none;
  cursor: pointer;
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
  .office-shop {
    display: none;
  }
  .contact-language {
    display: none;
  }
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
    a {
      color: #666666;
    }
  }
}

////// ================  header && navbar media ==============

@media (min-width: 1281px) {
  //  .container-pro{

  //  }
}

/*
      ##Device = Laptops, Desktops
      ##Screen = B/w 1025px to 1280px
    */

@media (min-width: 1025px) and (max-width: 1280px) {
  // =============== header section ===================
  .header-nav {
    width: 95%;
  }
  .logo {
    height: 48px;
    img {
      width: 150px;
    }
  }
  .office-shop {
    p {
      font-size: 16px;
    }
    h3 {
      font-size: 22px;
    }
  }

  .contact-language {
    .header-phone-icon {
      width: 15px;
    }
    .head-phone-number {
      font-size: 16px;
    }
    select {
      font-size: 16px;
    }
    .header-bag-icon {
      img {
        width: 27px;
      }
    }
  }

  //================== Navbar Section ==============
  .nav-link li {
    font-size: 14px;
  }
}

/*
      ##Device = Tablets, Ipads (portrait)
      ##Screen = B/w 768px to 1024px
    */

@media (min-width: 768px) and (max-width: 1024px) {
  // =============== width: 230px;header section ===================
  header {
    position: relative;
    .office-shop {
      display: none;
    }
  }
  .header-nav {
    width: 95%;
  }
  .logo {
    height: 48px;
    img {
      width: 150px;
    }
  }
  .office-shop {
    // display: none;
    p {
      font-size: 16px;
    }
    h3 {
      font-size: 22px;
    }
  }

  .contact-language {
    margin-right: 66px;
    .header-phone-icon {
      width: 15px;
    }
    .head-phone-number {
      font-size: 16px;
    }
    select {
      font-size: 16px;
    }
    .header-bag-icon {
      img {
        width: 27px;
      }
    }
  }

  .burger {
    display: block;
    position: absolute;
    top: 37%;
    right: 5%;
    z-index: 4;
  }
  .burger span {
    padding: 1.5px 13px;
    background: #fff;
    margin: 3px 0px;
    border-radius: 5px;
    display: block;
    transition: all 0.5s ease;
  }
  .navbar {
    background: #148e3c;
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100vh;
    transition: transform 1s ease;
    z-index: 3;
  }
  .navbar-inner {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .office-shop {
      display: block;
      p {
        line-height: 22px;
      }
    }
  }
  .category-select {
    color: #fff;
  }
  .nav-link {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    li {
      width: 100%;
      height: 30px;
      border-bottom: 1px solid #077507;
      cursor: pointer;
      a {
        color: white;
        font-size: 18px;
      }
    }
    li:nth-child(1) a {
      color: #e7ea09;
    }
  }

  .nav-link a {
    color: white;
    font-size: 18px;
  }
  .nav-open {
    transform: translateX(-100%);
  }
  .toggle .line1 {
    transform: rotateZ(45deg) translateY(300%);
    background: #ffffff;
  }
  .toggle .line2 {
    opacity: 0;
  }
  .toggle .line3 {
    transform: rotateZ(-45deg) translateY(-300%);
    background: #ffffff;
  }

  //================== Navbar Section ==============
  .nav-link li {
    font-size: 14px;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  // =============== width: 230px;header section ===================
  header {
    position: relative;
    .office-shop {
      display: none;
    }
  }
  .header-nav {
    width: 95%;
  }
  .logo {
    height: 48px;
    img {
      width: 137px;
    }
  }
  .office-shop {
    // display: none;
    p {
      font-size: 16px;
    }
    h3 {
      font-size: 22px;
    }
  }

  .contact-language {
    margin-right: 66px;
    .header-phone-icon {
      width: 12px;
      margin-right: 10px;
    }
    .head-phone-number {
      font-size: 12px;
      margin-right: 10px;
    }
    select {
      font-size: 12px;
      margin-right: 10px;
    }
    .header-bag-icon {
      img {
        width: 27px;
      }
    }
  }

  .burger {
    display: block;
    position: absolute;
    top: 37%;
    right: 5%;
    z-index: 4;
  }
  .burger span {
    padding: 1.5px 13px;
    background: #fff;
    margin: 3px 0px;
    border-radius: 5px;
    display: block;
    transition: all 0.5s ease;
  }
  .navbar {
    background: #148e3c;
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100vh;
    transition: transform 1s ease;
    z-index: 3;
  }
  .navbar-inner {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .office-shop {
      display: block;
      p {
        line-height: 22px;
      }
    }
  }
  .category-select {
    color: #fff;
  }
  .nav-link {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    li {
      width: 100%;
      height: 30px;
      border-bottom: 1px solid #077507;
      cursor: pointer;
      a {
        color: white;
        font-size: 18px;
      }
    }
    li:nth-child(1) a {
      color: #e7ea09;
    }
  }

  .nav-link a {
    color: white;
    font-size: 18px;
  }
  .nav-open {
    transform: translateX(-100%);
  }
  .toggle .line1 {
    transform: rotateZ(45deg) translateY(300%);
    background: #ffffff;
  }
  .toggle .line2 {
    opacity: 0;
  }
  .toggle .line3 {
    transform: rotateZ(-45deg) translateY(-300%);
    background: #ffffff;
  }

  //================== Navbar Section ==============
  .nav-link li {
    font-size: 14px;
  }
}

/*
      ##Device = Most of the Smartphones Mobiles (Portrait)
      ##Screen = B/w 320px to 479px
    */
@media (min-width: 320px) and (max-width: 480px) {
  // =============== width: 230px;header section ===================
  header {
    position: relative;
    .office-shop {
      display: none;
    }
    .contact-language {
      display: none;
    }
  }
  .header-nav {
    width: 95%;
  }
  .logo {
    height: 48px;
    img {
      width: 137px;
    }
  }
  .office-shop {
    p {
      font-size: 16px;
    }
    h3 {
      font-size: 22px;
    }
  }

  .contact-language {
    margin-right: 66px;
    .header-phone-icon {
      width: 12px;
      margin-right: 10px;
    }
    .head-phone-number {
      font-size: 12px;
      margin-right: 10px;
    }
    select {
      font-size: 12px;
      margin-right: 10px;
    }
    .header-bag-icon {
      img {
        width: 27px;
      }
    }
  }
  .mobile-select {
    display: block;
    position: absolute;
    top: 37%;
    right: 15%;
    z-index: 1;
    border: none;
    outline: none;
    background: transparent;
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #ffffff;
    padding: 0 8px;
    option {
      color: #ffffff;
      background-color: #148e3c;
      border: none;
      outline: none;
    }
  }
  .burger {
    display: block;
    position: absolute;
    top: 37%;
    right: 5%;
    z-index: 4;
  }
  .burger span {
    padding: 1.5px 13px;
    background: #fff;
    margin: 3px 0px;
    border-radius: 5px;
    display: block;
    transition: all 0.5s ease;
  }
  .navbar {
    background: #148e3c;
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100vh;
    transition: transform 1s ease;
    z-index: 3;
  }
  .navbar-inner {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .office-shop {
      display: block;
      p {
        line-height: 22px;
      }
    }
    .contact-language {
      display: flex;
    }
  }
  .category-select {
    color: #fff;
  }
  .nav-link {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    li {
      width: 100%;
      height: 30px;
      border-bottom: 1px solid #077507;
      cursor: pointer;
      a {
        color: white;
        font-size: 18px;
      }
    }
    li:nth-child(1) a {
      color: #e7ea09;
    }
  }

  .nav-link a {
    color: white;
    font-size: 18px;
  }
  .nav-open {
    transform: translateX(-100%);
  }
  .toggle .line1 {
    transform: rotateZ(45deg) translateY(300%);
    background: #ffffff;
  }
  .toggle .line2 {
    opacity: 0;
  }
  .toggle .line3 {
    transform: rotateZ(-45deg) translateY(-300%);
    background: #ffffff;
  }

  //================== Navbar Section ==============
  .nav-link li {
    font-size: 14px;
  }
}
</style>

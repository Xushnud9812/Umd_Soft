<template>
    <header>
        <nav class="header-nav">
            <div class="logo">
                <img src="@/assets/image/logo.svg" />
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
                    <img src="@/assets/image/bag.svg" />
                    <div class="header-count">
                        <span>3</span>
                    </div>
                </div>
            </div>
            <a href="#" class="hamburger-icon">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </a>
            <fa class="bar" id="bar" icon="bars" />
        </nav>
    </header>
</template>

<script>
export default {

    mounted() {
        let bar = document.getElementById("bar");
        let menu = document.getElementById("menu");
        let navbar = document.getElementById("navbar-inner");
        let close = document.getElementById("close");

        bar.addEventListener("click", function() {
            //   navbar.classList.add('opened');
            navbar.classList.toggle("opened");

              if(navbar.classList.contains === 'opened'){
                  console.log('iwladi')
              navbar.classList.remove('opened');
              }
        });
    }
};
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
li{
    list-style-type: none;
}
a{
    text-decoration: none;
}
header {
    background: #699536;
}
.bar {
    font-size: 20px;
    color: #fff;
    display: none;
}
.header-nav {
    width: 90%;
    height: 79px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.office-shop {
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
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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
</style>

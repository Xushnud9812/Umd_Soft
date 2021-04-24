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

            if (navbar.classList.contains === "opened") {
                console.log("iwladi");
                navbar.classList.remove("opened");
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

////// header media

@media (min-width: 1281px) {
    .office-shop p {
        font-size: 22px !important;
    }
    .office-shop h3 {
        font-size: 24px !important;
    }
    .contact-language .head-phone-number {
        font-size: 20px !important;
    }
    .content_language p {
        font-size: 18px !important;
    }
}

@media (min-width: 1024px) and (max-width: 1280px) {
    .office-shop p {
        font-size: 18px !important;
        line-height: 115%;
    }
    .office-shop h3 {
        font-size: 20px !important;
    }
    .header-bag-icon img {
        transform: scale(0.9);
    }

    .contact-language .head-phone-number {
        font-size: 14px !important;
    }
    .content_language select {
        font-size: 17px !important;
    }
    .logo img {
        transform: scale(0.8) !important;
    }
    .nav-link li a {
        padding: 8px 0px;
        font-size: 14px;
    }
    .category-select {
        font-size: 14px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .office-shop p {
        font-size: 0.7rem !important;
    }
    .office-shop h3 {
        font-size: 12px !important;
    }
    .logo img {
        transform: scale(0.7);
    }
    .contact-language .head-phone-number {
        font-size: 11px !important;
    }
    .content_language select {
        font-size: 16px !important;
    }
    .header-bag-icon img {
        transform: scale(0.7);
    }
    .header-nav {
        width: 96%;
    }
    
    .slide-text h1 {
        font-size: 37px;
    }
    .slide-text p {
        font-size: 15px;
    }
    .slide-text .home-button {
        width: 80px;
        height: 30px;
    }
    .slide-text {
        top: 40%;
    }
    
}

@media (min-width: 481px) and (max-width: 767px) {
    .office-shop p {
        font-size: 0.5rem !important;
    }
    .office-shop h3 {
        font-size: 9px !important;
    }
    .logo img {
        transform: scale(0.6);
    }
    .contact-language .head-phone-number {
        font-size: 14px !important;
        line-height: 10px;
    }
    .content_language select {
        font-size: 15px !important;
    }
    .header-bag-icon img {
        transform: scale(0.8);
    }
    .header-nav{
        margin: 0px 0px;
        width: 96%;
    }
    .navbar-inner {
        width: 200px !important;
    }
    .bar {
        display: block !important;
    }
    .office-shop p {
        display: none;
    }
    .office-shop h3{
        display: none;
    }
    .slide-text h1 {
        font-size: 28px;
        line-height: 40px;
    }
    .slide-text p {
        font-size: 12px;
    }
    .slide-text .home-button {
        width: 60px;
        height: 20px;
        font-size: 10px;
    }
    .slide-text {
        top: 40%;
    }

  
}

@media (max-width: 480px) {
    .navbar-inner {
        display: none !important;
    }
    .bar {
        display: block !important;
    }
    .office-shop p {
        display: none;
    }
    .office-shop h3 {
        display: none;
    }
    .logo img {
        transform: scale(0.6);
    }
    .contact-language .head-phone-number {
        font-size: 14px !important;
        line-height: 10px;
        display: none;
    }
    .contact-language select {
        font-size: 14px !important;
        // color: red;
    }
    .header-bag-icon img {
        transform: scale(0.7);
    }
    .slide-text h1 {
        font-size: 18px;
        line-height: 20px;
    }
    .slide-text p {
        font-size: 8px;
    }
    .slide-text .home-button {
        width: 60px;
        height: 20px;
        font-size: 10px;
    }
    .slide-text {
        top: 50%;
    }

   
}
</style>

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

        const btn1 = document.getElementById("btn1");
        const btn2 = document.getElementById("btn2");
        const btn3 = document.getElementById("btn3");

        btn1.addEventListener("click", e => {
            btn1.classList.toggle("s-click");
            btn2.classList.remove("s-click");
            btn3.classList.remove("s-click");
        });

        btn2.addEventListener("click", e => {
            btn1.classList.remove("s-click");
            btn2.classList.toggle("s-click");
            btn3.classList.remove("s-click");
        });

        btn3.addEventListener("click", e => {
            btn1.classList.remove("s-click");
            btn2.classList.remove("s-click");
            btn3.classList.toggle("s-click");
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
    .office-shop h3[data-v-1a9bb128] {
        font-size: 24px !important;
    }
    .contact-language .head-phone-number[data-v-1a9bb128] {
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
    .office-shop h3[data-v-1a9bb128] {
        font-size: 20px !important;
    }
    .header-bag-icon img {
        transform: scale(0.9);
    }

    .contact-language .head-phone-number[data-v-1a9bb128] {
        font-size: 14px !important;
    }
    .content_language select {
        font-size: 17px !important;
    }
    .logo img {
        transform: scale(0.8) !important;
    }
    .nav-link li a[data-v-cfc91daa] {
        padding: 8px 0px;
        font-size: 14px;
    }
    .category-select[data-v-cfc91daa] {
        font-size: 14px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .office-shop p {
        font-size: 0.7rem !important;
    }
    .office-shop h3[data-v-1a9bb128] {
        font-size: 12px !important;
    }
    .logo img {
        transform: scale(0.7);
    }
    .contact-language .head-phone-number[data-v-1a9bb128] {
        font-size: 11px !important;
    }
    .content_language select {
        font-size: 16px !important;
    }
    .header-bag-icon img {
        transform: scale(0.7);
    }
    .header-nav[data-v-1a9bb128] {
        width: 96%;
    }
    .nav-link li a[data-v-cfc91daa] {
        padding: 8px 0px;
        font-size: 11px;
    }
    .category-select[data-v-cfc91daa] {
        font-size: 10px;
    }
    .navbar-inner[data-v-cfc91daa] {
        width: 98% !important;
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
    //  footer
    .foot-logo img {
        transform: scale(0.7);
        margin-left: -15px;
    }
     .our-advantages {
        // flex-direction: column;
        .advantages {
            padding: 60px 0px 50px 90px;
            width: 50%;
            height: 421px;
                flex: 1 1 30rem;
            // flex: 0;
        }
        .advantages-img {
            width: 50%  ;
                flex: 1 1 30rem;
            height: auto;
            img{
                width: 100%;
                height: auto;
            }
        }
    }
}

@media (min-width: 481px) and (max-width: 767px) {
    .office-shop p {
        font-size: 0.5rem !important;
    }
    .office-shop h3[data-v-1a9bb128] {
        font-size: 9px !important;
    }
    .logo img {
        transform: scale(0.6);
    }
    .contact-language .head-phone-number[data-v-1a9bb128] {
        font-size: 14px !important;
        line-height: 10px;
    }
    .content_language select {
        font-size: 15px !important;
    }
    .header-bag-icon img {
        transform: scale(0.8);
    }
    .header-nav[data-v-1a9bb128] {
        margin: 0px 0px;
        width: 96%;
        // justify-content: end !important;
    }
    .navbar-inner[data-v-cfc91daa] {
        width: 200px !important;
        // display: none !important;
    }
    .bar {
        display: block !important;
    }
    .office-shop p {
        display: none;
    }
    .office-shop h3[data-v-1a9bb128] {
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

    //////////////////// Menu

    .nav-link[data-v-cfc91daa] {
        display: block !important;
        z-index: 2;
        width: 130px;
    }
    .navbar-inner[data-v-cfc91daa] {
        position: absolute;
        flex-direction: column;
        height: auto;
        width: 100% !important;
        transition: 0.5s;
    }
    .nav-link[data-v-cfc91daa] {
        display: block;
        background: #699536 !important ;
        z-index: 2;
        width: 50% !important;
        position: absolute;
        left: -100%;
        z-index: 22;
        transition: 0.5s;
        top: -90px;
        opacity: 1;
    }
    .nav-link li[data-v-cfc91daa] {
        padding: 10px;
        border-bottom: 1px solid yellowgreen;
        cursor: pointer;
    }
    .navbar[data-v-cfc91daa] {
        background: none !important;
        width: 100%;
        height: 100vh;
        transition: 0.5s;
        left: 0px;
        position: absolute;
        z-index: 10;
    }
    .nav-link li a[data-v-cfc91daa] {
        color: #fff !important;
    }
    .category-select[data-v-cfc91daa] {
        position: absolute;
        top: -120px;
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
    .navbar-inner[data-v-cfc91daa] {
        display: none !important;
    }
    .bar {
        display: block !important;
    }
    .office-shop p {
        display: none;
    }
    .office-shop h3[data-v-1a9bb128] {
        display: none;
    }
    .logo img {
        transform: scale(0.6);
    }
    .contact-language .head-phone-number[data-v-1a9bb128] {
        font-size: 14px !important;
        line-height: 10px;
        display: none;
    }
    .contact-language select[data-v-1a9bb128] {
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

    ///////////////// menu

    .nav-link[data-v-cfc91daa] {
        display: block !important;
        z-index: 2;
        width: 130px;
    }
    .navbar-inner[data-v-cfc91daa] {
        position: absolute;
        flex-direction: column;
        height: auto;
        // z-index: 22;
        // top: 40px;
        width: 100% !important;
        transition: 0.5s;
        // display: none;
    }
    .nav-link[data-v-cfc91daa] {
        display: block;
        background: #699536 !important ;
        z-index: 2;
        width: 100% !important;
        position: absolute;
        left: -100%;
        z-index: 22;
        transition: 0.5s;
        top: 99px;
    }
    .nav-link li[data-v-cfc91daa] {
        padding: 10px;
        border-bottom: 1px solid yellowgreen;
        cursor: pointer;
    }
    .navbar[data-v-cfc91daa] {
        background: none !important;
        transition: 0.5s;
        z-index: 10;
    }
    .nav-link li a[data-v-cfc91daa] {
        color: #fff !important;
    }
    .category-select[data-v-cfc91daa] {
        position: absolute;
        top: 00px;
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

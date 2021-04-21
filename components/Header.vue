<template>
  <header>
        <nav class="header-nav">
            <div class="logo">
                 <img src="~/assets/image/logo.svg" />
            </div>
            <div class="office-shop">
                <p>ОФИЦИАЛНЫЙ ИНТЕРНЕТ МАГАЗИН В УЗБЕКИСТАНЕ</p>
                <h3>Все наченается с мечты !</h3>
            </div>
            <div class="contact-language">
                <img class="header-phone-icon" src="/image/phone.svg" alt="">
                <p class="head-phone-number">+998 (99) 329-14-04</p>
                <select name="#" id="#">
                    <option value="#">uz</option>
                    <option value="#">ру</option>
                </select>
                <div class="header-bag-icon">
                     <img src="~/assets/image/bag.svg" />
                    <div class="header-count">
                        <span>3</span>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    mounted(){
        const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn1.addEventListener('click', (e) => {
      btn1.classList.toggle("s-click");
      btn2.classList.remove("s-click");
      btn3.classList.remove("s-click");
})

btn2.addEventListener('click', (e) => {
    btn1.classList.remove("s-click");
    btn2.classList.toggle("s-click");
    btn3.classList.remove("s-click");
})

btn3.addEventListener('click', (e) => {
    btn1.classList.remove("s-click");
    btn2.classList.remove("s-click");
    btn3.classList.toggle("s-click");
})
    }

}
</script>

<style lang="scss" scoped>
header{
     background: #699536;
}
.header-nav{
    width: 90%;
    height: 79px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.office-shop{
    p{
        font-family: "Roboto Bold",sans-serif;
        color: #fff;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 110%;
    }
    h3{
        font-family: 'Lobster', cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
        color: #E7EA09;
        text-align: center;
    }
}
.contact-language{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .header-phone-icon{
        margin-right: 20px;
    }
    .head-phone-number{
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        margin-right: 20px;
    }
    select{
        border: none;
        outline: none;
        background: transparent;
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        margin-right: 20px;
        option{
            color: black;
        }
    }
    .header-bag-icon{
        position: relative;
        .header-count{
            position: absolute;
            top: 0;
            right: 0;
            width: 13px;
            height: 13px;
            border-radius: 15px;
            background: #F7FA00;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
                display: block;
                color: black;
                font-family: "Roboto Bold",sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 14px;
            }
        }
    }
}

</style>
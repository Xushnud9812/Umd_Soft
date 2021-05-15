<template>
  <div>
    <!-- ========  Home section Slider  ================= -->
    <div class="slider">
      <div class="slides">
        <input class="input-slide" type="radio" name="radio-btn" id="radio1" />
        <input class="input-slide" type="radio" name="radio-btn" id="radio2" />
        <input class="input-slide" type="radio" name="radio-btn" id="radio3" />

        <div class="slide first">
          <span class="gradient"></span>
          <div class="slide-text">
            <h1>
              МЕЧТА <br />
              СОЧЕТАНИЕ КАЧЕСТВА И ВКУСА
            </h1>
            <p>ОФИЦИАЛНЫЙ ИНТЕРНЕТ МАГАЗИН В УЗБЕКИСТАНЕ</p>
            <a href="#" class="home-button"><span>Читат</span></a>
          </div>
          <img src="@/assets/image/sasa.svg" />
        </div>

        <div class="slide">
          <span class="gradient"></span>
          <div class="slide-text">
            <h1>
              МЕЧТА <br />
              СОЧЕТАНИЕ КАЧЕСТВА И ВКУСА
            </h1>
            <p>ОФИЦИАЛНЫЙ ИНТЕРНЕТ МАГАЗИН В УЗБЕКИСТАНЕ</p>
            <a href="#" class="home-button"><span>Читат</span></a>
          </div>
          <img src="@/assets/image/sasa.svg" />
        </div>

        <div class="slide">
          <span class="gradient"></span>
          <div class="slide-text">
            <h1>
              МЕЧТА <br />
              СОЧЕТАНИЕ КАЧЕСТВА И ВКУСА
            </h1>
            <p>ОФИЦИАЛНЫЙ ИНТЕРНЕТ МАГАЗИН В УЗБЕКИСТАНЕ</p>
            <a href="#" class="home-button"><span>Читат</span></a>
          </div>
          <img src="@/assets/image/sasa.svg" />
        </div>
      </div>

      <div class="s-nagation-manual">
        <label for="radio1" id="btn1" class="s-manual-btn s-click"></label>
        <label for="radio2" id="btn2" class="s-manual-btn"></label>
        <label for="radio3" id="btn3" class="s-manual-btn"></label>
      </div>
    </div>

    <!-- =========== New Product section ================ -->
    <main>
      <section class="new-product">
        <h2>Новинки продаж</h2>
        <div class="new-product-in">
          <div class="product-card" v-for="i of item" :key="i">
            <div class="card-img">
              <div class="card-img-in">
               <nuxt-link :to="{
                 name: 'product-id',
                 params: {id: i._id}
               }">
                  <img :src="`http://server.mechta-posuda.uz:3000/${i.images[0].url}`" />
               </nuxt-link>

              </div>
            </div>
            <div class="card-text">
              <p class="info-pro">
                {{ i.nameUz }}
              </p>
              <span>Серия Гранит</span>
              <div class="price-savat">
                <p class="price">{{ i.price }} Сум</p>
                <button type="button">В Корзину</button>
              </div>
            </div>
          </div>

          <!-- <div class="product-card">
            <div class="card-img">
              <div class="card-img-in">
                <a href="#">
                  <img src="@/assets/image/qozon.png" />
                </a>
              </div>
            </div>
            <div class="card-text">
              <p class="info-pro">
                Сковорода - гриль с крышкойи несъемной ручкой «Гранит» 26*26 см
              </p>
              <span>Серия Гранит</span>
              <div class="price-savat">
                <p class="price">190,000 Сум</p>
                <button type="button">В Корзину</button>
              </div>
            </div>
          </div>

          <div class="product-card">
            <div class="card-img">
              <div class="card-img-in">
                <a href="#">
                  <img src="@/assets/image/qozon.png" />
                </a>
              </div>
            </div>
            <div class="card-text">
              <p class="info-pro">
                Сковорода - гриль с крышкойи несъемной ручкой «Гранит» 26*26 см
              </p>
              <span>Серия Гранит</span>
              <div class="price-savat">
                <p class="price">190,000 Сум</p>
                <button type="button">В Корзину</button>
              </div>
            </div>
          </div>

          <div class="product-card">
            <div class="card-img">
              <div class="card-img-in">
                <a href="#">
                  <img src="@/assets/image/qozon.png" />
                </a>
              </div>
            </div>
            <div class="card-text">
              <p class="info-pro">
                Сковорода - гриль с крышкойи несъемной ручкой «Гранит» 26*26 см
              </p>
              <span>Серия Гранит</span>
              <div class="price-savat">
                <p class="price">190,000 Сум</p>
                <button type="button">В Корзину</button>
              </div>
            </div>
          </div>

          <div class="product-card">
            <div class="card-img">
              <div class="card-img-in">
                <a href="#">
                  <img src="@/assets/image/qozon.png" />
                </a>
              </div>
            </div>
            <div class="card-text">
              <p class="info-pro">
                Сковорода - гриль с крышкойи несъемной ручкой «Гранит» 26*26 см
              </p>
              <span>Серия Гранит</span>
              <div class="price-savat">
                <p class="price">190,000 Сум</p>
                <button type="button">В Корзину</button>
              </div>
            </div>
          </div>

          <div class="product-card">
            <div class="card-img">
              <div class="card-img-in">
                <a href="#">
                  <img src="@/assets/image/qozon.png" />
                </a>
              </div>
            </div>
            <div class="card-text">
              <p class="info-pro">
                Сковорода - гриль с крышкойи несъемной ручкой «Гранит» 26*26 см
              </p>
              <span>Серия Гранит</span>
              <div class="price-savat">
                <p class="price">190,000 Сум</p>
                <button type="button">В Корзину</button>
              </div>
            </div>
          </div>

          <div class="product-card">
            <div class="card-img">
              <div class="card-img-in">
                <a href="#">
                  <img src="@/assets/image/qozon.png" />
                </a>
              </div>
            </div>
            <div class="card-text">
              <p class="info-pro">
                Сковорода - гриль с крышкойи несъемной ручкой «Гранит» 26*26 см
              </p>
              <span>Серия Гранит</span>
              <div class="price-savat">
                <p class="price">190,000 Сум</p>
                <button type="button">В Корзину</button>
              </div>
            </div>
          </div>

          <div class="product-card">
            <div class="card-img">
              <div class="card-img-in">
                <a href="#">
                  <img src="@/assets/image/qozon.png" />
                </a>
              </div>
            </div>
            <div class="card-text">
              <p class="info-pro">
                Сковорода - гриль с крышкойи несъемной ручкой «Гранит» 26*26 см
              </p>
              <span>Серия Гранит</span>
              <div class="price-savat">
                <p class="price">190,000 Сум</p>
                <button type="button">В Корзину</button>
              </div>
            </div>
          </div> -->
        </div>
      </section>
    </main>

    <!-- ============= Discount section ================ -->
    <Discount />
    <!-- ============= Video section ================ -->
    <main>
      <section class="video-section">
        <h2 class="video-head">Видео обзоры</h2>
        <div class="video-inner">
          <div class="video-card">
            <span class="opacity-black"></span>
            <div class="video-play">
              <img class="paly-icon" src="@/assets/image/play.svg" />
            </div>
            <img class="video-card-img" src="@/assets/image/sasa.svg" />
          </div>
          <div class="video-card">
            <span class="opacity-black"></span>
            <div class="video-play">
              <img class="paly-icon" src="@/assets/image/play.svg" />
            </div>
            <img class="video-card-img" src="@/assets/image/sasa.svg" />
          </div>
        </div>
      </section>
    </main>

    <!-- ============= Advantages section ================ -->
    <section class="our-advantages">
      <div class="advantages">
        <h2>Наши преимуществa</h2>
        <ul>
          <li>
            <img src="@/assets/image/clients.svg" />
            <span>Боле 3500 клиентов</span>
          </li>
          <li>
            <img src="@/assets/image/pay.svg" />
            <span>Форма оплата любоя</span>
          </li>
          <li>
            <img src="@/assets/image/shops.svg" />
            <span>Боле 3500 торговых</span>
          </li>
          <li>
            <img src="@/assets/image/trak.svg" />
            <span>Бесплатная доставка</span>
          </li>
          <li>
            <img src="@/assets/image/watch.svg" />
            <span>Ежедневное обслуживание</span>
          </li>
        </ul>
      </div>
      <div class="advantages-img">
        <img src="@/assets/image/sasa.svg" />
      </div>
    </section>
    <Slider />
  </div>
</template>

<script>
export default {
  // 1
  async asyncData({ $axios }) {
    const item = await $axios.$get("http://mechta-posuda.uz:3000/api/product");
    return { item };
  },
  
  // 2
  // data(){
  //     return{
  //         ip: []
  //     }
  // },
  // async mounted(){
  //     await this.$axios.$get('http://icanhazip.com')
  //     .then(res => {
  //         this.ip = res.data
  //     })
  //     .catch(err => {
  //         console.log(err)
  //     })
  // }
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
html,
body {
  overflow-x: hidden;
}
// ============= Home section Slider galery =================

.slider {
  margin: 0 auto;
  width: 100%;
  height: 551px;
  overflow: hidden;
}
.slides {
  width: 500%;
  display: flex;
  position: relative;
  .input-slide {
    display: none;
  }
  .slide {
    width: 20%;
    transition: 2s;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.29)),
    linear-gradient(
      90.64deg,
      rgba(20, 142, 60, 0.6) 16.29%,
      rgba(105, 149, 54, 0) 86.18%
    );
}
.slide-text {
  color: #fff;
  position: absolute;
  top: 31%;
  left: 10%;
  transform: translate(0, -43%);
  h1 {
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 67px;
    margin-bottom: 10px;
  }
  p {
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 40px;
  }
  .home-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    width: 120px;
    height: 40px;
    border-radius: 2px;
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
  }
}
svg {
  width: 100%;
  height: 100%;
}
.s-nagation-manual {
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0);
  z-index: 1;
}
.s-manual-btn {
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;
}
.s-click {
  background: #f7fa00;
}
.s-manual-btn:not(:last-child) {
  margin-right: 15px;
}

#radio1:checked ~ .first {
  margin-left: 0;
}
#radio2:checked ~ .first {
  margin-left: -20%;
}
#radio3:checked ~ .first {
  margin-left: -40%;
}

// center
main {
  width: 90%;
  margin: 0 auto;
}

// ============= New Product section =================

.new-product {
  margin: 20px 0;
  h2 {
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: calc(100% + 34px);
    line-height: 56px;
    color: #323232;
    margin-bottom: 40px;
  }
}

.new-product-in {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  flex: 1 1 15rem;
  background-color: #ffffff;
  margin: 12px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: relative;
  transition: all 0.5s ease;
  .card-img {
    .card-img-in {
      width: 199px;
      height: 199px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  &:hover {
    transform: translateY(-8px);
  }
}

.card-text {
  margin: 10px;
  .info-pro {
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    height: 58px;
    color: #323232;
    margin-bottom: 9px;
  }
  span {
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #666666;
  }
  .price-savat {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }
  .price {
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #148e3c;
  }
  button {
    border: 2px solid #148e3c;
    color: #148e3c;
    outline: none;
    background: #fff;
    width: 99px;
    height: 32px;
    border-radius: 2px;
  }
}

// =========== Product discount Slider section ===========
.discount {
  background-color: #148e3c;
  .discount-inner {
    display: flex;
    flex-direction: row;
  }
  .discount-slider {
    width: 75%;
  }
}
// Order card
.order-card {
  padding: 50px 16px;
  background-color: #fff;
  width: 274px;
  height: 354px;
  margin: 12px;
  .order-card-in {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
    h4 {
      font-family: "Roboto Bold", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 23px;
      text-align: center;
      color: #000000;
    }
    .logo {
      height: 60px;
    }
    p {
      font-family: "Roboto Bold", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #000000;
    }
    .input-order {
      width: 100%;
      height: 45px;
      padding: 0 15px;
      margin-bottom: 20px;
      outline: none;
      font-family: "Roboto Bold", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
      border-radius: 3px;
      border: 2px solid #148e3c;
      display: block;
    }
    button {
      width: 100%;
      height: 45px;
      outline: none;
      border: none;
      background-color: #148e3c;
      border-radius: 3px;
      color: #ffffff;
      font-family: "Roboto Bold", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
    }
  }
}

// ================= Click Video ==================
.click-video {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: rgba($color: #000000, $alpha: 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  transition: all 1s;
  video {
    outline: none;
    border: none;
    border-radius: 5px;
    width: 36%;
    .logo {
      height: 60px;
    }
    height: 350px;
  }
}
.videoNotSee {
  visibility: hidden;
}
.videoSee {
  visibility: unset;
}
.removeVideo {
  position: absolute;
  top: 5%;
  right: 5%;
  cursor: pointer;
  span {
    display: block;
    width: 36px;
    height: 5px;
    margin: 5px;
    border-radius: 3px;
    background-color: #ffffff;
  }
  span:nth-child(1) {
    transform: rotateZ(45deg) translateY(156%);
  }
  span:nth-child(2) {
    transform: rotateZ(-45deg) translateY(-144%);
  }
}
// ================= Video section ==================
.video-section {
  padding-top: 100px;
  padding-bottom: 79px;
  .video-head {
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    color: #323232;
    margin-bottom: 34px;
  }
}
.video-inner {
  display: flex;
  flex-wrap: wrap;
}

.video-card {
  flex: 1 1 30rem;
  position: relative;
  height: 347px;
  margin: 0 10px 10px 10px;

  .opacity-black {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba($color: #000000, $alpha: 0.3);
    z-index: 2;
  }
  .video-play {
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85px;
    height: 85px;
    border-radius: 50%;
    border: 3px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
  }
  .video-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

// ================ Our advantages section =============
.our-advantages {
  width: 100%;
  display: flex;
  margin: 20px 0;
}
.advantages {
  flex: 1 1 30rem;
  height: 399px;
  background-color: #148e3c;
  padding: 30px 0 50px 135px;
  h2 {
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 39px;
    line-height: 56px;
    color: #ffffff;
    margin-bottom: 30px;
  }
  li {
    display: flex;
    align-items: center;
    span {
      margin-left: 20px;
      font-family: "Roboto Bold", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      color: #ffffff;
    }
  }
  li:not(:last-child) {
    margin-bottom: 20px;
  }
}
.advantages-img {
  flex: 1 1 30rem;
  height: 399px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
// ========== xit btn ===========
.xit-slider {
  margin: 0 auto;
  width: 100%;
  height: 451px;
  overflow: hidden;
}
.xit-slides {
  width: 500%;
  display: flex;
  .input-slide {
    display: none;
  }
  .xit-slide {
    width: 20%;
    transition: 2s;
    position: relative;
    display: flex;
  }
}

svg {
  width: 100%;
  height: 100%;
}
.xit-manual-btn {
  position: absolute;
  left: 50%;
  // top: 90%;
  transform: translate(-50%, 0);
  z-index: 1;
}
.s-manual-btn {
  display: inline-block;
  width: 13px;
  height: 13px;
  background: #c4c4c4;
  border-radius: 10px;
  cursor: pointer;
}
.s-click {
  background: #f7fa00;
}
.s-manual-btn:not(:last-child) {
  margin-right: 15px;
}

#radioXit1:checked ~ .first {
  margin-left: 0;
}
#radioXit2:checked ~ .first {
  margin-left: -20%;
}
#radioXit3:checked ~ .first {
  margin-left: -40%;
}

.xit-circle {
  width: 48px;
  height: 48px;
  background: #148e3c;
  border-radius: 50%;
  z-index: 5;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  .xit {
    font-family: "Roboto Bold", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    color: #fff;
  }
}
.item-a {
  .product-card {
    width: 270px;
    padding: 2px;
  }
}
// ================== Responsive ========================
@media (min-width: 1281px) {
  //  .container-pro{

  //  }
}

/*
      ##Device = Laptops, Desktops
      ##Screen = B/w 1025px to 1280px
    */

@media (min-width: 1025px) and (max-width: 1280px) {
  // =============== home slider section ==================
  .slider {
    height: 437px;
  }

  // ================ New Product section ================
  .new-product h2 {
    font-size: calc(100% + 23px);
  }
  // ================ Discount section ============
  .discount .discount-slider {
    width: 71%;
  }
  // =============== Video section ================
  .video-section {
    padding-top: 45px;
    padding-bottom: 40px;
    .video-head {
      font-size: calc(100% + 23px);
    }
    .video-card {
      flex: 1 1 25rem;
      height: 293px;
    }
  }
  // =============== Advantages section ================
  .advantages {
    padding: 10px 0 50px 36px;
  }

  // Center Product
  main {
    width: 95%;
  }
}

/*
      ##Device = Tablets, Ipads (portrait)
      ##Screen = B/w 768px to 1024px
    */

@media (min-width: 768px) and (max-width: 1024px) {
  main {
    width: 95%;
  }

  // =============== home slider section ==================
  .slider {
    height: 437px;
  }
  .slide-text {
    h1 {
      font-size: 28px;
      line-height: 38px;
    }
    p {
      margin-bottom: 24px;
    }
  }
  .s-nagation-manual {
    bottom: 13%;
  }
  // ================ New Product section ================
  .new-product h2 {
    font-size: calc(100% + 23px);
  }
  // ================ Discount section ============
  .discount {
    .discount-inner {
      flex-direction: column;
    }
    .discount-slider {
      width: 100%;
    }
    .order-card {
      width: 100%;
      margin-bottom: 12px;
    }
  }
  // =============== Video section ================
  .video-section {
    padding-top: 45px;
    padding-bottom: 40px;
    .video-head {
      font-size: calc(100% + 23px);
    }
    .video-card {
      flex: 1 1 20rem;
      height: 240px;
    }
  }
  // =============== Advantages section ================
  .advantages {
    padding: 10px 0 50px 36px;
    height: 365px;
    h2 {
      font-size: 30px;
      line-height: 47px;
      margin-bottom: 10px;
    }
  }
  .advantages-img {
    height: 365px;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  main {
    width: 95%;
  }

  // =============== home slider section ==================
  .slider {
    height: 296px;
  }
  .slide-text {
    top: 30%;
    left: 5%;
    h1 {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 4px;
    }
    p {
      font-size: 16px;
      margin-bottom: 14px;
    }
    .home-button {
      width: 94px;
      height: 33px;
    }
  }
  .s-nagation-manual {
    bottom: 37%;
  }
  // ================ New Product section ================
  .new-product h2 {
    font-size: calc(100% + 15px);
    margin-bottom: 0px;
  }
  // ================ Discount section ============
  .discount {
    .discount-inner {
      flex-direction: column;
    }
    .discount-slider {
      width: 98%;
    }
    .item-a .product-card {
      width: 230px;
    }
    .order-card {
      width: 96%;
      margin: 0 auto;
      margin-bottom: 12px !important;
    }
  }
  // =============== Video section ================
  .video-section {
    padding-top: 15px;
    padding-bottom: 40px;
    .video-head {
      font-size: calc(100% + 15px);
      margin-bottom: 12px;
    }
    .video-card {
      flex: 1 1 20rem;
      height: 240px;
    }
  }
  // =============== Advantages section ================
  .advantages {
    padding: 10px 0 50px 36px;
    height: 365px;
    h2 {
      font-size: 30px;
      line-height: 47px;
      margin-bottom: 10px;
    }
  }
  .advantages-img {
    height: 365px;
    display: none;
  }
  .item-a .product-card {
    width: 230px;
  }

  .product-card {
    flex: 1 1 12rem;
  }

  main {
    width: 98%;
    margin: 0 auto;
  }
}

/*
      ##Device = Most of the Smartphones Mobiles (Portrait)
      ##Screen = B/w 320px to 479px
    */
@media (min-width: 320px) and (max-width: 480px) {
  main {
    width: 95%;
  }

  // =============== home slider section ==================
  .slider {
    height: 201px;
  }
  .slide-text {
    top: 30%;
    left: 5%;
    h1 {
      font-size: 15px;
      line-height: 20px;
      margin-bottom: 2px;
    }
    p {
      font-size: 12px;
      margin-bottom: 9px;
    }
    .home-button {
      width: 75px;
      height: 25px;
      font-size: 14px;
    }
  }
  .s-nagation-manual {
    bottom: 53%;
  }
  // ================ New Product section ================
  .new-product h2 {
    font-size: calc(100% + 15px);
    margin-bottom: 0px;
    text-align: center;
  }
  // ================ Discount section ============
  .discount {
    .discount-inner {
      flex-direction: column;
    }
    .discount-slider {
      width: 98%;
    }
    .item-a .product-card {
      width: 295px;
    }
    .order-card {
      width: 96%;
      margin: 0 auto;
      margin-bottom: 12px !important;
    }
  }
  // =============== Video section ================
  .video-section {
    padding-top: 15px;
    padding-bottom: 40px;
    .video-head {
      font-size: calc(100% + 15px);
      margin-bottom: 12px;
    }
    .video-card {
      flex: 1 1 20rem;
      height: 240px;
    }
  }
  // =============== Advantages section ================
  .advantages {
    padding: 10px 0 50px 36px;
    height: 365px;
    h2 {
      font-size: 26px;
      line-height: 41px;
      margin-bottom: 10px;
    }
    li span {
      margin-left: 20px;
      font-family: "Roboto Bold", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      color: #ffffff;
    }
  }
  .advantages-img {
    height: 365px;
    display: none;
  }
  .item-a .product-card {
    width: 295px;
  }

  .product-card {
    flex: 1 1 12rem;
  }

  main {
    width: 98%;
    margin: 0 auto;
  }
}
</style>

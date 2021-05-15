<template>
  <div class="carousel">
    <Carousel v-bind="settings">
      <div class="card-slider">
        <div class="product-card">
          <div class="xit-circle">
            <span class="xit">ХИТ</span>
          </div>
          <div class="card-img">
            <div class="card-img-in">
              <img src="@/assets/image/qozon.png" />
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
      </div>

      <div class="card-slider">
        <div class="product-card">
          <div class="xit-circle">
            <span class="xit">ХИТ</span>
          </div>
          <div class="card-img">
            <div class="card-img-in">
              <img src="@/assets/image/qozon.png" />
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
      </div>

      <div class="card-slider">
        <div class="product-card">
          <div class="xit-circle">
            <span class="xit">ХИТ</span>
          </div>
          <div class="card-img">
            <div class="card-img-in">
              <img src="@/assets/image/qozon.png" />
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
      </div>

      <div class="card-slider">
        <div class="product-card">
          <div class="xit-circle">
            <span class="xit">ХИТ</span>
          </div>
          <div class="card-img">
            <div class="card-img-in">
              <img src="@/assets/image/qozon.png" />
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
      </div>

      <div class="card-slider">
        <div class="product-card">
          <div class="xit-circle">
            <span class="xit">ХИТ</span>
          </div>
          <div class="card-img">
            <div class="card-img-in">
              <img src="@/assets/image/qozon.png" />
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
      </div>

      <div class="card-slider">
        <div class="product-card">
          <div class="xit-circle">
            <span class="xit">ХИТ</span>
          </div>
          <div class="card-img">
            <div class="card-img-in">
              <img src="@/assets/image/qozon.png" />
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
      </div>

      <div class="card-slider">
        <div class="product-card">
          <div class="xit-circle">
            <span class="xit">ХИТ</span>
          </div>
          <div class="card-img">
            <div class="card-img-in">
              <img src="@/assets/image/qozon.png" />
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
      </div>
    </Carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
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
html,
body {
  overflow-x: hidden;
}
.carousel {
  width: 95%;
  margin: 30px auto;
}
.card-slider {
  margin: 12px;
}
.product-card {
  flex: 1 1 15rem;
  background-color: #ffffff;
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
  
  &:hover{
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
    margin: 7px;
  }
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

.product-card {
  width: 92%;
}

@media (min-width: 481px) and (max-width: 768px) {
  .product-card {
    width: 91%;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .product-card {
    width: 93%;
  }
}
</style>
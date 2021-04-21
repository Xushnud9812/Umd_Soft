<template>
  <div>
    <Carousel v-bind="slickOptions">
      <div>
           <div class="product-card">
        <div class="xit-circle">
            <span class="xit">ХИТ</span>
        </div>
        <div class="card-img">
            <div class="card-img-in">
                <img src="~/assets/image/qozon.png" />
            </div>
        </div>
        <div class="card-text">
            <p class="info-pro">Сковорода - гриль с крышкойи несъемной ручкой «Гранит» 26*26 см</p>
            <span>Серия Гранит</span>
            <div class="price-savat">
                 <p class="price">190,000 Сум</p>
                 <button type="button">В Корзину</button>
            </div>
        </div>
    </div>

      </div>

      <div>
 <div class="product-card">
        <div class="xit-circle">
            <span class="xit">ХИТ</span>
        </div>
        <div class="card-img">
            <div class="card-img-in">
                <img src="~/assets/image/qozon.png" />
            </div>
        </div>
        <div class="card-text">
            <p class="info-pro">Сковорода - гриль с крышкойи несъемной ручкой «Гранит» 26*26 см</p>
            <span>Серия Гранит</span>
            <div class="price-savat">
                 <p class="price">190,000 Сум</p>
                 <button type="button">В Корзину</button>
            </div>
        </div>
    </div>
      </div>

      <div>
           <div class="product-card">
        <div class="xit-circle">
            <span class="xit">ХИТ</span>
        </div>
        <div class="card-img">
            <div class="card-img-in">
               <img src="~/assets/image/qozon.png" />
            </div>
        </div>
        <div class="card-text">
            <p class="info-pro">Сковорода - гриль с крышкойи несъемной ручкой «Гранит» 26*26 см</p>
            <span>Серия Гранит</span>
            <div class="price-savat">
                 <p class="price">190,000 Сум</p>
                 <button type="button">В Корзину</button>
            </div>
        </div>
    </div>
      </div>

      <div>
           <div class="product-card">
        <div class="xit-circle">
            <span class="xit">ХИТ</span>
        </div>
        <div class="card-img">
            <div class="card-img-in">
                <img src="~/assets/image/qozon.png" />
            </div>
        </div>
        <div class="card-text">
            <p class="info-pro">Сковорода - гриль с крышкойи несъемной ручкой «Гранит» 26*26 см</p>
            <span>Серия Гранит</span>
            <div class="price-savat">
                 <p class="price">190,000 Сум</p>
                 <button type="button">В Корзину</button>
            </div>
        </div>
    </div>
      </div>

       <div>
           <div class="product-card">
        <div class="xit-circle">
            <span class="xit">ХИТ</span>
        </div>
        <div class="card-img">
            <div class="card-img-in">
                <img src="~/assets/image/qozon.png" />
            </div>
        </div>
        <div class="card-text">
            <p class="info-pro">Сковорода - гриль с крышкойи несъемной ручкой «Гранит» 26*26 см</p>
            <span>Серия Гранит</span>
            <div class="price-savat">
                 <p class="price">190,000 Сум</p>
                 <button type="button">В Корзину</button>
            </div>
        </div>
    </div>
      </div>

       <div>
           <div class="product-card">
        <div class="xit-circle">
            <span class="xit">ХИТ</span>
        </div>
        <div class="card-img">
            <div class="card-img-in">
                <img src="~/assets/image/qozon.png" />
            </div>
        </div>
        <div class="card-text">
            <p class="info-pro">Сковорода - гриль с крышкойи несъемной ручкой «Гранит» 26*26 см</p>
            <span>Серия Гранит</span>
            <div class="price-savat">
                 <p class="price">190,000 Сум</p>
                 <button type="button">В Корзину</button>
            </div>
        </div>
    </div>
      </div>

       <div>
           <div class="product-card">
        <div class="xit-circle">
            <span class="xit">ХИТ</span>
        </div>
        <div class="card-img">
            <div class="card-img-in">
                <img src="~/assets/image/qozon.png" />
            </div>
        </div>
        <div class="card-text">
            <p class="info-pro">Сковорода - гриль с крышкойи несъемной ручкой «Гранит» 26*26 см</p>
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
      slickOptions: {
        infinite: false,
        margin: 10,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
.product-card{
    flex: 1 1 15rem;
    background-color: #FFFFFF;
    margin: 12px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    position: relative;
    .card-img{
        .card-img-in{
            width: 199px;
            height: 199px;
            margin: 0 auto;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}

.card-text{
    margin: 10px;
    .info-pro{
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #323232;
        margin-bottom: 9px;
    }
    span{
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #666666;
        
    }
    .price-savat{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
    }
    .price{
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #148E3C;
    }
    button{
       border: 2px solid #148E3C;
       color: #148E3C;
       outline: none;
       background: #fff;
       width: 99px;
       height: 32px;
       border-radius: 2px;
    }
}

.xit-circle{
    width: 48px;
    height: 48px;
    background: #148E3C;
    border-radius: 50%;
    z-index: 5;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    .xit{
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 19px;
        text-align: center;
        color: #fff;
    }
}

    .product-card{
        width: 270px;
    }

</style>
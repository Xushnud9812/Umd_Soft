<template>
    <div>
     
<section class="product-info">
    <div class="pro-img-price">
        <div class="pro-img">
            <span class="pro-img-type">
              <span><img src="<%= info.img %>" alt="qozon"></span>
              <span><img src="<%= info.img %>" alt="qozon"></span>
              <span><img src="<%= info.img %>" alt="qozon"></span>
              <span><img src="<%= info.img %>" alt="qozon"></span>
            </span>
            <div>
                <img src="<%= info.img %>" alt="qozon">
            </div>
        </div>

        <div class="pro-price">
            <div class="price-info">
                <h3>Кастрюля «Гранит» 4л</h3>
                <p>Размер:<span class="size">4л</span></p>
                <p>Диаметр:<span class="diameter">24 см</span></p>
                <h3 class="price">220,000 Сум</h3>
            </div>

            <div class="buy">

                <div class="sum-color">
                    <div class="sum">
                        <span>Количество:</span>
                        <div class="sum-btn">
                            <button type="button">-</button>
                            <div><span>1</span></div>
                            <button type="button">+</button>
                        </div>
                    </div>
         
                    <div class="color">
                     <span>цвет:</span>
                        <div class="color-btn">
                           <div class="border1 border"><div class="green"></div></div>
                           <div class="border2 "><div class="brown"></div></div>
                           <div class="border3 "><div class="blue"></div></div>
                        </div>
                    </div>
                 </div> 

                 <div class="buy-btn">
                     <button type="button"><span></span> В Корзину</button>
                     <button type="button"><span></span> Заказать В Один Клик </button>
                 </div>

            </div>
        </div>
    </div>
</section>


<section class="description-note">

    <div class="tab">
        <div class="tab-btn">
            <div id="note" class="note btn-active"><span>Izoh</span></div>
            <div id="character" class="character"><span>Xarakteristika</span></div>
        </div>
        <div class="tab-content">
            <!-- description default none-->
            <p id="content-desc" class="content-desc content-none">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia assumenda ipsum quam autem commodi suscipit cum, veniam natus numquam nobis!

            </p>
            <!-- izoh -->
             <p id="content-note"  class="content-note ">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aperiam.
             </p>
        </div>
    </div>

</section>




    </div>
</template>

<script>
export default {
    name: 'Proinfo',
    components: { ProInfo },
    directives: { pages },
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
// Product info img 
.pro-img-price{
    display: flex;
}
.pro-img{
    flex: 1 1 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    div{
        width: 300px;
        height: 300px;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .pro-img-type{
        position: absolute;
        top: 0;
        left: 5px;
        span{
            display: block;
            width: 50px;
            height: 46px;
            border: 1px solid #148E3C;
            margin: 3px;
        }
    }
}

// =============== Product info price ===================
.pro-price{
    flex: 2 1 35rem;
}
.pro-price{
    display: flex;
    flex-direction: column;
}
// info small
.price-info{
    flex: 1 1 10rem;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h3{
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
    .price{
        color: #148E3C;
    }
    p{
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 16px;
        color: #666666;
    }
   
       .size{
        margin-left: 56px;
       }
       .diameter{
            margin-left: 30px;
        }
  
}
// buy section
.buy{
    flex: 1 1 10rem;
    border-top: 1px solid rgba($color: #000000, $alpha: 0.2);
}
.sum-color{
    display: flex;
}
.sum{
    margin-right: 20px;
    span{
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 16px;
        color: #666666;
    }
    .sum-btn{
        display: flex;
        align-items: center;
        div{
            width: 70px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 3px;
            border: 1px solid;
            margin: 0 5px;
        }
        button{
            border: none;
            outline: none;
            border-radius: 3px;
            background-color: #afafaf;
            width: 25px;
            height: 36px;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            font-family: "Roboto Bold",sans-serif;
        }
    }
}
.color{
    span{
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 16px;
        color: #666666;
    }

    .border{
        transform: rotate(90deg);
        border: 2px solid #148E3C; 
        padding: 2px;
      }

    .color-btn{
        display: flex;
        .border1, .border2, .border3{
                margin: 2px;
                width: 39px;
                height: 39px;
                transition: transform 0.8s ease-in-out;
            }
        .green{
            background: url("http://server.mechta-posuda.uz:3000/uploads/colors/1592845626501-granit.jpg");
            background-size: 75px;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
        }
        .brown{
            background: url("http://server.mechta-posuda.uz:3000/uploads/colors/1592825362765-granit_brown.jpg");
            background-size: 113px;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
        }
        .blue{
            background: url("http://server.mechta-posuda.uz:3000/uploads/colors/1592825694856-granit_ultra.jpg");
            background-size: 111px;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
        }
    }
}

.buy-btn{
    margin-top: 10px;
    button{
        border-radius: 2px;
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #148E3C;
        background-color: #fff;
        border: none;
        outline: none;
        border: 2px solid #148E3C;
    }
    button:nth-child(1){
        width: 132px;
        height: 38px;
        margin-right: 17px;
    }
    button:nth-child(2){
        width: 232px;
        height: 38px;
    }
}


// ======== Tab section ============
.description-note{
    padding: 0 10px;
  }
  .tab{
    border: 1px solid #148E3C;
    border-radius: 5px;
  }
  .tab-btn{
    border-bottom: 1px solid #148E3C;
    height: 35px;
    display: flex;
    justify-content: flex-end;
    div{
       font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #148E3C;
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        cursor: pointer;
        transition: all 0.5s ease;
        
    }
    .note{
        width: 100px;
        border-left: 1px solid #148E3C;
    }
    .character{
        width: 200px;
        border-left: 1px solid #148E3C;
    }
  }

  .tab-content{
    height: 150px;
    padding: 10px;
    p{
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
    }
  }
  
  .btn-active{
    background-color: rgba($color: #148E3C, $alpha: 0.8);
    span{
      color: #fff;
    }
  }
  
  .content-none{
    display: none;
  }


</style>
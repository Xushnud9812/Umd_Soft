<template>
    <div>
        <div class="container">
            <div class="row tag">
                <div class="col-md-4 col-12 ">
                    <div class="text">
                        <img src="@/assets/img/UMDSOFT.png" alt="" />
                        
                        <h1>IT Компания</h1>

                        <h1 style="min-height: 50px">
                            <span
                                class="txt-rotate"
                                data-period="2000"
                                data-rotate='[ "nerdy.", "simple.", "pure JS.", "pretty.", "fun!" ]'
                            ></span>
                        </h1>

                        <!-- <h2>Мобильная разрвязаться</h2> -->
                        <button @click="modal" type="button" class="">
                            Заказат проект
                        </button>
                    </div>
                </div>
                <div class="col-md-8 col-12">
                    <div class="img">
                        <img src="@/assets/img/Graphics.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        var TxtRotate = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 0) || 2000;
            this.txt = "";
            this.tick();
            this.isDeleting = false;
        };

        TxtRotate.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) {
                delta /= 2;
            }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === "") {
                this.isDeleting = false;
                this.loopNum++;
                delta = 100;
            }

            setTimeout(function() {
                that.tick();
            }, delta);
        };

        var elements = document.getElementsByClassName("txt-rotate");
        for (var i = 0; i < elements.length; i++) {
            var toRotate = ["Мобильная разрвязаться", "Веб дизайн", "SMM дизайн ", "", ""];
            var period = elements[i].getAttribute("data-period");

            console.log("too->", toRotate);
            if (toRotate) {
                new TxtRotate(elements[i], toRotate, period);
            }
        }
    },
    methods: {
        modal() {
            this.$store.commit("changeButton");
            // clickoutside(changeButton)
        }
    }
};
</script>

<style lang="scss">
span.wrap {
    background-color: transparent !important;
    border-right: 2px solid #1e6bdd;
    padding: 0px;
    color: #1e6bdd;
}
* {
    transition: 0.5s;
}
.tag {
    margin-top: 70px;
    .text {
        padding-top: 100px;
        img {
            width: 393px;
        }
        h1 {
            margin-top: 20px;
            // margin-bottom: 20px;
            font-style: normal;
            font-weight: 600;
            font-size: 30px;
            line-height: 141.3%;
            color: #202020;
        }
        h2 {
            font-weight: 500;
            font-size: 30px;
            line-height: 141.3%;
            color: #1e6bdd;
        }
        button {
            margin-top: 10px;

            padding: 10px 12px;
            background: #1e6bdd;
            color: #fff;
            border-radius: 5px;
            transition: 0.3s ease;
            border: 1px solid #1e6bdd;
        }
        button:active {
            outline: none;
        }
        button:focus {
            outline: none !important;
        }
        button:hover {
            background: #fff;
            color: #1e6bdd;
            border: 1px solid #1e6bdd;
        }
    }

    div.img {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-left: 40px;
    }
    img {
        width: 80%;
        pointer-events: none;
        // user-select: none;
        // margin-top: 30px;
        // margin-left: 400px;
    }
}
@media (min-width: 320px) and (max-width: 576px) {
    .tag {
        .text {
            padding: 20px 0;
            // margin: 0 0 0 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            img {
                width: 200px;
            }

            h1,
            h2 {
                font-size: 20px;
            }
        }

        div.img {
            display: none;
            width: 100%;
            justify-content: center;
            margin-left: 0;
        }
    }

    div.img {
        width: 100%;
        //height: 560, 36px;
        margin-left: 0px;
    }
    @media (min-width: 577px) and (max-width: 950px) {
        .tag {
            .text {
                padding: 20px 0;
                // margin: 0 0 0 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                img {
                    width: 200px;
                }

                h1,
                h2 {
                    font-size: 20px;
                }
            }

            div.img {
                width: 100%;
                justify-content: center;
                margin-left: 0;
            }
        }
    }
}
</style>

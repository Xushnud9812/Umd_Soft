<template>
    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            optio dignissimos architecto obcaecati nemo illum blanditiis
            assumenda quas, esse hic rerum cupiditate repellat dolore dicta
            ipsum fuga et quos vel.lorem Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Maiores maxime mollitia et provident natus
            suscipit perferendis voluptatum autem culpa voluptatem. Omnis, quod?
            Consequuntur consectetur maxime aliquam minus quia, expedita at?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, qui.
            Quia sapiente, iusto aliquid quae quasi enim non. Autem mollitia
            nam, voluptatibus eos ab eum aut asperiores modi labore
            reprehenderit? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Ducimus praesentium quas consequatur explicabo illum
            blanditiis commodi, sunt impedit totam tempore magnam eligendi sint
            asperiores exercitationem quasi eos ratione rerum dolores!
        </p>

        <div class="row">
            <div class="col-5">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam unde expedita velit debitis ab laborum veniam itaque
                    quo omnis possimus error eveniet praesentium maxime,
                    laudantium modi ut temporibus aliquid ullam!
                </p>
            </div>
            <div class="col-2">
                <div class="tik">
                    <div class="circle active"></div>
                    <div class="line active"></div>
                </div>
                <div class="tik">
                    <div class="circle"></div>
                    <div class="line"></div>
                </div>
                <div class="tik">
                    <div class="circle"></div>
                    <div class="line"></div>
                </div>
                <div class="tik">
                    <div class="circle"></div>
                    <div class="line"></div>
                </div>
                <div class="tik">
                    <div class="circle"></div>
                    <div class="line"></div>
                </div>
                <div class="tik">
                    <div class="circle"></div>
                    <div class="line"></div>
                </div>
            </div>
            <div class="col-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                eligendi voluptates repudiandae at eaque laudantium, voluptatum
                maiores quae hic delectus asperiores commodi ipsam consequatur
                quia fuga ad? Deserunt, nesciunt quam!
            </div>
        </div>

        <u-animate-container>
            
            <u-animate
                name="fadeIn"
                delay="0s"
                duration="1s"
                :iteration="1"
                :offset="0"
                animateClass="animate__animated animate__fadeInUp"
                :begin="false"
            >
                <h1>sefwesfweo;ihnef;kjn</h1>
            </u-animate>
        </u-animate-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            e1: 1
        };
    }

    // mounted() {
    //     this.$nextTick(() => {
    //         if (process.browser) {
    //             // On the page mounted In the life cycle Instantiate according to the environment WOW
    //             new WOW({ animateClass: "animate__animated" }).init();
    //         }
    //     });
    // }
};
</script>

<style lang="scss">
.tik{
        display: flex;
    width: 20px;
    /* background: silver; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.circle.active, .line.active{
    background: blue;
}
.circle{
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #E8EAF2;
}
.line{
    width: 6px;
    background: #E8EAF2;

    height: 110px;
}
</style>

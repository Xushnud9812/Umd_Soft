<template>
    <div>
        <div class="body">
            <div class="wrap">
                <!-- <div class="blocks"></div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // targets :1
        };
    },
    mounted() {
        
        const wrap = document.querySelector(".wrap");

        for (let i = 0; i <= 10; i++) {
            const blocks = document.createElement("div");
            blocks.classList.add("blocks");
            wrap.appendChild(blocks);
        }

        function animateBlock() {
            this.animation = anime({
                targets: ".block",
                translateX: function() {
                    return anime.random(-700, 700);
                },
                translateY: function() {
                    return anime.random(-500, 500);
                },
                scale: function() {
                    return anime.random(1, 5);
                },

                easing: linear,
                duration: 3000,
                delay: anime.stagger(10),
                complete: animateBlock
            });
        }
        animateBlock();

        //    function setPoint(key) {
        //         let one = this.random(-500, 500)
        //         let two = this.random(700, 700)
        // this.Xushnud();
    },
    methods: {
        Xushnud() {
            // const anime = this.$anime;

            anime({
                targets: ".block",
                translateX: function() {
                    return anime.random(-700, 700);
                },
                translateY: function() {
                    return anime.random(-500, 500);
                },
                scale: function() {
                    return anime.random(1, 5);
                },

                easing: linear,
                duration: 3000,
                delay: anime.stagger(10),
                complete: animateBlock
            });

            //         anime({
            //             targets: ".blocks",
            //             translateX: setPoint(blocks),
            //             // rotate: "1turn",
            //             // backgroundColor: "#FFF",
            //             duration: 2000
            //         });
            //     },

            //   this.animatePoint({ key, one, two })
            // }
        }
    }
};
</script>

<style lang="scss">
.body {
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
}
.blocks {
    position: absolute;
    width: 50px;
    height: 100px;
    background: #e80202;
    box-shadow: 0px 0px 10px;
}
</style>

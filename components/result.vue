<template>
    <div>
        <div class="Result">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Наши резултаты</h1>
                        <!-- <h3>
                          <span class="timer">15</span>+</h3> -->
                    </div>
                    <div class="col-3 number">
                        <h2><span class="timer">15</span>+</h2>
                        <h5>Компетентных специалистов</h5>
                        <div class="line2"></div>
                    </div>
                    <div class="col-3 number">
                        <h2><span class="timer">50</span>+</h2>
                        <h5>Довольные клиенты</h5>
                        <div class="line2"></div>
                    </div>
                    <div class="col-3 number">
                        <h2><span class="timer">75</span>%</h2>
                        <h5>Успешных проектов</h5>
                        <div class="line2 mt-2"></div>
                    </div>
                    <div class="col-3 number">
                        <h2><span class="timer">100</span>%</h2>
                        <h5>Успешных проектов</h5>
                        <div class="line2 mt-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        const animationDuration = 3000;

        const frameDuration = 1000 / 60;

        const totalFrames = Math.round(animationDuration / frameDuration);

        const easeOutQuad = t => t * (2 - t);

        const animateCountUp = el => {
            let frame = 0;
            const countTo = parseInt(el.innerHTML, 10);

            const counter = setInterval(() => {
                frame++;

                const progress = easeOutQuad(frame / totalFrames);

                const currentCount = Math.round(countTo * progress);

                if (parseInt(el.innerHTML, 10) !== currentCount) {
                    el.innerHTML = currentCount;
                }

                if (frame === totalFrames) {
                    clearInterval(counter);
                }
            }, frameDuration);
        };

        const countupEls = document.querySelectorAll(".timer");
        countupEls.forEach(animateCountUp);
    }
};
</script>

<style lang="scss">
.Result {
    background: #f6f6f6;
    margin-top: 90px;

    .col-12 {
        h1 {
            font-size: 48px;
            font-weight: bold;
            margin-top: 40px;
        }
    }

    .number {
        h2 {
            font-size: 48px;
            font-weight: 800;
            color: #1e6bdd;
            margin-top: 42px;
        }

        h5 {
            font-size: 16px;
            font-weight: inherit;
        }

        .line2 {
            background: #202020;
            width: 220px;
            height: 3px;
            margin-bottom: 41px;
        }
    }
}
</style>

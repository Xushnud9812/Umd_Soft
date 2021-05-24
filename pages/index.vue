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

        <div class="wrap">
            <div id="app ">
            <v-app id="inspire wrap1">
                <v-stepper v-model="e1">
                    <v-stepper-items>
                        <v-stepper-content step="1">
                             <p>Название организации</p>
                            <v-text-field
                                label=""
                                placeholder="Пример : UMDSOFT "
                            ></v-text-field>

                            <v-btn color="primary" @click="e1 = 2">
                                Enter
                            </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <p>Ф.И.О</p>
                            <v-text-field
                                label=""
                                placeholder="Пример : Насимов Мироншох "
                            ></v-text-field>

                            <v-btn color="primary" @click="e1 = 3">
                                Continue 2
                            </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="3">
                            <p>Номер телефона</p>
                            <v-text-field
                                label=""
                                value="+998"
                                
                            ></v-text-field>

                            <v-btn color="primary" @click="e1 = 4">
                                Continue 3
                            </v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="4">
                            <p>Удобное время звонка</p>
                            <v-text-field
                                label=""
                                placeholder="-- : --"
                            ></v-text-field>

                            <v-btn color="primary" @click="e1 = 1">
                                Enter 4
                            </v-btn>
                        </v-stepper-content>
                    </v-stepper-items>
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="e1 > 2" step="2">
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="e1 > 3" step="3">
                        </v-stepper-step>

                        <v-divider></v-divider>
                        <v-stepper-step :complete="e1 > 4" step="4">
                        </v-stepper-step>
                    </v-stepper-header>
                </v-stepper>
            </v-app>
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

<style lang="scss" >
    .wrap{
        padding: 0px;
        width: 600px;
        margin: 20px auto;
    }
   #app{
       padding: 50px;
   }
</style>

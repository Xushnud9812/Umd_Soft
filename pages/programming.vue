<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="row top">
                    <div class="col-md-6 left">
                        <h1>
                            Заказать сайт и приложения
                        </h1>
                        <button class="btn ">Заказат проект</button>
                    </div>
                    <div class="col-md-6 right">
                        <img src="@/assets/img/ProgrammingTop.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <u-animate-container>
            <div class="container">
                <div class="row">
                    <div class="col-3 boxs">
                        <u-animate
                            name="fadeIn"
                            delay="0s"
                            duration="1s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <div class="box ">
                                <img src="@/assets/img/Group (1).png" alt="" />
                                <h2>Landing page</h2>
                                <p>
                                    Получиили бесценный опыт идоверие клиентов
                                </p>
                            </div>
                        </u-animate>
                    </div>
                    <div class="col-3 boxs">
                        <u-animate
                            name="fadeIn"
                            delay="0.2s"
                            duration="1s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <div class="box down">
                                <img src="@/assets/img/Group (2).png" alt="" />
                                <h2>Интернет магазин</h2>
                                <p>
                                    Экономим на времени,но не экономим на
                                    качестве
                                </p>
                            </div>
                        </u-animate>
                    </div>
                    <div class="col-3 boxs">
                        <u-animate
                            name="fadeIn"
                            delay="0.4s"
                            duration="1s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <div class="box">
                                <img src="@/assets/img/Group (3).png" alt="" />
                                <h2>Многостраничные сайты</h2>
                                <p>Наша цель-сделать Ваш бизнес эффективне</p>
                            </div>
                        </u-animate>
                    </div>
                    <div class="col-3 boxs">
                        <u-animate
                            name="fadeIn"
                            delay="0.6s"
                            duration="1s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <div class="box down">
                                <img src="@/assets/img/Group (4).png" alt="" />
                                <h2>Мобильный дизайн</h2>
                                <p>
                                    Найдем наилучшее решение для каждой задачи и
                                    каждого человека
                                </p>
                            </div>
                        </u-animate>
                    </div>
                </div>
            </div>
        </u-animate-container>

        <u-animate-container>
            <div class="container">
                <u-animate
                    name="fadeIn"
                    delay="0s"
                    duration="1s"
                    :iteration="1"
                    :offset="0"
                    animateClass="animate__animated animate__fadeInUp"
                    :begin="false"
                >
                    <h1>Как мы развиваем сайт?</h1>
                </u-animate>
                <div class="row">
                    <div class="col-md-5 etap">
                        <u-animate
                            name="fadeIn"
                            delay="0s"
                            duration="1s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <div class="col-12">
                                <span>01 </span>
                                <h3>Создаем карту сайта</h3>
                            </div>
                            <div class="col-12">
                                <span>03 </span>
                                <h3>
                                    Создаем уникальный дизайн
                                </h3>
                            </div>
                            <div class="col-12">
                                <span>05 </span>
                                <h3>Разрабатываем программное обеспечение</h3>
                            </div>
                        </u-animate>
                    </div>

                    <div class="col-md-2">
                        <!-- <u-animate
                            name="fadeIn"
                            delay="1s"
                            duration="2s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"

                        > -->
                        <div class="vertical">
                            <u-animate
                                name="fadeIn"
                                delay="1s"
                                duration="2s"
                                :iteration="1"
                                :offset="0"
                                animateClass="animate__animated animate__fadeInUp"
                                :begin="false"
                            >
                                <div class="tik">
                                    <div class="circle active"></div>
                                    <div class="line active"></div>
                                </div>
                            </u-animate>

                            <u-animate
                                name="fadeIn"
                                delay="1s"
                                duration="2s"
                                :iteration="1"
                                :offset="0"
                                animateClass="animate__animated animate__fadeInUp"
                                :begin="false"
                            >
                                <div class="tik">
                                    <div class="circle active"></div>
                                    <div class="line active"></div>
                                </div>
                            </u-animate>

                            <u-animate
                                name="fadeIn"
                                delay="1s"
                                duration="2s"
                                :iteration="1"
                                :offset="0"
                                animateClass="animate__animated animate__fadeInUp"
                                :begin="false"
                            >
                                <div class="tik">
                                    <div class="circle active"></div>
                                    <div class="line active"></div>
                                </div>
                            </u-animate>

                            <u-animate
                                name="fadeIn"
                                delay="1s"
                                duration="2s"
                                :iteration="1"
                                :offset="0"
                                animateClass="animate__animated animate__fadeInUp"
                                :begin="false"
                            >
                                <div class="tik">
                                    <div class="circle active"></div>
                                    <div class="line active"></div>
                                </div>
                            </u-animate>

                            <u-animate
                                name="fadeIn"
                                delay="1s"
                                duration="2s"
                                :iteration="1"
                                :offset="0"
                                animateClass="animate__animated animate__fadeInUp"
                                :begin="false"
                            >
                                <div class="tik">
                                    <div class="circle active"></div>
                                    <div class="line active"></div>
                                </div>
                            </u-animate>

                            <u-animate
                                name="fadeIn"
                                delay="1s"
                                duration="2s"
                                :iteration="1"
                                :offset="0"
                                animateClass="animate__animated animate__fadeInUp"
                                :begin="false"
                            >
                                <div class="tik">
                                    <div class="circle active"></div>
                                    <!-- <div class="line active"></div> -->
                                </div>
                            </u-animate>

                            <!-- <div class="tik">
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
                </div> -->
                        </div>
                        <!-- </u-animate> -->
                    </div>
                    <div class="col-md-5 etap two">
                        <u-animate
                            name="fadeIn"
                            delay="1s"
                            duration="2s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <div class="col-12">
                                <span>02 </span>
                                <h3>Готовим технический документ</h3>
                            </div>
                            <div class="col-12">
                                <span>04 </span>
                                <h3>Адаптируем ко всем устройствам</h3>
                            </div>
                            <div class="col-12">
                                <span>06 </span>
                                <h3>Предварительное тестирование</h3>
                            </div>
                        </u-animate>
                    </div>
                </div>
            </div>
        </u-animate-container>

        <u-animate-container>
            <div class="container-fluid full">
                <div class="container">
                    <u-animate
                        name="fadeIn"
                        delay="0s"
                        duration="1s"
                        :iteration="1"
                        :offset="0"
                        animateClass="animate__animated animate__fadeInUp"
                        :begin="false"
                    >
                        <h1>Подсчитаем нужный вам сайт</h1>
                    </u-animate>

                    <u-animate
                        name="fadeIn"
                        delay="0s"
                        duration="1s"
                        :iteration="1"
                        :offset="0"
                        animateClass="animate__animated animate__fadeInUp"
                        :begin="false"
                    >
                        <div class="content">
                            <div class="col-6">
                                <v-container fluid>
                                    <v-row align="center">
                                        <v-col
                                            class="d-flex col-sm-12 col-12"
                                            cols="12"
                                            sm="12"
                                        >
                                            <v-select
                                                v-model="valueSelect"
                                                class="choose"
                                                :items="items"
                                                item-text="text"
                                                return-object
                                                @change="changeSelect"
                                                label="Ландинг"
                                                solo
                                            ></v-select>
                                            <!-- <p>{{ valueSelect }}</p> -->
                                        </v-col>
                                    </v-row>
                                </v-container>
                                <div class="text" v-if="valueSelect.id == 1">
                                    <div class="d-flex">
                                        <h4>Главная +</h4>
                                        <span
                                            ><v-text-field
                                                @change="changeSlider"
                                                v-model="slider"
                                                item-value="id"
                                                class="count mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 60px"
                                            ></v-text-field
                                        ></span>
                                        <h4>внутренние</h4>
                                    </div>
                                    <v-container fluid>
                                        <div id="app">
                                            <v-app id="inspire">
                                                <div>
                                                    <v-card
                                                        flat
                                                        color="transparent"
                                                    >
                                                        <v-card-text>
                                                            <v-row>
                                                                <v-col
                                                                    class="pr-4"
                                                                >
                                                                    <v-slider
                                                                        @change="
                                                                            changeSlider
                                                                        "
                                                                        v-model="
                                                                            slider
                                                                        "
                                                                        class="align-center"
                                                                        :max="
                                                                            max
                                                                        "
                                                                        :min="
                                                                            min
                                                                        "
                                                                        hide-details
                                                                    >
                                                                        <template
                                                                            v-slot:append
                                                                        >
                                                                        </template>
                                                                    </v-slider>
                                                                </v-col>
                                                            </v-row>
                                                        </v-card-text>
                                                    </v-card>
                                                </div>
                                            </v-app>
                                        </div>
                                    </v-container>
                                </div>
                                <div
                                    class="text"
                                    v-if="valueSelect.id == 2"
                                ></div>
                                <div class="text" v-if="valueSelect.id == 3">
                                    <div class="d-flex">
                                        <h4>Главная +</h4>
                                        <span>
                                            <v-text-field
                                                @change="changeSlider"
                                                v-model="slider"
                                                item-value="id"
                                                class="count mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 60px"
                                            ></v-text-field>
                                        </span>
                                        <h4>внутренние</h4>
                                    </div>
                                    <v-container fluid>
                                        <div id="app">
                                            <v-app id="inspire">
                                                <div>
                                                    <v-card
                                                        flat
                                                        color="transparent"
                                                    >
                                                        <v-card-text>
                                                            <v-row>
                                                                <v-col
                                                                    class="pr-4"
                                                                >
                                                                    <v-slider
                                                                        @change="
                                                                            changeSliderThree
                                                                        "
                                                                        v-model="
                                                                            slider
                                                                        "
                                                                        class="align-center"
                                                                        :max="
                                                                            max
                                                                        "
                                                                        :min="
                                                                            min
                                                                        "
                                                                        hide-details
                                                                    >
                                                                        <template
                                                                            v-slot:append
                                                                        >
                                                                        </template>
                                                                    </v-slider>
                                                                </v-col>
                                                            </v-row>
                                                        </v-card-text>
                                                    </v-card>
                                                </div>
                                            </v-app>
                                        </div>
                                    </v-container>
                                </div>
                                <div class="text" v-if="valueSelect.id == 4">
                                    <div class="d-flex">
                                        <h4>Количество</h4>
                                        <span
                                            ><v-text-field
                                                @change="changeSliderFour"
                                                v-model="slider"
                                                item-value="id"
                                                class="count mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 60px"
                                            ></v-text-field
                                        ></span>
                                    </div>
                                    <v-container fluid>
                                        <div id="app">
                                            <v-app id="inspire">
                                                <div>
                                                    <v-card
                                                        flat
                                                        color="transparent"
                                                    >
                                                        <v-card-text>
                                                            <v-row>
                                                                <v-col
                                                                    class="pr-4"
                                                                >
                                                                    <v-slider
                                                                        @change="
                                                                            changeSliderFour
                                                                        "
                                                                        v-model="
                                                                            slider
                                                                        "
                                                                        class="align-center"
                                                                        :max="
                                                                            max
                                                                        "
                                                                        :min="
                                                                            min
                                                                        "
                                                                        hide-details
                                                                    >
                                                                        <template
                                                                            v-slot:append
                                                                        >
                                                                        </template>
                                                                    </v-slider>
                                                                </v-col>
                                                            </v-row>
                                                        </v-card-text>
                                                    </v-card>
                                                </div>
                                            </v-app>
                                        </div>
                                    </v-container>
                                </div>

                                <div id="app" v-if="valueSelect.id == 1">
                                    <v-app id="inspire">
                                        <v-container fluid>
                                            <v-checkbox
                                                @change="changeNight"
                                                v-model="check"
                                                value="50"
                                                :label="`Ночной режим`"
                                            ></v-checkbox>
                                        </v-container>
                                    </v-app>
                                </div>

                                <div id="app" v-if="valueSelect.id == 2">
                                    <v-app id="inspire">
                                        <v-container>
                                            <v-checkbox
                                                disabled
                                                v-model="checkAll"
                                                input-value="true"
                                                :label="`Создат логотип`"
                                            ></v-checkbox>
                                        </v-container>
                                    </v-app>
                                </div>
                                <div id="app" v-if="valueSelect.id == 2">
                                    <v-app id="inspire">
                                        <v-container fluid>
                                            <!-- <p>{{ parent }}</p> -->
                                            <v-checkbox
                                                @change="changeParent"
                                                v-model="parent"
                                                :label="`Брендбук`"
                                            ></v-checkbox>
                                            <div
                                                v-for="(item,
                                                index) in children"
                                                :key="index"
                                                class="child "
                                            >
                                                <v-checkbox
                                                    @change="
                                                        changeChildren(
                                                            item,
                                                            index
                                                        )
                                                    "
                                                    v-model="item.value"
                                                    :label="item.text"
                                                ></v-checkbox>
                                            </div>
                                        </v-container>
                                    </v-app>
                                </div>
                                <div id="app" v-if="valueSelect.id == 3">
                                    <v-app id="inspire">
                                        <v-container fluid>
                                            <v-checkbox
                                                @change="changeNightThree"
                                                v-model="checkThree"
                                                value="50"
                                                :label="`Ночной режим`"
                                            ></v-checkbox>
                                            <v-checkbox
                                                @change="changeResponsive"
                                                v-model="checkThreeRes"
                                                value="50"
                                                :label="`Нужен адаптивной`"
                                            ></v-checkbox>
                                        </v-container>
                                    </v-app>
                                </div>

                                <p></p>
                            </div>
                            <div class="col-6">
                                <div class="narx" v-if="valueSelect.id == 1">
                                    <p>
                                        Цена:<span>{{ result.price }} $</span>
                                    </p>
                                    <p>
                                        Время:<span>{{ result.day }} ден</span>
                                    </p>
                                </div>
                                <div class="narx" v-if="valueSelect.id == 2">
                                    <p>
                                        Цена:<span
                                            >{{ result.priceTwo }} $</span
                                        >
                                    </p>
                                    <p>
                                        Время:<span
                                            >{{ result.dayTwo }} ден</span
                                        >
                                    </p>
                                </div>
                                <div class="narx" v-if="valueSelect.id == 3">
                                    <p>
                                        Цена:<span
                                            >{{ result.priceThree }} $</span
                                        >
                                    </p>
                                    <p>
                                        Время:<span
                                            >{{ result.dayThree }} ден</span
                                        >
                                    </p>
                                </div>
                                <div class="narx" v-if="valueSelect.id == 4">
                                    <p>
                                        Цена:<span
                                            >{{ result.priceFour }} $</span
                                        >
                                    </p>
                                    <p>
                                        Время:<span
                                            >{{ result.dayFour }} ден</span
                                        >
                                    </p>
                                </div>

                                <!-- <pre>
                            {{ children }}
                        </pre> -->
                            </div>
                        </div>
                    </u-animate>
                </div>
            </div>
        </u-animate-container>

        <u-animate-container>
            <div class="container main">
                <div class="row">
                    <div class="col-3">
                        <u-animate
                            name="fadeIn"
                            delay="0s"
                            duration="1s"
                            :iteration="1"
                            :offset="0"
                            animateClass="animate__animated animate__fadeInUp"
                            :begin="false"
                        >
                            <h1>Наши Cтеки</h1>
                            <div class="pag">
                                <img src="@/assets/img/Arrow 1.png" alt="" />
                                <img src="@/assets/img/Arrow 2.png" alt="" />
                            </div>
                        </u-animate>
                    </div>
                    <div class="col-9">
                        <div class="lan">
                            <u-animate
                                name="fadeIn"
                                delay="0s"
                                duration="1s"
                                :iteration="1"
                                :offset="0"
                                animateClass="animate__animated animate__fadeInUp"
                                :begin="false"
                            >
                                <div class="card">
                                    <img src="@/assets/img/node.png" alt="" />
                                    <p>NodeJS</p>
                                </div>
                            </u-animate>
                            <u-animate
                                name="fadeIn"
                                delay="0.2s"
                                duration="1s"
                                :iteration="1"
                                :offset="0"
                                animateClass="animate__animated animate__fadeInUp"
                                :begin="false"
                            >
                                <div class="card">
                                    <img src="@/assets/img/Vue.png" alt="" />
                                    <p>Vue</p>
                                </div>
                            </u-animate>

                            <u-animate
                                name="fadeIn"
                                delay="0.4s"
                                duration="1s"
                                :iteration="1"
                                :offset="0"
                                animateClass="animate__animated animate__fadeInUp"
                                :begin="false"
                            >
                                <div class="card">
                                    <img src="@/assets/img/Python.png" alt="" />
                                    <p>Python</p>
                                </div>
                            </u-animate>

                            <u-animate
                                name="fadeIn"
                                delay="0.6s"
                                duration="1s"
                                :iteration="1"
                                :offset="0"
                                animateClass="animate__animated animate__fadeInUp"
                                :begin="false"
                            >
                                <div class="card">
                                    <img src="@/assets/img/React.png" alt="" />
                                    <p>React</p>
                                </div>
                            </u-animate>
                        </div>

                        <div></div>
                    </div>
                </div>

                <div class="row"></div>
            </div>
        </u-animate-container>

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
                <div class="container">
                    <div class="oplata">
                        <div class="row">
                            <h1>Интеграция платежних системы</h1>
                            <div class="col-2">
                                <div class="op-box">
                                    <img src="@/assets/img/Click.png" alt="" />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="op-box">
                                    <img src="@/assets/img/payme.png" alt="" />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="op-box">
                                    <img src="@/assets/img/stripe.png" alt="" />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="op-box">
                                    <img src="@/assets/img/oson.png" alt="" />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="op-box">
                                    <img
                                        src="@/assets/img/apelsin.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="op-box">
                                    <img src="@/assets/img/visa.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </u-animate>
        </u-animate-container>

        <u-animate-container>
            <u-animate
                name="fadeIn"
                delay="0.5s"
                duration="2s"
                :iteration="1"
                :offset="0"
                animateClass="animate__animated animate__fadeInUp"
                :begin="false"
            >
                <div class="container-fluid four">
                    <div class="form">
                        <h1>
                            Заполните форму прямо сейчас и получите
                            квалифицированную
                        </h1>

                        <div class="tab" v-if="tabIndex == 1">
                            <p>Название организации</p>
                            <v-text-field
                                label=""
                                placeholder="Пример : UMDSOFT "
                                @keypress.enter="nextTab"
                            ></v-text-field>

                            <div class="img">
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkFalse.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkFalse.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkFalse.png" alt="" />
                            </div>
                            <div class="pagtwo">
                                <img src="@/assets/img/Arrow 1.png" alt="" />
                                <img
                                    src="@/assets/img/Arrow 2.png"
                                    alt=""
                                    @click="nextTab"
                                />
                            </div>
                        </div>
                        <div class="tab" v-if="tabIndex == 2">
                            <p>Ф.И.О</p>
                            <v-text-field
                                label=""
                                placeholder="Пример : Насимов Мироншох "
                                value=""
                                @keypress.enter="nextTab"
                                autofocus
                            ></v-text-field>

                            <div class="img">
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkFalse.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkFalse.png" alt="" />
                            </div>
                            <div class="pagtwo">
                                <img
                                    src="@/assets/img/Arrow 1.png"
                                    alt=""
                                    @click="prewTab"
                                />
                                <img
                                    src="@/assets/img/Arrow 2.png"
                                    alt=""
                                    @click="nextTab"
                                />
                            </div>
                        </div>
                        <div class="tab" v-if="tabIndex == 3">
                            <p>Номер телефона</p>
                            <v-text-field
                                label=""
                                value="+998"
                                @keypress.enter="nextTab"
                                autofocus
                            ></v-text-field>

                            <div class="img">
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkFalse.png" alt="" />
                            </div>
                            <div class="pagtwo">
                                <img
                                    src="@/assets/img/Arrow 1.png"
                                    alt=""
                                    @click="prewTab"
                                />
                                <img
                                    src="@/assets/img/Arrow 2.png"
                                    alt=""
                                    @click="nextTab"
                                />
                            </div>
                        </div>
                        <div class="tab" v-if="tabIndex == 4">
                            <p>Удобное время звонка</p>
                            <v-text-field
                                label=""
                                placeholder="-- : --"
                            ></v-text-field>

                            <div class="img">
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkTrue.png" alt="" />
                                <img src="@/assets/img/Line 2.png" alt="" />
                                <img src="@/assets/img/checkTrue.png" alt="" />
                            </div>
                            <div class="pagtwo">
                                <img
                                    src="@/assets/img/Arrow 1.png"
                                    alt=""
                                    @click="prewTab"
                                />
                                <img src="@/assets/img/Arrow 2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </u-animate>
        </u-animate-container>

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
                <footera />
            </u-animate>
        </u-animate-container>
    </div>
</template>

<script>

export default {
    data() {
        return {
            nightMode: false,
            tabIndex: 1,
            check: "",
            checkThree: "",
            checkThreeRes: "",
            checkAll: true,
            parent: false,
            nightPrice: 50,
            ex2: { color: "silver" },
            valueSelect: {
                text: "Лого брандинг",
                id: 2
            },

            children: [
                {
                    value: false,
                    text: "Визитка",
                    price: 12,
                    day: 1
                },
                {
                    value: false,
                    text: "3x шт SMM пост",
                    price: 30,
                    day: 2
                },
                {
                    value: false,
                    text: "Флаер",
                    price: 20,
                    day: 2
                },
                {
                    value: false,
                    text: "Баннер",
                    price: 40,
                    day: 2
                }
            ],
            items: [
                {
                    text: "Мобильный дизайн",
                    id: 1
                },
                {
                    text: "Лого брандинг",
                    id: 2
                },
                {
                    text: "Веб дизайн",
                    id: 3
                },
                {
                    text: "Smm дизайн",
                    id: 4
                }
            ],
            min: 0,
            max: 30,
            slider: 0,
            model: 0,
            page: 1,
            data: [],
            stepPrice: 30,
            stepDay: 1,
            stepPriceThree: 50,
            stepDayThree: 1,
            priceFour: 0,
            dayFour: 0,
            stepDayFour: 1,
            stepPriceFour: 15,
            stepDay: 1,
            price: 40,
            day: 4,
            priceResponsive: 20,
            dayResponsive: 3,
            priceTwo: 100,
            dayTwo: 10,
            priceThree: 100,
            dayThree: 5,
            logoPrice: 100,
            logoDay: 10,
            result: {
                price: 40,
                day: 4,
                priceTwo: 100,
                dayTwo: 10,
                priceThree: 50,
                dayThree: 5,
                priceFour: 15,
                dayFour: 1
            }
        };
    },

    methods: {
        nextTab() {},
        changeParent() {
            if (this.parent == false) {
                this.children.forEach(item => {
                    item.value = false;
                });
            }
            if (this.parent == true) {
                this.children.forEach(item => {
                    item.value = true;
                });
            }
            this.addInfo();
        },

        changeChildren(item, index) {
            let isSelect = true;

            this.children.forEach(item => {
                if (item.value == false) {
                    isSelect = false;
                }
            });

            if (isSelect) {
                this.parent = true;
            } else {
                this.parent = false;
            }

            this.addInfo();
        },
        addInfo() {
            this.children.forEach(item => {
                let p = this.logoPrice;
                let d = this.logoDay;
                if (item.value == true) {
                    p += item.price;
                    d += item.day;
                }
                this.result.priceTwo = p;
                this.result.dayTwo = d;
            });
        },
        changeSlider() {
            this.result.price = this.price + this.slider * this.stepPrice;
            this.result.day = this.day + this.slider * this.stepDay;
        },

        changeNight() {
            if (this.check == null) {
                this.result.price -= 50;
            } else this.result.price += parseInt(this.check);
        },
        changeNightThree() {
            // alert(check);
            if (this.checkThree == null) {
                this.result.priceThree -= 50;
                this.result.dayThree -= 3;
            } else this.result.priceThree += parseInt(this.checkThree);
            this.result.dayThree += 3;
        },
        changeResponsive() {
            if (this.checkThreeRes == null) {
                this.result.priceThree -= this.priceResponsive;
                this.result.dayThree -= this.dayResponsive;
            } else this.result.priceThree += this.priceResponsive;
            this.result.dayThree += this.dayResponsive;
        },
        changeSliderThree() {
            this.result.priceThree =
                this.priceThree + this.slider * this.stepPriceThree;
            this.result.dayThree =
                this.dayThree + this.slider * this.stepDayThree;
        },
        changeSliderFour() {
            this.result.priceFour =
                this.priceFour + this.slider * this.stepPriceFour;
            this.result.dayFour = this.dayFour + this.slider * this.stepDayFour;
        },
        nextTab() {
            this.tabIndex = this.tabIndex + 1;
        },
        prewTab() {
            this.tabIndex = this.tabIndex - 1;
        },

        changeSelect() {}
    }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap");
* {
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
}
.img {
    width: 270px;
    margin: 0 auto;
}
.header {
    background: #9bc3f6;
    height: 640px;
    width: 100%;
}
.box {
    // animation-duration: 2s;
    animation-delay: 3;
}
.left {
    padding-top: 200px;
    h1 {
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 141.3%;
        color: #ffffff;
    }
    button {
        background: #1e6bdd;
        border-radius: 5px;
        margin-top: 10px;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
    }
}

.down {
    margin-top: 30px;
}

#input-20 {
    color: blue;
    font-size: 24px;
    text-align: center;
}
#input-50 {
    color: blue;
    font-size: 24px;
    text-align: center;
}
.boxs {
    padding: 20px;
    margin-top: 40px;
    .box {
        height: 300px;
        border-radius: 5px 0px;
        border-top: 7px solid #1e6bdd;
        // border-bottom: 7px solid #1e6bdd;
        background: #f6f6f6;
        padding: 20px;
        h2 {
            margin-top: 30px;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 141.3%;
            /* identical to box height, or 34px */

            /* head color */

            color: #1e6bdd;
        }
        p {
            margin-top: 20px;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 141.3%;
            /* or 21px */

            color: #000000;
        }
    }
}
.content {
    display: flex;
    margin: 40px auto;
    width: 970px;
    background: #ffffff;
    border: 2px solid #1e6bdd;
    box-sizing: border-box;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    // .text p {
    //     margin: 60px 0px 0 -325px;
    // }
    .narx {
        width: 375px;
        background: #f6f6f6;
        border-radius: 10px;
        padding: 30px;
        margin: 30px 0 0 40px;
        p {
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 141.3%;
            color: #000000;
            span {
                margin-left: 30px;
                font-style: normal;
                font-weight: bold;
                font-size: 28px;
                line-height: 141.3%;
                color: #1e6bdd;
            }
        }
    }
}
.full {
    background: #f6f6f6;
    padding: 20px;
    margin-top: 40px;
    h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 141.3%;
        color: #1e6bdd;
    }
    .sel {
        background: #ffffff;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
    }
    .text {
        padding: 10px;
        span {
            margin-left: 10px;
            font-style: normal;
            font-weight: bold;
            font-size: 28px;
            line-height: 42px;
            color: #1e6bdd;
        }
        h4 {
            margin-left: 10px;
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 36px;
            color: #000000;
        }
        .few {
            margin-top: 30px;
        }
    }
}
.etap {
    padding: 30px;
    span {
        font-style: normal;
        font-weight: bold;
        font-size: 120px;
        line-height: 180px;
        color: #e8eaf2;
    }
    h3 {
        margin: -100px 0 0 70px;
        width: 388px;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 120%;
        color: #666666;
    }
}
.two {
    margin-top: 100px;
}
.main {
    padding: 50px 0;
}
.lan {
    display: flex;
}
.three {
    margin-left: 100px;
}
.card {
    background: #f6f6f6;
    padding: 20px 20px;
    margin-left: 40px;
    width: 178px;
    height: 240px;
    cursor: pointer;
    transition: 0.5s ease;
    border-radius: 5px;
    img {
        width: 107px;
        height: 105px;
        margin: 0 auto;
    }
    p {
        margin-top: 30px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #1e6bdd;
        text-align: center;
    }
}
.card:hover {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
}
.pag {
    margin: 150px 0 0 0px;
    img {
        margin-left: 50px;
    }
}
.four {
    background: #f6f6f6;
    padding-top: 50px;
    margin-bottom: 60px;
    padding-bottom: 60px;
    .form {
        padding: 40px 80px;
        width: 793px;
        height: 403px;
        background: #ffffff;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin: 0 auto;
        .pagtwo {
            margin: 50px 35%;
            img {
                margin-left: 20px;
            }
        }
        h1 {
            font-style: normal;
            font-weight: 600;
            text-align: center;
            font-size: 32px;
            line-height: 134.3%;
            color: #1e6bdd;
        }
        p {
            margin-top: 30px;
            font-style: normal;
            font-weight: normal;
            font-size: 23px;
            line-height: 141.3%;
            color: #202020;
        }
    }
}
.v-application--wrap {
    min-height: auto !important;
}
.child {
    margin: -20px 0 0 28px;
}

.op-box {
    cursor: pointer;
    background: #f6f6f6;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 30px 10px;
    // margin-left: 20px;
    margin: 20px 0 30px 20px;
    width: 169px;
    height: 139px;
    display: flex;
    align-items: center;
    img {
        width: 144px;
    }
}
.circle.active,
.line.active {
    background: blue;
}
.tik {
    display: flex;
    width: 20px;
    /* background: silver; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.circle {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #e8eaf2;
}
.line {
    width: 6px;
    background: #e8eaf2;
    height: 82px;
}
.vertical {
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center;
    margin-top: 70px;
}
</style>

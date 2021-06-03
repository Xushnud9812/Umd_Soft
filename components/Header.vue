<template>
    <div>
        <nav class="nav-menu ">
            <div class="container head">
                <div>
                    <img href="#" src="@/assets/img/logo8.png" alt="" />
                </div>
                <div>
                    <div
                        @click="toggleMenu = !toggleMenu"
                        :class="toggleMenu ? 'fix-vh' : ''"
                    ></div>
                    <div :class="toggleMenu ? 'menu menu-media' : 'menu'">
                        <ul class="nav-ul">
                            <li class="nav-item logotip">
                                <a href="#" class="nav-link text-primary">
                                    <img
                                        href="#"
                                        src="@/assets/img/logo8.png"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link text-primary"
                                    >О нас</a
                                >
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Наши услуги</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Обучения</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Портфолио</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Контакты</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Отзывы</a>
                            </li>
                            <button @click="modal" type="button" class="">
                                Заказат проект
                            </button>
                            <!-- <v-btn class="btn" type="bu" color="primary" dark @click="dialog = true">
                            Open Dialog
                        </v-btn> -->
                        </ul>
                    </div>
                    <button class="bar" @click="toggleMenu = !toggleMenu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                        >
                            <path
                                d="M0 1.5C0 1.16848 0.131696 0.850537 0.366117 0.616117C0.600537 0.381696 0.918479 0.25 1.25 0.25H18.75C19.0815 0.25 19.3995 0.381696 19.6339 0.616117C19.8683 0.850537 20 1.16848 20 1.5C20 1.83152 19.8683 2.14946 19.6339 2.38388C19.3995 2.6183 19.0815 2.75 18.75 2.75H1.25C0.918479 2.75 0.600537 2.6183 0.366117 2.38388C0.131696 2.14946 0 1.83152 0 1.5Z"
                                fill="black"
                            />
                            <path
                                d="M0 16.5C0 16.1685 0.131696 15.8505 0.366117 15.6161C0.600537 15.3817 0.918479 15.25 1.25 15.25H18.75C19.0815 15.25 19.3995 15.3817 19.6339 15.6161C19.8683 15.8505 20 16.1685 20 16.5C20 16.8315 19.8683 17.1495 19.6339 17.3839C19.3995 17.6183 19.0815 17.75 18.75 17.75H1.25C0.918479 17.75 0.600537 17.6183 0.366117 17.3839C0.131696 17.1495 0 16.8315 0 16.5Z"
                                fill="black"
                            />
                            <path
                                d="M8.75 7.75C8.41848 7.75 8.10054 7.8817 7.86612 8.11612C7.6317 8.35054 7.5 8.66848 7.5 9C7.5 9.33152 7.6317 9.64946 7.86612 9.88388C8.10054 10.1183 8.41848 10.25 8.75 10.25H18.75C19.0815 10.25 19.3995 10.1183 19.6339 9.88388C19.8683 9.64946 20 9.33152 20 9C20 8.66848 19.8683 8.35054 19.6339 8.11612C19.3995 7.8817 19.0815 7.75 18.75 7.75H8.75Z"
                                fill="black"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // menu: false,
            toggleMenu: false
        };
    },
    // computed: {
    //     number() {
    //         return this.$store.state.count;
    //     }
    // },
    mounted() {
        // const btn = document.querySelector('.bar');
        // const menu = document.querySelector('.menu');
        // btn.addEventListener('click', function(){
        //     menu.classList.add('block');
        // })
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
.bar {
    display: none;
}
.container {
    width: 87%;
    margin: 0 auto;
}
.head {
    width: 87%;
    padding: 0 !important;
    display: flex;
    justify-content: space-between;
    img {
        cursor: pointer;
        height: 46px;
    }
}
.nav-menu {
    padding: 6px 0;
    position: fixed;
    width: 100%;
    background: #f6f6f6;
    z-index: 200;
    .fix-vh {
        position: fixed;
        width: 100%;
        height: 100vh;
        z-index: 998;
        top: 0;
        left: 0;
        background-color: rgba($color: #000000, $alpha: 0.4);
    }
    .nav-ul {
        margin-bottom: 0px;
        button {
            margin-left: 20px;
            padding: 6px 12px;
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
        li {
            a {
                color: #000000;
            }
            a:hover {
                color: #1e6bdd;
            }
        }
        li.logotip {
            display: none;
            img {
                display: none;
            }
        }
    }
}

@media (min-width: 280px) and (max-width: 900px) {
    .nav-menu .nav-ul li.logotip img{
        display: block;
    }
    .bar {
        display: block;
    }
    .menu {
        position: fixed;
        // transform: translateX(-103%);
        left: -103%;
        transition: 0.3s;
    }
    .menu-media {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        background-color: #fff;
        width: 60%;
        padding: 15px 20px;
        height: 100vh;
        li {
            display: block !important;
            img {
                display: block;
            }
        }
        li.logotip {
            img {
                display: block;
            }
        }
    }
}

@media (min-width: 900px) {
    .menu {
        ul {
            li {
                display: inline-block !important;
            }
        }
    }
    .fix-vh {
        display: none !important;
    }
}
</style>

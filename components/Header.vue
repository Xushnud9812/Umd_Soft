<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container head">
                <div>
                    <img href="#" src="@/assets/img/logo8.png" alt="" />
                </div>
                <div>
                    <ul class="nav">
                        <li class="nav-item">
                            <a href="#" class="nav-link text-primary">О нас</a>
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
                            <a href="#" class="nav-link">Отзыве</a>
                        </li>
                        <button @click="modal" type="button" class="btn">
                            Заказат проект
                        </button>
                        <!-- <v-btn class="btn" type="bu" color="primary" dark @click="dialog = true">
                            Open Dialog
                        </v-btn> -->
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    // computed: {
    //     number() {
    //         return this.$store.state.count;
    //     }
    // },
    methods: {
        modal() {
            this.$store.commit("changeButton");
            // clickoutside(changeButton)
        }
        
    }
};
</script>

<style lang="scss">
.head {
    padding: 0 !important;
    img {
        cursor: pointer;
        height: 46px;
    }
}
.navbar {
    position: fixed;
    width: 100%;
    background: #f6f6f6;
    z-index: 200;
    .nav {
        button {
            padding: 0px 12px;
            background: #1e6bdd;
            color: #fff;
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
    }
}
</style>

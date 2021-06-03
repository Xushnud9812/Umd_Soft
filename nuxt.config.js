export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Umd",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                type: "text/css",
                href:
                    "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
            },
            {
                rel: "stylesheet",
                type: "text/css",
                href:
                    "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@assets/scss/style.scss", "animate.css/animate.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "@/plugins/vue-slick-carousel.js" },
        { src: "@/plugins/wow.js" }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ["@nuxtjs/fontawesome", "nuxt-animejs"],
    fontawesome: {
        component: "fa",
        icons: {
            solid: true,
            brands: true
        }
    },

    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/style-resources",
        "bootstrap-vue/nuxt",

        "@nuxtjs/vuetify"
    ],
    styleResources: {
        scss: ["@assets/scss/*.scss"]
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ["vue-slick"]
    },

    script: [
        {
            src:
                "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
            type: "text/javascript"
        }
    ]
};

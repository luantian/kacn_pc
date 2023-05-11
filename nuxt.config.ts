// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    // @ts-ignore
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: "123",
        // Keys within public are also exposed client-side
        public: {
            apiBase: "https://mock.apifox.cn/m1/2272323-0-default",
        },
    },

    app: {
        head: {
            title: "Nuxt",
            meta: [
                { name: "description", content: "Everything about - Nuxt-3" },
            ],
        },
    },
    css: [
        // "@/assets/elementTheme/index.css",
        "normalize.css/normalize.css",
        "@/assets/font/iconfont.css",
        // "@/assets/styles/global.scss",
    ],
    components: true,
    // styleResources: {
    //     scss: "@/assets/styles/global.scss",
    // },
    buildModules: [
        "@nuxtjs/composition-api/module",
        ["@pinia/nuxt", { disableVuex: false }],
        "@nuxtjs/tailwindcss"
    ],
    modules: [
        "@element-plus/nuxt",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
    ],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            "defineStore", // import { defineStore } from 'pinia'
            ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    build: {
        publicPath: "/__kacn__/",
        transpile: [/^element-plus/],
        extractCSS: { allChunks: true },
    },
    piniaPersistedstate: {
        storage: "sessionStorage",
    },
    elementPlus: {

    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@import "assets/styles/global.scss";',
                },
            },
        },
    },
});

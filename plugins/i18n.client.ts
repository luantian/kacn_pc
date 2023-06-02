import { createI18n } from "vue-i18n"
import zh from '../locales/zh'
import en from '../locales/en'
import tr from '../locales/tr'
import { defineNuxtPlugin } from '#app'

const message = {
    zh,
    en,
    tr
}

const defaultLang = 'en'

const Cookies = useCookie('lang')
Cookies.value = Cookies.value || defaultLang

const i18nClient = createI18n({
    legacy: false,
    globalInjection: true,
    locale: Cookies.value || defaultLang,
    warnHtmlMessage: false,
    messages: message
})

export default defineNuxtPlugin(nuxtApp => {
    if (process.client) nuxtApp.vueApp.use(i18nClient)
})
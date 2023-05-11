import { defineStore } from 'pinia'

interface LanguageState {
    language: string
}

export const useLanguage = defineStore('language', {
    state: (): LanguageState => ({
        language: ''
    }),

    actions: {

    },

    persist: process.client && {
        storage: localStorage,
        paths: ['language']
    }
})

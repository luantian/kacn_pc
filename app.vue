<template>
    <NuxtLayout>
        <NuxtPage></NuxtPage>
    </NuxtLayout>
</template>
<script setup>
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// You might choose this based on an API call or logged-in status

const nuxtApp = useNuxtApp();
// console.log(nuxtApp)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component);
}
</script>
<style lang="scss" scoped></style>

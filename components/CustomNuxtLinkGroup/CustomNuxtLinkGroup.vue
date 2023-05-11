<template>
    <div class="custom-nuxt-link-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CustomNuxtLinkGroup',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.custom-nuxt-link-group {
    display: flex;
    justify-content: center;
    .custom-nuxt-link {
        display: block;
        border-radius: 0;
        &:nth-of-type(1) {
            border-radius: 30px 0 0 30px;
        }
        &:last-child {
            border-radius: 0 30px 30px 0;
        }
    }
}
</style>

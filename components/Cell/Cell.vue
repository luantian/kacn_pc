<template>
    <div class="cell">
        <div class="img"></div>
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class=""></div>
    </div>
</template>

<script>
export default {
    name: 'Cell',
    props: {
        imgUrl: {
            type: String
        },

    },
    data() {
        return {

        }
    }
}

</script>

<style lang="scss" scoped>

</style>

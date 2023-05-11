<template>
    <div class="page-title">
        <div class="title" :class="{ [size]: size }">
            <slot></slot>
        </div>
        <div class="more" v-if="showMore">
            <CustomNuxtLink to="/">查看更多+</CustomNuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup name="PageTitle">

interface Props {
    showMore?: boolean;
    size?: 'large'| 'default'| 'small'
}

const props = withDefaults(defineProps<Props>(), {
    size: 'default'
})

</script>

<style lang="scss" scoped>
.page-title {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    .title {
        color: #222;
        font-size: 20px;
        font-weight: bold;
        &.large {
            font-size: 24px;
        }
    }
}
.more {
    color: $c666;
}
</style>

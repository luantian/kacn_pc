<template>
    <div class="goods_RightList" v-bind="$attrs" v-on="$listeners">
        <p class="goods_RightTitle">{{ title }}</p>
        <div class="goods_RightQuan">
            <slot></slot>
            <div class="goods_RLBg"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    methods: {}
}
</script>
<style lang="scss" scoped>
.goods_RightList {
    width: 400px;
    height: 80px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    .flex_j;
    .flex_item;
    padding: 25px 20px;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 20px;

    .goods_RightTitle {
        .f16;
    }

    .goods_RightQuan {
        .flex_item;
        justify-content: flex-end;
    }

    .goods_RLBg {
        width: 24px;
        height: 24px;
        border-radius: 12px;
        margin-left: 10px;
        background: url(~assets/imgs/icon/right_black.svg) #F2F2F2 center center no-repeat;
    }
}
</style>
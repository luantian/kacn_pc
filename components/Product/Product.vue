<template>
    <div class="product">
        <div class="img">
            <img :src="imgUrl" alt="产品图片" />
        </div>
        <div class="title">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Product",
    props: {
        imgUrl: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.product {
    width: 80px;
    .img {
        width: 80px;
        height: 80px;
        overflow: hidden;
        border-radius: $borderRadius;
        > img {
            width: 100%;
            height: 100%;
        }
    }
    .title {
        text-align: center;
        padding: 15px 0;
        // .ellipsis();
    }
}
</style>

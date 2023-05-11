<template>
    <el-tag
        :class="['tag', { small, normal, big }]"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot></slot>
        <img class="img" v-if="imgUrl" :src="imgUrl" alt="标签图片" />
    </el-tag>
</template>

<script>
export default {
    name: "CustomTag",
    props: {
        imgUrl: {
            type: String,
            default: "",
        },
        small: {
            type: Boolean,
            default: false,
        },
        normal: {
            type: Boolean,
            default: false,
        },
        big: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.tag {
    margin: 0 4px;
    border-radius: 100px;
    border-color: transparent;
    cursor: pointer;
}

.normal {
    font-size: 14px;
    padding: 0 10px;
}

.small {
    font-size: 12px;
}

.big {
    font-size: 16px;
    padding: 4px 15px;
    height: auto;
}

.img {
    position: relative;
    top: 4px;
}
</style>

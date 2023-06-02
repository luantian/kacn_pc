<template>
    <el-tag
        :class="['tag', { small, normal, big }]"
        v-bind="attrs"
    >
        <slot></slot>
        <img class="img" v-if="imgUrl" :src="imgUrl" alt="标签图片" />
    </el-tag>
</template>

<script lang="ts" setup name="CustomTag">

const attrs = useAttrs();

interface IProps {
    imgUrl: string;
    small: boolean;
    normal: boolean;
    big: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
    imgUrl: '',
    small: false,
    normal: false,
    big: false,
});

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

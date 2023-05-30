<template>
    <el-button
        v-bind="attrs"
        class="normal-size"
        :class="{ block, link, bare }"
    >
        <template v-for="(index, name) in $slots">
            <slot :name="name" />
        </template>
    </el-button>
</template>

<script lang="ts" setup name="CustomButton">
const attrs = useAttrs();

defineProps({
    block: {
        type: Boolean,
    },
    link: {
        type: Boolean,
    },
    bare: {
        type: Boolean,
    },
});
</script>

<style lang="scss" scoped>

/**
    基础类 开始
*/

.el-button {
    height: auto;
}

.normal-size {
    font-size: 14px;
}

.block {
    width: 100%;
    height: 100%;
    font-size: 18px;
    font-weight: normal;
}

.bare {
    color: $c3b8;
    border-color: $c3b8;
    background: transparent;
    font-size: 14px;
    font-weight: 500;
    &:hover,
    &:focus {
        color: #62a3fe;
        border-color: #62a3fe;
        background-color: #ecf5ff;
    }
}

.el-button--link,
.link {
    color: $c333;
    padding: 0;
    border-color: transparent;
    background: transparent;
    font-size: 14px;
    font-weight: normal;
    &:hover,
    &:focus {
        color: #62a3fe;
    }
}
// .el-button--primary {
//     color: $c3b8;
// }

.el-button--bare, .el-button--bare-primary {
    color: $c3b8;
    border-color: $c3b8;
    background: transparent;
    font-size: 14px;
    font-weight: 500;
    &:hover,
    &:focus {
        color: #62a3fe;
        border-color: #62a3fe;
        background-color: #ecf5ff;
    }
}

.el-button--big {
    width: 300px;
    height: 50px;
    line-height: 50px;
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 100px;
    font-size: 18px;
    font-weight: normal;
}
</style>

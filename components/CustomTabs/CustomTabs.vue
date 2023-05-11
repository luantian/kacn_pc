<template>
    <el-Tabs :class="[type]" v-bind="attrs">
        <template v-for="(index, name) in $slots">
            <slot :name="name" />
        </template>
    </el-Tabs>
</template>

<script lang="ts" setup name="CustomTabs">

const attrs = useAttrs();

type Props = {
    type?: string;
};

withDefaults(defineProps<Props>(), {
    type: 'one',
});

</script>

<style lang="scss" scoped>
.one {
    :deep(.el-tabs__item) {
        padding: 0 25px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        color: $c666;
    }
    :deep(.el-tabs__item.is-active) {
        color: $c3b8;
    }

    :deep(.el-tabs__active-bar) {
        background-color: $c3b8;
    }

    :deep(.el-tabs__nav-wrap::after) {
        height: 1px;
        background-color: $cdee;
    }
}

.two {
    :deep(.el-tabs__header) { margin: 10px 20px 20px; }
    :deep(.el-tabs__nav-wrap::after) { height: 1px; background: #DEE3EB; }
    :deep(.el-tabs__item) { height: 50px; line-height: 50px; font-size: 16px; font-weight: normal; padding: 0 25px; color: #333; }
    :deep(.el-tabs__item:hover) { color: #3B8CFE; }
    :deep(.el-tabs__item.is-active) { color: #3B8CFE; font-weight: bold; }
    :deep(.el-tabs__active-bar) { background-color: #3B8CFE; }
}
.three {
    :deep(.el-tabs__header) { margin: 0; padding-left: 50px; border-radius: 10px; background: #F5F5F5; }
    :deep(.el-tabs__nav-wrap::after) { display: none; }
    :deep(.el-tabs__item) { height: 50px; line-height: 50px; font-size: 16px; font-weight: normal; padding: 0 25px; color: #333; }
    :deep(.el-tabs__item:hover) { color: #3B8CFE; }
    :deep(.el-tabs__item.is-active) { color: #3B8CFE; font-weight: bold; }
    :deep(.el-tabs__active-bar) { background-color: #3B8CFE; }
}

.login {
    :deep(.el-tabs__header) {
        margin: 0 72px 15px;
    }
    :deep(.el-tabs__item) {
        padding: 0 25px;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        color: $c999;
        font-weight: normal;
    }
    :deep(.el-tabs__item.is-active) {
        color: $c3b8;
    }

    :deep(.el-tabs__active-bar) {
        background-color: $c3b8;
    }
    :deep(.el-tabs__nav-wrap) {
        display: flex;
        justify-content: center;
    }

    :deep(.el-tabs__nav-wrap::after) {
        height: 1px;
        background-color: $cdee;
    }
}

.getback {
    // :deep(.el-tabs__header) {
    //     margin: 0 72px 15px;
    // }
    :deep(.el-tabs__item) {
        padding: 0 25px;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        font-weight: normal;
        color: $c999;
    }
    :deep(.el-tabs__item.is-active) {
        color: $c3b8;
    }

    :deep(.el-tabs__active-bar) {
        background-color: $c3b8;
    }

    :deep(.el-tabs__nav-scroll) {
        display: flex;
        justify-content: center;
    }

    :deep(.el-tabs__nav-wrap::after) {
        height: 1px;
        background-color: $cdee;
    }
}
</style>

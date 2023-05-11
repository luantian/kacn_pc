<template>
    <el-popover v-bind="attrs" @before-enter="onShow" @before-leave="onHide">
        <template #reference>
            <div slot="reference" class="main">
            <slot name="title"></slot>
            <span class="iconfont icon-cooper_bottom" :class="isShow"></span>
        </div>
        </template>
        <template #default>
            <slot name="content"></slot>
        </template>
    </el-popover>
</template>

<script lang="ts" setup name="CustomPopover">

const attrs = useAttrs

const visible = ref(false)

const onShow = () => {
    visible.value = true
}

const onHide = () => {
    visible.value = false
}

const isShow = computed(() => { return visible.value && "icon-rotate" })

</script>

<style lang="scss" scoped>
.main {
    display: flex;
    align-items: center;
    padding: 10px 0;
}

.icon-cooper_bottom {
    font-size: 12px;
    transform: scale(0.5) rotateZ(0);
    transition: 0.2s;
}

.icon-rotate {
    transform: scale(0.5) rotateZ(180deg);
}
</style>

<style lang="scss">

.custom-popover.el-popover.el-popper {
    padding: 0;
}
.custom-popover.el-popper[x-placement^="bottom"] {
    margin-top: 0;
}
</style>

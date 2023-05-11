<template>
    <el-form v-bind="attrs" @submit.native.prevent>
        <template v-for="(index, name) in $slots" :slot="name">
            <slot :name="name" />
        </template>
    </el-form>
</template>

<script lang="ts" setup>
const attrs = useAttrs();
</script>
Ï
<style lang="scss" scoped>
::v-deep(.el-form-item) {
    margin-bottom: 20px;
}

::v-deep(
        .el-form-item.is-required:not(.is-no-asterisk)
            .el-form-item__label-wrap
            > .el-form-item__label:before
    ),
::v-deep(
        .el-form-item.is-required:not(.is-no-asterisk)
            > .el-form-item__label:before
    ) {
    color: $cf23;
}
</style>

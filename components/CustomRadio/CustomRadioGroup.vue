<template>
    <el-radio-group v-bind="attrs">
        <template v-for="(index, name) in $slots" :slot="name">
            <slot :name="name" />
        </template>
    </el-radio-group>
</template>
<script lang="ts" setup name="CustomRadioGroup">
const attrs = useAttrs();
</script>

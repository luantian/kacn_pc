<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Container",
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 1200px;
    margin: 0 auto;
}
</style>

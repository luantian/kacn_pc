<template>
    <Container>
        <el-breadcrumb
            class="bread-crumb"
            separator-class="el-icon-arrow-right"
        >
            <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
            <el-breadcrumb-item
                v-for="(item, index) in state.routerData"
                :key="index"
                >{{ item.meta.title || "请配置页面meta.title" }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </Container>
</template>
<script lang="ts" setup name="BreadCrumb">
const route = useRoute();

const state = reactive({
    routerData: route.matched,
});


/*
export default {
    name: "crumbs",
    data() {
        return { routerData: [] };
    },
    mounted() {
        this.routerData = this.$route.matched;
    },
    watch: {
        $route() {
            this.routerData = this.$route.matched;
        },
    },
};
*/
</script>

<style lang="scss" scoped>
.bread-crumb {
    margin: 20px 0;
}
</style>

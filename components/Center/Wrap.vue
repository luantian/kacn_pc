<template>
    <div>
        <Navbar></Navbar>
        <BreadCrumb></BreadCrumb>
        <Container>
            <el-container>
                <el-aside class="aside">
                    <CenterSlider></CenterSlider>
                </el-aside>
                <el-main>
                    <div class="title-wrap" v-if="title">
                        <div class="title">{{ title }}</div>
                    </div>
                    <slot></slot>
                </el-main>
            </el-container>
        </Container>
        <Footer></Footer>
    </div>
</template>

<script lang="ts" setup name="CenterWrap">

interface IProps {
    title: string;
}

const props = withDefaults(defineProps<IProps>(), {
    title: ''
});

</script>

<style lang="scss" scoped>
.aside {
    width: 170px;
}

.title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .title {
        font-weight: 700;
        font-size: 20px;
    }
}
</style>

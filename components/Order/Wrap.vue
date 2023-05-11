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
                    <slot></slot>
                </el-main>
            </el-container>
        </Container>
        <Footer></Footer>
    </div>
</template>

<script lang="ts" setup name="CenterWrap">

</script>

<style lang="scss" scoped>
.aside {
    width: 170px;
}
</style>
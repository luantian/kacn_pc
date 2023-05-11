<template>
    <div class="page-category">
        <Navbar></Navbar>
        <!-- <Crumbs></Crumbs> -->
        <Container>
            <CategorySet
                :dataSource="state.dataSource"
                isListenerScroll
            ></CategorySet>
            <CategoryList :dataSource="state.dataSource"></CategoryList>
        </Container>
        <Footer></Footer>
    </div>
</template>

<script lang="ts" setup name="PageCategory">
import { Category } from "~/service/Category/Category";
import { ICategoryTree } from "~/service/Category/Interface";

const category = new Category();

interface IState {
    dataSource: ICategoryTree[];
}

const state = reactive<IState>({
    dataSource: [
        {
            cat_id: "4",
            cat_name: "历红分件务",
            parent_id: "68",
            children: [],
            bannerImgSrc: "http://dummyimage.com/234x60",
            catImgSrc: "http://dummyimage.com/468x60",
        },
    ],
});

const { data } = await useAsyncData("queryCategoryList", () => {
    return category.queryList();
});

state.dataSource = data.value?.data.data;

</script>

<style lang="scss" scoped></style>

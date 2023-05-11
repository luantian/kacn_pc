<template>
    <div class="category-list">
        <div
            class="category-list-item"
            v-for="(item, index) in dataSource"
            :key="index"
        >
            <PageTitle class="__screen-title" :id="'a' + item.cat_id">{{
                item.cat_name
            }}</PageTitle>
            <div class="children">
                <CategoryCard
                    v-for="(sub, index) in item.children"
                    :dataSource="sub"
                    :key="index"
                ></CategoryCard>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="CategoryList">
import { ICategoryTree } from "~/service/Category/Interface";

interface IProps {
    dataSource: ICategoryTree[];
}

const props = withDefaults(defineProps<IProps>(), {
    dataSource: () => [
        {
            cat_id: "test",
            cat_name: "测试名称",
            parent_id: "parent_test",
            bannerImgSrc: "",
            catImgSrc: "",
            children: [],
        },
    ],
});
</script>

<style lang="scss" scoped>
.label {
    font-size: 18px;
    font-weight: 500;
    color: #333;
    padding: 16px 0;
}

.children {
    display: flex;
    flex-wrap: wrap;
    > * {
        margin-right: 25px;
        margin-bottom: 20px;
        &:nth-of-type(7n) {
            margin-right: 0;
        }
    }
}
</style>

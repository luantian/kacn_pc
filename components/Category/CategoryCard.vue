<template>
    <div class="category-card">
        <img class="card-img" :src="dataSource.catImgSrc" alt="" />
        <div class="card-title">{{ dataSource.cat_name }}</div>
    </div>
</template>

<script lang="ts" setup name="CategoryCard">
import { ICategoryTree } from "~/service/Category/Interface";

interface IProps {
    dataSource: ICategoryTree;
}

const props = withDefaults(defineProps<IProps>(), {
    dataSource: () => {
        return {
            cat_id: "4",
            cat_name: "历红分件务",
            parent_id: "68",
            children: [],
            bannerImgSrc: "http://dummyimage.com/234x60",
            catImgSrc: "http://dummyimage.com/468x60",
        }
    }
});
</script>

<style lang="scss" scoped>
.category-card {
    width: 150px;
    border: 1px solid #dee3eb;
    border-radius: 10px;
    box-sizing: border-box;
    text-align: center;
    padding: 20px 0;
    cursor: pointer;
    transition: 0.3s;
    background-color: #fff;
    &:hover {
        color: #3b8cfe;
        box-shadow: 0 2px 20px 0 rgb(0 0 0 / 10%);
        transform: scale(1.1);
    }
}

.card-img {
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 10px;
    margin: 0 auto 20px;
}

.card-title {
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 10px;
}
</style>

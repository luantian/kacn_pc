<template>
    <NewsWrap>
        <div class="detail">
            <div class="title">{{ state.dataSource.title }}</div>
            <el-divider></el-divider>
            <div class="content">
                <p class="content__inner" v-html="state.dataSource.content"></p>
                <div class="time">
                    <Time>{{ state.dataSource.time * 1000 }}</Time>
                </div>
            </div>
        </div>
    </NewsWrap>
</template>

<script lang="ts" setup name="NewDetail">
import { INewsItem } from "~/service/News/Interface";
import { News } from "~/service/News/News";

definePageMeta({
    title: "新闻详情",
});

const route = useRoute();
const { id } = route.params;

const news = new News();

const { data } = await useAsyncData("queryNewsDetail", () => {
    return news.queryDetail({ id });
});
interface IState {
    dataSource: INewsItem;
}
const state = reactive<IState>({
    dataSource: data.value?.data.data,
});
</script>

<style lang="scss" scoped>
.detail {
    border: 1px solid $cdee;
    border-radius: $borderRadius;
    padding: 50px 40px;
    .title {
        font-size: 30px;
        font-weight: bold;
        color: $c333;
        text-align: center;
        padding-bottom: 50px;
    }
    .content {
        margin-top: 20px;
        color: $c333;
        line-height: 1.8;
        font-size: 16px;
        .content__inner {
            text-indent: 40px;
        }
    }

    .time {
        color: $c999;
        font-size: 16px;
        text-align: right;
        margin-top: 30px;
    }
}
</style>

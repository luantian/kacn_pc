<template>
    <div class="search-result">
        <Navbar></Navbar>
        <BreadCrumb></BreadCrumb>
        <Container>
            <el-container>
                <el-aside width="240px">
                    <SearchResultSliderBar />
                </el-aside>
                <el-main>
                    <PageTitle>搜索结果“{{ state.keyword }}”</PageTitle>
                    <div class="contents" v-if="state.dataSource.length">
                        <GoodCard
                            class="content-item"
                            v-for="(item, index) in state.dataSource"
                            :key="index"
                            :dataSource="item"
                        ></GoodCard>
                    </div>
                    <WakeSearch v-else />
                    <PageTitle showMore v-if="newsVisible">新闻推荐</PageTitle>
                    <NewsSwiper v-if="newsVisible">
                        <div
                            style="margin-right: 30px"
                            v-for="(item, index) in state.newsRecommend"
                            :key="index"
                        >
                            <NewsCard :dataSource="item" />
                        </div>
                    </NewsSwiper>
                    <PageTitle showMore v-if="goodsVisible">推荐商品</PageTitle>
                    <div class="contents" v-if="goodsVisible">
                        <GoodCard
                            class="content-item"
                            v-for="(item, index) in state.goodsRecommend"
                            :key="index"
                            :dataSource="item"
                        ></GoodCard>
                    </div>
                </el-main>
            </el-container>
        </Container>
        <Footer></Footer>
    </div>
</template>

<script lang="ts" setup name="SearchResult">
import { Good } from "~/service/Good/Good";
import { IGood } from "~/service/Good/Interface";
import { INewsItem } from "~/service/News/Interface";

definePageMeta({
    title: "搜索结果",
});

const route = useRoute();

const good = new Good();

const { data } = await useAsyncData("queryGoodList", () => {
    return good.queryRecommend();
});

interface IState {
    keyword: string | string[];
    dataSource: IGood[];
    newsRecommend: INewsItem[];
    goodsRecommend: IGood[];
}

const state = reactive<IState>({
    keyword: route.params.keyword,
    dataSource: [],
    newsRecommend: [],
    goodsRecommend: [],
});

const newsVisible = computed(() => state.newsRecommend.length > 0);
const goodsVisible = computed(() => state.goodsRecommend.length > 0);

console.log("______data______", data);

state.dataSource = data.value?.data.data;
</script>

<style lang="scss" scoped>
.contents {
    display: flex;
    flex-wrap: wrap;
    .content-item {
        margin-right: 30px;
        margin-bottom: 30px;
        &:nth-of-type(4n) {
            margin-right: 0;
        }
    }
}
</style>

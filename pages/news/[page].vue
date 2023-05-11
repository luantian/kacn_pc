<template>
    <NewsWrap>
        <div class="search-wrap">
            <SearchBar
                :width="730"
                placeholder="请输入想搜索的文章或游戏资讯"
            ></SearchBar>
        </div>
        <div class="list">
            <NewsCard
                v-for="(item, index) in state.dataSource"
                :dataSource="item"
                :key="index"
            />
        </div>
        <CustomPaginationRight
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="state.pagination.page"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="state.pagination.limit"
            layout="total, sizes, prev, pager, next"
            :total="state.pagination.total"
            background
        ></CustomPaginationRight>
    </NewsWrap>
</template>

<script lang="ts" setup name="PageNews">
import { INewsItem } from '~/service/News/Interface';
import { News } from '~/service/News/News';
import { IPagination } from '~/utils/interfaces/IPagination';

definePageMeta({
    title: "新闻列表",
});


const route = useRoute();
const router = useRouter();
const routerPath = useRouterPath();

const { page } = route.params;

const news = new News();

const { data } = await useAsyncData("queryNewsList", () => {
    return news.queryList({ page });
});

const dataSource = data.value?.data.data;

interface IState {
    dataSource: INewsItem[],
    pagination: IPagination
}

const state = reactive<IState>({
    dataSource: dataSource.records,
    pagination: {
        limit: dataSource.limit,
        page: dataSource.page,
        total: dataSource.total,
    },
});

const handleSizeChange = (value: number) => {
    state.pagination.limit = value;
}

const handleCurrentChange = (value: number) => {
    state.pagination.page = value;
    router.push({
        path: routerPath.news.index.path(value)
    })
}

</script>

<style lang="scss" scoped>
.search-wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
}

.pagination {
    text-align: right;
}
</style>

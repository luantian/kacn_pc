<template>
    <div class="news-card" @click.stop="toDetail">
        <div class="title">{{ dataSource.title }}</div>
        <div class="content">
            <img class="content-img" :src="dataSource.image" alt="新闻图片" />
            <div class="content__inner">
                <div class="text">
                    {{ dataSource.content.substring(0, 100) }}
                </div>
                <div class="time">
                    <Time>{{ dataSource.time * 1000 }}</Time>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="NewsCard">
const router = useRouter()
const routerPath = useRouterPath();
const props = defineProps({
    dataSource: {
        type: Object,
        default() {
            return {
                id: "",
                title: "",
                image: "",
                content: "",
                time: "",
            };
        },
    },
});

const toDetail = () => {
    const { id } = props.dataSource
    console.log('routerPath', routerPath);
    router.push({
        path: routerPath.news.detail.path(id)
    })
}

</script>

<style lang="scss" scoped>
.news-card {
    flex-shrink: 0;
    box-sizing: border-box;
    width: 450px;
    border-radius: $borderRadius;
    padding: 20px 20px 20px 30px;
    border: 1px solid #e8e8e8;
    margin-bottom: 30px;
    cursor: pointer;
    transition: 0.2s;
    // margin-right: 30px;
    &:hover {
        box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
        .title {
            color: $c3b8;
        }
    }
    .title {
        height: 68px;
        font-size: 16px;
        font-weight: bold;
        color: $c333;
        transition: 0.2s;
    }

    .content {
        display: flex;
        .content-img {
            display: block;
            flex-shrink: 0;
            width: 180px;
            height: 90px;
            margin-right: 15px;
            border-radius: 10px;
        }
        .content__inner {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .text {
                height: 50px;
                line-height: 1.8;
                color: $c333;
                overflow: hidden;
                position: relative;
                &::after {
                    content: "...";
                    display: block;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 20px;
                    height: 20px;
                    background-color: #fff;
                    line-height: 1;
                }
            }
            .time {
                color: $c999;
            }
        }
    }
}
</style>

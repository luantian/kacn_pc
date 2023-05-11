<template>
    <div class="tabs-wrap">
        <div class="tabs">
            <div
                class="tab-item"
                :class="{ active: state.active === index }"
                v-for="(item, index) in state.tabs"
                :key="index"
                @click="onTabChange(index)"
            >
                <div>{{ item.name }}</div>
                <el-divider
                    v-if="state.tabs.length - 1 !== index"
                    direction="vertical"
                />
            </div>
        </div>
        <CustomNuxtLink class="show-more" to="/">查看更多+</CustomNuxtLink>
    </div>
    <div class="content" v-if="state.tabs[state.active].children.length > 0">
        <div
            class="content-item"
            v-for="(item, index) in state.tabs[state.active].children"
        >
            <img :src="item.imgUrl" alt="图片" />
            <div class="title">{{ item.title }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup name="NewsQuestion">
import DemoImg from "~/assets/imgs/demo.jpg";

const state = reactive({
    active: 0,
    tabs: [
        {
            name: "新闻资讯",
            children: [
                {
                    title: "《王者耀》10.充值答疑充值答疑充值答疑充值答疑",
                    imgUrl: DemoImg,
                },
                {
                    title: "《王荣耀》10.14男枪皮肤 ",
                    imgUrl: DemoImg,
                },
                {
                    title: "《王者荣》10.14男枪皮肤",
                    imgUrl: DemoImg,
                },
            ],
        },
        {
            name: "充值答疑",
            children: [
                {
                    title: "《王者耀》20.充值答疑充值答疑充值答疑充值答疑",
                    imgUrl: DemoImg,
                },
                {
                    title: "《王荣耀》20.14男枪皮肤 ",
                    imgUrl: DemoImg,
                },
                {
                    title: "《王者荣》20.14男枪皮肤",
                    imgUrl: DemoImg,
                },
            ],
        },
    ],
});

const onTabChange = (index: number) => {
    state.active = index;
};
</script>

<style lang="scss" scoped>
.tabs-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.tabs {
    display: flex;
    // justify-content: space-between;
    font-size: 24px;
    .tab-item {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
            color: $c3b8;
        }
        &.active {
            color: $c3b8;
            font-weight: 700;
        }
    }
}

.show-more {
    font-size: 16px;
}

.content {
    display: flex;
    padding-top: 20px;
    &-item {
        margin-right: 30px;
        cursor: pointer;
        transition: 0.2s;
        img {
            display: block;
            width: 380px;
            height: 190px;
            border-radius: 15px;
        }
        .title {
            font-weight: bold;
            font-size: 16px;
            padding-top: 20px;
        }
        &:hover {
            color: $c3b8;
        }
    }
}
</style>

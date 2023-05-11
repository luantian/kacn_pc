<template>
    <!-- 热销 -->
    <div class="tabs">
        <div
            class="tab-item"
            :class="{ active: state.active === index }"
            v-for="(item, index) in state.dataSource"
            :key="index"
            @click="onTabChange(index)"
        >
            {{ item.name }}
        </div>
    </div>
    <div class="content" v-if="state.dataSource.length > 0">
        <div
            class="content-item"
            v-for="(item, index) in state.dataSource[state.active].children"
        >
            <img class="hot-img" :src="item.imgUrl" alt="图片" />
            <img class="hot-img-box-shadow" :src="HomeLine" alt="图片" />
            <div class="hot-name">{{ item.name }}</div>
            <div
                class="sign"
                :class="{
                    'bg-color-red': item.tag.type === 1,
                    'bg-color-green': item.tag.type === 2,
                }"
                v-if="item.tag"
            >
                {{ item.tag.value }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Demo01 from "~/assets/imgs/demo01.jpg";
import HomeLine from "~/assets/imgs/home_line.png";

type tag = {
    type: number;
    value: string;
};

interface Item {
    name: string;
    children: Item[];
    tag?: tag;
}

const state = reactive({
    active: 0,
    dataSource: [],
});

setTimeout(() => {
    state.dataSource = [
        {
            name: "热销商品",
            children: [
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 1, // 1 => 红  2 => 绿 3 => 图
                        value: "-40%",
                    },
                },
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 2,
                        value: "HOT",
                    },
                },
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 1, // 1 => 红  2 => 绿 3 => 图
                        value: "-40%",
                    },
                },
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 2,
                        value: "NEW",
                    },
                },
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 1, // 1 => 红  2 => 绿 3 => 图
                        value: "-40%",
                    },
                },
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 1,
                        value: "HOT",
                    },
                },
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 1, // 1 => 红  2 => 绿 3 => 图
                        value: "-40%",
                    },
                },
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 1,
                        value: "HOT",
                    },
                },
            ],
        },
        {
            name: "直播频道",
            children: [
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 1, // 1 => 红  2 => 绿 3 => 图
                        value: "-40%",
                    },
                },
            ],
        },
        {
            name: "官方卡密",
            children: [
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 1, // 1 => 红  2 => 绿 3 => 图
                        value: "-40%",
                    },
                },
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 1,
                        value: "HOT",
                    },
                },
            ],
        },
        {
            name: "pc游戏",
            children: [
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 1, // 1 => 红  2 => 绿 3 => 图
                        value: "-40%",
                    },
                },
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 1,
                        value: "HOT",
                    },
                },
            ],
        },
        {
            name: "视频音乐",
            children: [
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 1, // 1 => 红  2 => 绿 3 => 图
                        value: "-40%",
                    },
                },
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 1,
                        value: "HOT",
                    },
                },
            ],
        },
        {
            name: "定制服务",
            children: [
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 1, // 1 => 红  2 => 绿 3 => 图
                        value: "-40%",
                    },
                },
                {
                    name: "热销商品",
                    imgUrl: Demo01,
                    tag: {
                        type: 1,
                        value: "HOT",
                    },
                },
            ],
        },
    ];
}, 1000);

const onTabChange = (index: number) => {
    state.active = index;
};
</script>

<style lang="scss" scoped>
.tabs {
    font-size: 20px;
    height: 80px;
    color: #222;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.08);
    border-radius: 40px;
    border: 1px solid $cdee;
}

.tab-item {
    position: relative;
    z-index: 3;
    text-align: center;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.4s;
    border-radius: 25px;
    padding: 10px 30px;
    &.active {
        color: $cfff !important;
        box-shadow: inset 0px 1px 10px 0px rgba(255, 255, 255, 0.8);
        background-color: $c3b8;
    }
    &:hover {
        color: $c3b8;
    }
}

.content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}

.content-item {
    position: relative;
    width: 224px;
    border: 1px solid $cdee;
    box-sizing: border-box;
    border-radius: 20px;
    margin-right: 20px;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.2s;
    &:nth-of-type(5n) {
        margin-right: 0;
    }
    &:hover {
        box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.1);
        border-color: $c3b8;
        .hot-img {
            transform: scale(1.2);
        }
    }
    .hot-img {
        display: block;
        width: 120px;
        height: 120px;
        border-radius: 20px;
        margin: 0 auto;
        margin-top: 40px;
        transform: scale(1);
        transition: 0.2s;
    }
    .hot-img-box-shadow {
        display: block;
        width: 100px;
        height: 16px;
        margin: 0 auto;
        margin-top: 20px;
    }
    .hot-name {
        color: $c333;
        font-size: 16px;
        margin-top: 20px;
        text-align: center;
        padding-bottom: 40px;
    }

    .sign {
        position: absolute;
        top: 20px;
        left: 0;
        width: 56px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: $cfff;
        border-radius: 0 100px 100px 0;
        font-weight: bold;
    }

    .bg-color-red {
        background-color: $cf23;
    }
    .bg-color-green {
        background-color: $c00b;
    }
}
</style>

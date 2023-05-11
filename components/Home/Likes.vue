<template>
    <!-- 猜你喜欢 -->
    <div class="likes">
        <div
            class="like-item"
            v-for="(item, index) in state.dataSource"
            :key="index"
        >
            <div class="like-img"><img :src="item.imgPath" /></div>
            <div class="like-line"></div>
            <div class="like-title" :title="item.name">{{ item.name }}</div>
            <div class="like-btn-wrap">
                <CustomButton
                    class="like-btn"
                    bare
                    round
                    @click="toGoodsInfo(index)"
                    >立即购买</CustomButton
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import DemoImg from "~/assets/imgs/demo.jpg";

const state = reactive({
    dataSource: [
        {
            imgPath: DemoImg,
            name: "抖音直播",
        },
        {
            imgPath: DemoImg,
            name: "抖音直播",
        },
        {
            imgPath: DemoImg,
            name: "抖音直播",
        },
        {
            imgPath: DemoImg,
            name: "抖音直播",
        },
        {
            imgPath: DemoImg,
            name: "抖音直播",
        },
    ],
});

const toGoodsInfo = (index) => {
    // this.$router.push("/goodsInfo");
};

/*
export default {
    name: "homeLikes",

    data() {
        return {
            likes: [
                {
                    likePath: require("~/assets/imgs/demo.jpg"),
                    likeName: "抖音直播",
                },
                {
                    likePath: require("~/assets/imgs/demo.jpg"),
                    likeName: "抖音直播",
                },
                {
                    likePath: require("~/assets/imgs/demo.jpg"),
                    likeName: "抖音直播",
                },
                {
                    likePath: require("~/assets/imgs/demo.jpg"),
                    likeName: "抖音直播",
                },
                {
                    likePath: require("~/assets/imgs/demo.jpg"),
                    likeName: "抖音直播",
                },
            ],
        };
    },
    methods: {
        //猜你喜欢跳转
        likeUrl(index) {
            //window.location.href="https://www.baidu.com";
            this.$router.push("/goodsInfo");
            //alert(index)
        },
    },
};
*/
</script>

<style lang="scss" scoped>
.home_title {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: bold;
    line-height: 40px;
    height: 40px;
    letter-spacing: 1px;
    color: #333333;
}
.likes {
    display: flex;
    padding-top: 70px;
    box-sizing: border-box;
}
.like-item {
    position: relative;
    width: 224px;
    margin-right: 20px;
    background: #ffffff;
    height: 210px;
    border-radius: 20px;
    padding: 70px 20px 20px 20px;
    box-sizing: border-box;
    &:last-child {
        margin-right: 0;
    }
}
.like-img {
    width: 100px;
    height: 100px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: -40px;
    transition: all 0.3s ease;
    > img {
        width: 100%;
        border-radius: 20px;
    }
}
.like-line {
    width: 100px;
    height: 16px;
    margin: 0 auto;
    background: url(~/assets/imgs/home_line.png) no-repeat center;
    background-size: 100%;
}
.like-title {
    font-size: 18px;
    line-height: 30px;
    height: 30px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    margin-top: 10px;
}

.like-btn-wrap {
    text-align: center;
}
.like-btn {
    width: 150px;
    margin: 30px auto 0 auto;
}
.like-item {
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.1);
    &:hover {
        .like-img {
            top: -50px;
        }
    }
}
</style>

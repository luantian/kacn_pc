<template>
    <Container class="home_box">
        <div class="link_box">
            <div class="titles">
                <div class="scroll-view-wrap">
                    <div
                        class="scroll-view"
                        :style="{
                            top:
                                -(state.scrollHeight * state.scrollActive) +
                                'px',
                        }"
                    >
                        <div
                            class="title-wrap"
                            :class="{ active: state.active === index }"
                            v-for="(item, index) in state.dataSource"
                            :key="index"
                            @mouseenter="onMouseenter(index)"
                        >
                            <div class="title-img">
                                <img :src="item.titleImgUrl" alt="图片" />
                            </div>
                            <div class="title-content">
                                <div class="title">{{ item.title }}</div>
                                <div class="sub-title">{{ item.subTitle }}</div>
                            </div>
                            <div
                                v-show="state.active === index"
                                class="right-triangle-wrap"
                            >
                                <div class="right-triangle"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="top-triangle-wrap"
                    v-show="state.scrollActive !== 0"
                >
                    <div class="top-triangle" @click="onTop"></div>
                </div>
                <div
                    class="bottom-triangle-wrap"
                    v-show="state.scrollActive < state.dataSource.length - 4"
                >
                    <div class="bottom-triangle" @click="onBottom"></div>
                </div>
            </div>
            <div class="contents">
                <template v-for="(item, index) in state.dataSource">
                    <div
                        class="content-wrap"
                        v-if="state.active === index"
                        :key="index"
                    >
                        <img
                            class="main-img"
                            :src="item.contentImgUrl"
                            alt="图片"
                        />
                        <div class="real">
                            <div class="real-main">
                                <div class="content-title">
                                    {{ item.contentTitle }}
                                </div>
                                <div class="content-sub-title">
                                    {{ item.contentSubTitle }}
                                </div>
                            </div>
                            <div class="btn-wrap">
                                <CustomButton class="btn" type="primary" round
                                    >立即购买</CustomButton
                                >
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </Container>
</template>

<script lang="ts" setup>
import DemoImg from "~/assets/imgs/demo01.jpg";
import Img11 from "~/assets/imgs/11.webp";
import Img22 from "~/assets/imgs/22.webp";
import Img33 from "~/assets/imgs/33.webp";

const state = reactive({
    active: 0,
    scrollActive: 0,
    scrollHeight: 115,
    dataSource: [
        {
            id: "1",
            title: "第1人格",
            subTitle: "跃进时空，与旅人编织破跃进时空，与旅人编织破",
            titleImgUrl: DemoImg,
            contentImgUrl: Img11,
            contentTitle: "1火炬之光：无限",
            contentSubTitle: "原版同名动漫打造的策略类回合制卡片吧啦吧吧吧啊吧",
        },
        {
            id: "2",
            title: "第2人格",
            subTitle: "跃进时空，与旅人编织破跃进时空，与旅人编织破",
            titleImgUrl: DemoImg,
            contentImgUrl: Img22,
            contentTitle: "2火炬之光：无限",
            contentSubTitle:
                "原版同名动漫打造的策略类回合制卡片吧啦吧吧吧啊吧原版同名动漫打造的策略类回合制卡片吧啦吧吧吧啊吧原版同名动漫打造的策略类回合制卡片吧啦吧吧吧啊吧原版同名动漫打造的策略类回合制卡片吧啦吧吧吧啊吧原版同名动漫打造的策略类回合制卡片吧啦吧吧吧啊吧原版同名动漫打造的策略类回合制卡片吧啦吧吧吧啊吧原版同名动漫打造的策略类回合制卡片吧啦吧吧吧啊吧",
        },
        {
            id: "3",
            title: "第3人格",
            subTitle: "跃进时空，与旅人编织破跃进时空，与旅人编织破",
            titleImgUrl: DemoImg,
            contentImgUrl: Img11,
            contentTitle: "3火炬之光：无限",
            contentSubTitle: "原版同名动漫打造的策略类回合制卡片吧啦吧吧吧啊吧",
        },
        {
            id: "4",
            title: "第4人格",
            subTitle: "跃进时空，与旅人编织破跃进时空，与旅人编织破",
            titleImgUrl: DemoImg,
            contentImgUrl: Img33,
            contentTitle: "4火炬之光：无限",
            contentSubTitle: "原版同名动漫打造的策略类回合制卡片吧啦吧吧吧啊吧",
        },
        {
            id: "5",
            title: "第5人格",
            subTitle: "跃进时空，与旅人编织破跃进时空，与旅人编织破",
            titleImgUrl: DemoImg,
            contentImgUrl: Img11,
            contentTitle: "5火炬之光：无限",
            contentSubTitle: "原版同名动漫打造的策略类回合制卡片吧啦吧吧吧啊吧",
        },
        {
            id: "6",
            title: "第6人格",
            subTitle: "跃进时空，与旅人编织破跃进时空，与旅人编织破",
            titleImgUrl: DemoImg,
            contentImgUrl: Img22,
            contentTitle: "6火炬之光：无限",
            contentSubTitle: "原版同名动漫打造的策略类回合制卡片吧啦吧吧吧啊吧",
        },
    ],
});

const goShop = (id: string) => {
    console.log(id);
};

const onMouseenter = (index) => {
    state.active = index;
};

const onTop = () => {
    if (state.scrollActive > 0) {
        state.scrollActive--;
    }
};

const onBottom = () => {
    if (state.scrollActive < state.dataSource.length - 1) {
        state.scrollActive++;
    }
};

/*
export default {
    name: "Linkage",
    data() {
        return {
            active: 0,
            scrollActive: 0,
            scrollHeight: 115,
            dataSource:
        };
    },
    methods: {
        goShop(id){
            console.log(id);
            this.$router.push('/goodsInfo')
        },
        onMouseenter(index) {
            this.active = index;
        },
        onTop() {
            if (this.scrollActive > 0) {
                this.scrollActive--;
            }
        },
        onBottom() {
            if (this.scrollActive < this.dataSource.length - 1) {
                this.scrollActive++;
            }
        },
    },
};
*/
</script>

<style lang="scss" scoped>
.real-main {
    width: 610px;
    margin-right: 30px;
}
.home_title {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: bold;
    line-height: 40px;
    height: 40px;
    letter-spacing: 1px;
    color: #333333;
    padding-bottom: 33px;
}
.link_box {
    display: flex;
}

.home_box {
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: 14px;
}
.top-triangle-wrap,
.bottom-triangle-wrap,
.right-triangle-wrap {
    position: absolute;
    display: flex;
    justify-content: center;
}

.top-triangle-wrap {
    left: 0;
    right: 0;
    top: -27px;
}

.bottom-triangle-wrap {
    left: 0;
    right: 0;
    bottom: -27px;
}

.right-triangle-wrap {
    right: -21px;
}

.top-triangle,
.bottom-triangle,
.right-triangle {
    z-index: 30;
    content: "";
    display: block;
    border-width: 7px;
    font-size: 0px;
    border-style: solid;
    border-color: transparent;
    cursor: pointer;
}

.top-triangle {
    border-bottom-color: $c999;
    &:hover {
        border-bottom-color: $c3b8;
    }
}

.bottom-triangle {
    border-top-color: $c999;
    &:hover {
        border-top-color: $c3b8;
    }
}

.right-triangle {
    border-left-color: $c3b8;
}

.titles {
    width: 320px;
    position: relative;

    .scroll-view-wrap {
        height: 447px;
        overflow: hidden;
        padding-right: 25px;
    }

    .scroll-view {
        position: relative;
        transition: 0.3s;
    }
    .title-wrap {
        display: flex;
        border: 1px solid $cdee;
        border-radius: $borderRadius;
        align-items: center;
        padding: 10px 15px;
        margin-bottom: 13px;
        cursor: pointer;
        &:hover {
            border: 1px solid $c3b8;
        }
        &.active {
            border: 1px solid $c3b8;
        }
        .title-img {
            height: 80px;
            margin-right: 15px;
            border-radius: 20px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
            // background-color: red;
        }
        .title-content {
            flex: 1;
            width: 0;
            .title {
                font-size: 18px;
                // .fw;
                color: $c333;
                margin-bottom: 10px;
            }
            .sub-title {
                font-size: 14px;
                color: $c999;
                line-height: 20px;
                // .ellipsis();
            }
        }
    }
}

.contents {
    flex: 1;
    .content-wrap {
        position: relative;
        flex: 1;
        height: 440px;
        overflow: hidden;
        border-radius: 20px;

        .main-img {
            display: block;
            width: 100%;
            height: 100%;
        }
        .real {
            position: absolute;
            height: 90px;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.5) 0%,
                rgba(0, 0, 0, 0.35) 100%
            );
            padding: 0 30px;
            color: $cfff;
            display: flex;
            justify-content: space-between;
            .btn-wrap {
                display: flex;
                justify-content: center;
                align-items: center;
                .btn {
                    width: 180px;
                    height: 40px;
                }
            }
        }
        .content-title {
            font-size: 22px;
            line-height: 40px;
            height: 40px;
            font-weight: bold;
            text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
            // .mt(10px);
        }

        .content-sub-title {
            font-size: 16px;
            line-height: 30px;
            height: 30px;
            // .ellipsis();
        }
    }
}
</style>

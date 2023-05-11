<template>
    <div class="search-result-slider">
        <div class="main" v-for="(item, index) in state.dataSource" :key="index">
            <div class="title">
                <img :src="item.imgUrl" alt="标题icon" />
                <div>{{ item.title }}</div>
            </div>
            <ul class="contents">
                <li
                    class="content-item"
                    v-for="(it, idx) in item.children"
                    :key="idx"
                >
                    <img
                        v-if="it.hot"
                        src="~/assets/imgs/fire_icon.png"
                        class="content-item-icon"
                    />
                    <CustomNuxtLink
                        class="slider-btn"
                        solid
                        round
                        size="mini"
                        :to="it.value"
                        >{{ it.value }}</CustomNuxtLink
                    >
                </li>
            </ul>
            <div
                class="dashed-line"
                v-if="index !== state.dataSource.length - 1"
            ></div>
        </div>
    </div>
</template>

<script lang="ts" setup name="SearchResultSlider">
import SearchSliderIcon1 from "~/assets/imgs/icon/search_slider_icon1.svg";
import SearchSliderIcon2 from "~/assets/imgs/icon/search_slider_icon2.svg";
import SearchSliderIcon3 from "~/assets/imgs/icon/search_slider_icon3.svg";
import SearchSliderIcon4 from "~/assets/imgs/icon/search_slider_icon4.svg";

const state = reactive({
    dataSource: [
        {
            title: "游戏点卡",
            imgUrl: SearchSliderIcon1,
            children: [
                { value: "MyCard" },
                { value: "PSN", hot: true },
                { value: "日服点卡" },
                { value: "台服点卡" },
                { value: "美服点卡" },
                { value: "港服点卡" },
                { value: "游戏充值卡" },
                { value: "任天堂充值卡" },
                { value: "Steam充值卡" },
                { value: "CD-KEY兑换" },
            ],
        },
        {
            title: "直播专区",
            imgUrl: SearchSliderIcon2,
            children: [
                { value: "虎牙直播" },
                { value: "YY直播" },
                { value: "映客直播" },
                { value: "酷秀短视频" },
                { value: "抖音直播" },
                { value: "花椒直播" },
                { value: "一直播" },
                { value: "快手" },
                { value: "唱吧" },
                { value: "小象直播" },
            ],
        },
        {
            title: "游戏充值",
            imgUrl: SearchSliderIcon3,
            children: [
                { value: "暴雪战网" },
                { value: "搜狐畅游" },
                { value: "完美游戏" },
                { value: "金山游戏" },
                { value: "世纪天成" },
                { value: "盛趣游戏" },
                { value: "三国杀" },
                { value: "蜗牛游戏" },
            ],
        },
        {
            title: "网易游戏",
            imgUrl: SearchSliderIcon4,
            children: [
                { value: "藏宝阁" },
                { value: "网易充值" },
                { value: "网易一卡通" },
                { value: "永劫无间" },
            ],
        },
    ],
});
</script>

<style lang="scss" scoped>
.search-result-slider {
    background: url("~/assets/imgs/search_result_slider_bg.png") no-repeat;
    background-size: 100%;
    border: 1px solid $cdee;
    box-sizing: border-box;
    border-radius: $borderRadius;
    .title {
        display: flex;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        font-weight: bold;
        color: $c333;
        padding: 15px 15px 0;
        > img {
            display: block;
            margin-right: 10px;
        }
    }
    .contents {
        display: flex;
        flex-wrap: wrap;
        padding: 14px;
        .content-item {
            position: relative;
            width: 100px;
            margin-bottom: 10px;
            &:nth-child(odd) {
                margin-right: 10px;
            }
            &-icon {
                width: 14px;
                height: 14px;
                position: absolute;
                right: 0;
                top: -4px;
                z-index: 2;
            }
            .slider-btn {
                display: inline-block;
                // .ellipsis();
                width: 100px;
            }
        }
    }
    .dashed-line {
        margin: 0 15px;
    }
}
</style>

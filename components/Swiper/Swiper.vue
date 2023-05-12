<template>
    <div class="swiper">
        <div
            class="swiper-item"
            v-for="(item, index) in banners"
            :key="index"
            :style="{
                transform: `translateX(${positions[index].x}px) scale(${positions[index].scale})`,
                zIndex: positions[index].zIndex,
            }"
        >
            <img :src="item" alt="banner-img" />
        </div>
        <div class="dots">
            <div
                class="dots-item"
                :class="{ active: active.value === index }"
                v-for="(item, index) in banners"
                @click="onToggle(index)"
                :key="index"
            ></div>
        </div>
        <div class="prev-wrap">
            <div class="prev" @click="onPrev">
                <el-icon><ArrowLeftBold /></el-icon>
            </div>
        </div>
        <div class="next-wrap">
            <div class="next" @click="onNext">
                <el-icon><ArrowRightBold /></el-icon>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="Swiper">
// const getAssetsFile = (url) => {
//    return new URL(`../assets/images/${url}`, import.meta.url).href
// }

import { ISwiper, IPosition } from "./Interface";
import { Swiper } from "./SwiperEnitity";

import Banner1 from "~/assets/imgs/11.webp";
import Banner2 from "~/assets/imgs/22.webp";
import Banner3 from "~/assets/imgs/33.webp";

const banners = reactive([Banner1, Banner2, Banner3, Banner1, Banner2, Banner3, Banner1, Banner2, Banner3]);

const positions: IPosition[] = reactive(
    banners.map((item, index) => {
        const active = 100;
        if (index === 0) {
            return {
                x: active,
                scale: 1,
                zIndex: 100,
            };
        }
        if (index === banners.length - 1) {
            return {
                x: active - 200,
                scale: 0.8,
                zIndex: 99,
            };
        }
        if (index === 1) {
            return {
                x: active + 200,
                scale: 0.8,
                zIndex: 99,
            };
        }
        return {
            x: active + 100,
            scale: 0.8,
            zIndex: 99 - index,
        };
    })
);

const active = reactive({ value: 0 });
const swiper: ISwiper = new Swiper(active, positions);

const onPrev = () => {
    swiper.prev();
    console.log("active", active.value);
};

const onNext = () => {
    swiper.next();
    console.log("active", active.value);
};
const onToggle = (active: number) => {
    swiper.toggle(active);
};
</script>

<style lang="scss" scoped>
.swiper {
    position: relative;
    height: 380px;
    .next,
    .prev {
        display: none;
    }
    &:hover {
        .next,
        .prev {
            display: block;
        }
    }
}
.swiper-item {
    position: absolute;
    width: 1000px;
    height: 360px;
    transform-origin: center;
    transition: 0.2s;
    > img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }
}
.dots {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 101;
    cursor: pointer;

    &-item {
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: rgba(51, 51, 51, 0.2);
        margin-right: 10px;
        transition: 0.2s;
        &:hover {
            background-color: $c3b8;
        }
        &.active {
            width: 20px;
            background-color: $c3b8;
        }
    }
}

.prev-wrap,
.next-wrap {
    position: absolute;
    width: 40px;
    top: 0;
    bottom: 0;
    // background-color: yellow;
    z-index: 101;
    display: flex;
    justify-content: center;
    align-items: center;
}

.prev-wrap {
    left: 30px;
}

.next-wrap {
    right: 30px;
}

.prev,
.next {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid $cfff;
    border-radius: 50%;
    cursor: pointer;
    box-sizing: border-box;
    color: $cfff;
    transition: 0.2s;
    &:hover {
        border-color: $c3b8;
        color: $c3b8;
    }
}
</style>

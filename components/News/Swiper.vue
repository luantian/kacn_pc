<template>
    <div class="news-swiper" :style="{ width: `${width}px` }">
        <div
            class="main"
            :style="{
                width: `${mainWidth}px`,
                transform: `translateX(-${x}px)`,
            }"
        >
            <slot></slot>
        </div>
        <div class="prev-btn" @click="onPrev" v-show="state.active !== 0">
            <span class="iconfont icon-bar_back_black"></span>
        </div>
        <div
            class="next-btn"
            @click="onNext"
            v-show="count > 2 && state.active !== count - 2"
        >
            <span class="iconfont icon-bar_back_black"></span>
        </div>
    </div>
</template>
<script lang="ts" setup name="NewsSwiper">
const slots = useSlots();

defineProps({
    width: {
        type: Number,
        default: 930,
    },
});

const state = reactive({
    active: 0,
    boxWidth: 480,
});

const slotLength = slots.default()[0].children.length || 0;

const count = ref(slotLength);
const x = computed(() => state.active * state.boxWidth);
const mainWidth = computed(() => state.boxWidth * count.value);

const onPrev = () => {
    if (state.active === 0) {
    } else {
        state.active--;
    }
};

const onNext = () => {
    if (state.active === count.value - 2) {
    } else {
        state.active++;
    }
};

</script>

<style lang="scss" scoped>
.news-swiper {
    position: relative;
    overflow: hidden;
    .main {
        display: flex;
        overflow: hidden;
        transition: 0.3s;
        // > div {
        //     display: block;
        //     flex: 0 0 450px;
        //     margin-right: 30px;
        //     margin-bottom: 0;
        //     &:last-child {
        //         margin-right: 0;
        //     }
        // }
    }
    .prev-btn,
    .next-btn {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 10px;
        font-weight: bold;
        transition: 0.3s;
        > span {
            display: block;
            color: #fff;
        }
        &:hover {
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
    .prev-btn {
        left: 0;
        border-radius: 0 100px 100px 0;
        > span {
            transform: rotate(-90deg) scale(0.8);
        }
    }
    .next-btn {
        right: 0;
        border-radius: 100px 0 0 100px;
        > span {
            transform: rotate(90deg) scale(0.8);
        }
    }
}
// .clearfix {
//     zoom: 1;
// }
// .clearfix:after {
//     content: "";
//     display: block;
//     height: 0;
//     clear: both;
//     visibility: hidden;
// }
</style>

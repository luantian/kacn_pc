<template>
    <div
        class="good-card"
        :class="{ checked }"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
    >
        <div class="img-wrap">
            <img :src="dataSource.imgUrl" alt="产品图片" />
        </div>
        <div class="card-name">{{ dataSource.name }}</div>
        <Price class="card-price" :value="dataSource.price" after="起"></Price>
        <div class="delete-button" v-show="state.visibleDeleteButton" @click="onDelete">
            <div class="iconfont icon-del_gray"></div>
        </div>
        <div
            class="checked-button"
            v-show="onOffChecked"
            :class="{ checked }"
        >
            <div class="iconfont icon-wish_check"></div>
        </div>
    </div>
</template>

<script lang="ts" setup name="GoodCard">
import { IGood } from "~/service/Good/Interface";

interface IProps {
    dataSource: IGood;
    onOff?: boolean; // 判断是否开启 删除按钮
    checked?: boolean; // 判断当前商品是否选中
    onOffChecked?: boolean; //是否开启选中 (移入移出动效)
}

const props = withDefaults(defineProps<IProps>(), {
    onOff: false,
    checked: false,
    onOffChecked: false,
});

const emits = defineEmits(['delete'])

const state = reactive({
    visibleDeleteButton: false,
});

const onMouseEnter = () => {
    if (props.onOff && !props.onOffChecked) {
        state.visibleDeleteButton = true;
    }
};

const onMouseLeave = () => {
    if (props.onOff && !props.onOffChecked) {
        state.visibleDeleteButton = false;
    }
};

const onDelete = (item: IGood) => {
    emits('delete', item)
}

</script>

<style lang="scss" scoped>
.good-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    // min-width: 210px;
    height: 290px;
    box-sizing: border-box;
    border: 1px solid $cdee;
    border-radius: $borderRadius;
    padding: 10px 9px 0;
    background: $cfff;
    cursor: pointer;
    transition: 0.3s;
    &.checked {
        border-color: red !important;
    }
    &:hover {
        color: $c3b8;
        box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);
        border-color: $c3b8;
        .img-wrap {
            img {
                transform: scale(1.3);
            }
        }
    }
    .img-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 190px;
        height: 190px;
        border-radius: 10px;
        background: linear-gradient(180deg, #fbfbfb 0%, #f5f5f5 100%);
        img {
            width: 120px;
            height: 120px;
            border-radius: $borderRadius;
            transition: 0.3s;
        }
    }
    .card-name {
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        // color: $c333;
        margin: 10px auto 5px;
    }
    .card-price {
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        color: $cf23;
        font-weight: bold;
    }

    .delete-button,
    .checked-button {
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 0px 15px 0px 15px;
        .iconfont {
            font-size: 20px;
            color: $cfff;
        }
    }

    .checked-button {
        &.checked {
            background-color: red;
        }
        .iconfont {
            font-size: 24px;
        }
    }
}
</style>

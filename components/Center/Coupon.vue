<template>
    <div class="coupon">
        <div class="coupon-header" :class="{ unused: isUnused }">
            <div class="name">{{ ECouponType[dataSource.type] }}</div>
            <div class="price">
                <Price :value="dataSource.price"></Price>
            </div>
            <div class="condition">{{ dataSource.condition }}</div>
            <img
                class="line-img"
                :src="isUnused ? LineImg : LineUsedImg"
                alt=""
            />
        </div>
        <div class="coupon-content">
            <div class="content-item">
                <div class="label">卷的名称：</div>
                <div class="value ellipsis">{{ dataSource.name }}</div>
            </div>
            <div class="content-item">
                <div class="label">领取时间：</div>
                <div class="value ellipsis">
                    <Time :format="state.format">{{
                        dataSource.receiveData
                    }}</Time>
                </div>
            </div>
            <div class="content-item">
                <div class="label">有效时间：</div>
                <div class="value ellipsis">
                    <Time :format="state.format">{{ dataSource.EXPDate }}</Time>
                    -
                    <Time :format="state.format">{{ dataSource.EXPDate }}</Time>
                </div>
            </div>
            <div class="content-item">
                <div class="label">使用说明：</div>
                <div class="value ellipsis">{{ dataSource.manual }}</div>
            </div>
        </div>

        <div class="button-wrap" v-if="isUnused">
            <CustomButton style="width: 115px" bare round
                >去使用</CustomButton
            >
        </div>

        <div class="sign" v-if="isUsed">
            <img :src="UsedImg" alt="" />
        </div>
        <div class="sign" v-if="isExpired">
            <img :src="ExpiredImg" alt="" />
        </div>
    </div>
</template>

<script lang="ts" setup name="Coupon">
import LineImg from "~/assets/imgs/coupon_line.png";
import LineUsedImg from "~/assets/imgs/coupon_line_unused.png";
import UsedImg from "~/assets/imgs/icon/icon_coupon_used.svg";
import ExpiredImg from "~/assets/imgs/icon/icon_coupon_overdue.svg";

import { ECouponStatus, ECouponType } from "~/service/User/Enums";
import { ICoupon } from "~/service/User/Interface";

interface IProps {
    dataSource: ICoupon;
}

const props = withDefaults(defineProps<IProps>(), {});

const isUsed = computed(() => ECouponStatus.Used === props.dataSource.status);
const isUnused = computed(
    () => ECouponStatus.Unused === props.dataSource.status
);
const isExpired = computed(
    () => ECouponStatus.Expired === props.dataSource.status
);

const state = reactive({
    format: "YYYY.MM.DD",
});
</script>

<style lang="scss" scoped>
.coupon {
    width: 235px;
    background-color: $cf5f;
    border-radius: 6px;
    overflow: hidden;
}

.coupon-header {
    position: relative;
    color: $cfff;
    background: #d9d9d9 url("~/assets/imgs/icon/icon_coupon.svg") no-repeat top
        right;
    &.unused {
        background-color: $hoverMainBg;
    }
    .name {
        font-size: 12px;
        padding: 10px;
    }
    .price {
        text-align: center;
        font-weight: bold;
        font-size: 28px;
        padding-bottom: 16px;
    }

    .condition {
        text-align: center;
        font-size: 12px;
        padding-bottom: 15px;
    }

    .line-img {
        position: absolute;
        bottom: -3px;
        display: block;
        height: 3px;
    }
}
.coupon-content {
    background: $cf5f;
    font-size: 12px;
    padding: 10px;
    .content-item {
        display: flex;
        width: 100%;
        padding: 12px 0;
        .label {
            color: $c999;
        }
        .value {
            flex: 1;
        }
    }
}
.button-wrap {
    text-align: center;
    padding-top: 6px;
    padding-bottom: 30px;
}

.sign {
    text-align: right;
    padding-right: 10px;
}
</style>

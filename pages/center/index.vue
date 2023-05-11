<template>
    <CenterWrap>
        <div class="row">
            <div class="vip-level-card">
                <div class="grow-value">
                    <CustomNuxtLink style="font-size: 12px" type="vip" to="/"
                        >什么是成长值？</CustomNuxtLink
                    >
                </div>
                <div class="grow-title">全场商品<span>98</span>折</div>
                <CustomNuxtLink
                    class="view-detail"
                    type="vip"
                >查看成长值明细 &gt;</CustomNuxtLink>
                <div class="vip-progress">
                    <div class="current-level">
                        Lv.{{ state.dataSource.vipLevel }}
                    </div>
                    <div class="progress">
                        <div class="progress-content">
                            <img :src="growLinkImg" alt="" />
                            <div class="point"></div>
                        </div>
                    </div>
                    <div class="next-level">
                        Lv.{{ state.dataSource.vipLevel + 1 }}
                    </div>
                </div>
                <div class="lv-bg">
                    <CustomNuxtLink to="/">
                        <img class="lv-bg-img" :src="lvBgImg1" alt="" />
                    </CustomNuxtLink>
                </div>
            </div>
            <div class="purse">
                <div class="purse-title">我的钱包</div>
                <div class="purse-table">
                    <div class="column">
                        <div class="value">{{ state.dataSource.ingots }}</div>
                        <div class="label">我的余额</div>
                        <CustomNuxtLink type="link" to="/">充值</CustomNuxtLink>
                    </div>
                    <div class="column">
                        <div class="value">{{ state.dataSource.balance }}</div>
                        <div class="label">优惠卷</div>
                        <CustomNuxtLink type="link" to="/">查看</CustomNuxtLink>
                    </div>
                    <div class="column">
                        <div class="value">{{ state.dataSource.coupon }}</div>
                        <div class="label">元宝币</div>
                        <CustomNuxtLink type="link">查看</CustomNuxtLink>
                        <el-divider direction="vertical" />
                        <CustomNuxtLink type="link" to="/"
                            >如何获取元宝</CustomNuxtLink
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="account-safety">
            <div class="title-wrap">
                <span class="title">账户安全</span>
                <span class="sub-title">认证后安全保护更放心</span>
            </div>
            <div class="icon-list">
                <div
                    class="icon-item"
                    v-for="(item, index) in state.bindData"
                    :key="index"
                >
                    <div class="name">{{ item.title }}</div>
                </div>
            </div>
        </div>
    </CenterWrap>
</template>

<script lang="ts" setup name="CenterPage">
import growLinkImg from "~/assets/imgs/grow_link.png";
import lvBgImg1 from "~/assets/imgs/lv_bg_1_1.png";

definePageMeta({
    title: "用户中心",
});

const state = reactive({
    dataSource: {
        vipLevel: 0,
        balance: 100,
        coupon: 2,
        ingots: 123,
    },
    bindData: [
        { title: "手机绑定" },
        { title: "邮箱认证" },
        { title: "第三方账号管理" },
        { title: "密码管理" },
        { title: "银行卡认证" },
        { title: "账单地址" },
        { title: "实名认证" },
    ],
});
</script>

<style lang="scss" scoped>
.row {
    display: flex;
}
.vip-level-card {
    position: relative;
    width: 380px;
    height: 210px;
    box-sizing: border-box;
    background-image: url("~/assets/imgs/lv_bg_7_0.png");
    background-size: 100% 100%;
    border-radius: 40px 0 0 0;
    padding-left: 25px;
    color: $cf4e;
    .grow-value {
        text-align: right;
        padding-right: 10px;
        font-size: 12px;
    }
    .grow-title {
        font-size: 24px;
        font-weight: 700;
        box-sizing: border-box;
        > span {
            padding: 0 5px;
            font-size: 46px;
        }
    }
    .view-detail {
        font-size: 12px;
        margin-top: 10px;
    }
    .vip-progress {
        width: 220px;
        display: flex;
        font-size: 12px;
        margin-top: 6px;
        align-items: center;
        .progress {
            flex: 1;
            height: 6px;
            background-color: rgba(0, 0, 0, 0.2);
            margin: 0 5px;
            border-radius: 10px;
            &-content {
                position: relative;
                width: 30%;
                height: 100%;
                border-radius: 10px;
                background: linear-gradient(270deg, #fff, #f4e2be);
                .point {
                    position: absolute;
                    right: -3px;
                    top: -3px;
                    width: 12px;
                    height: 12px;
                    border-radius: 6px;
                    background: #fff;
                    box-shadow: 0 0 6px 0 #fff;
                    animation: robotMove 2s linear infinite;
                    animation-delay: 0.2s;
                }
                > img {
                    position: absolute;
                    left: 0;
                    top: -7px;
                    width: 46px;
                    height: 20px;
                    display: block;
                    animation: bgMove 2s infinite linear;
                }
            }
        }
    }
    .lv-bg {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 380px;
        height: 40px;
        img {
            width: 100%;
            height: 100%;
            display: block;
        }
    }
}
.purse {
    flex: 1;
    background-color: $cf5f;
    &-title {
        font-weight: 700;
        font-size: 20px;
        padding: 15px 20px;
        border-bottom: 1px solid #dee3eb;
    }
    .purse-table {
        padding-left: 30px;
        display: flex;
        .column {
            flex: 1;
            .value {
                font-weight: 700;
                font-size: 24px;
                padding-top: 20px;
            }
            .label {
                padding: 20px 0;
            }
        }
    }
}

.account-safety {
    border: 1px solid $cdee;
    border-radius: 10px;
    margin-top: 30px;
    .title-wrap {
        padding: 20px 24px;
    }
    .title {
        font-weight: 700;
        font-size: 20px;
    }
    .sub-title {
        font-size: 16px;
        color: $c666;
        padding-left: 10px;
    }
}

.icon-list {
    display: flex;
    padding-top: 30px;
    .icon-item {
        flex: 1;
        text-align: center;
        cursor: pointer;
        padding-top: 50px;
        padding-bottom: 10px;
        &:nth-of-type(1) {
            background: url("~/assets/imgs/icon/icon_phone.svg") no-repeat
                center 0;
        }
        &:nth-of-type(2) {
            background: url("~/assets/imgs/icon/icon_email.svg") no-repeat
                center 0;
        }
        &:nth-of-type(3) {
            background: url("~/assets/imgs/icon/icon_three.svg") no-repeat
                center 0;
        }
        &:nth-of-type(4) {
            background: url("~/assets/imgs/icon/icon_password.svg") no-repeat
                center 0;
        }
        &:nth-of-type(5) {
            background: url("~/assets/imgs/icon/icon_card.svg") no-repeat center
                0;
        }
        &:nth-of-type(6) {
            background: url("~/assets/imgs/icon/icon_list.svg") no-repeat center
                0;
        }
        &:nth-of-type(7) {
            background: url("~/assets/imgs/icon/icon_person.svg") no-repeat
                center 0;
        }
        &:hover {
            color: $c3b8;
            &:nth-of-type(1) {
                background-image: url("~/assets/imgs/icon/icon_phone_h.svg");
            }
            &:nth-of-type(2) {
                background-image: url("~/assets/imgs/icon/icon_email_h.svg");
            }
            &:nth-of-type(3) {
                background-image: url("~/assets/imgs/icon/icon_three_h.svg");
            }
            &:nth-of-type(4) {
                background-image: url("~/assets/imgs/icon/icon_password_h.svg");
            }
            &:nth-of-type(5) {
                background-image: url("~/assets/imgs/icon/icon_card_h.svg");
            }
            &:nth-of-type(6) {
                background-image: url("~/assets/imgs/icon/icon_list_h.svg");
            }
            &:nth-of-type(7) {
                background-image: url("~/assets/imgs/icon/icon_person_h.svg");
            }
        }
        .img {
            display: block;
            width: 50px;
            height: 50px;
            margin: 0 auto;
        }
        .name {
            padding: 20px 0;
        }
    }
}

@keyframes robotMove {
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(0.9);
    }
    50% {
        transform: scale(1);
    }
    75% {
        transform: scale(0.9);
    }
}

@keyframes bgMove {
    0% {
        left: 0%;
    }
    50% {
        left: calc(100% - 46px);
    }
}
</style>

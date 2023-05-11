<template>
    <div class="user-overview">
        <div class="top">
            <div class="user-avator">
                <img :src="UserPhoto" alt="用户头像" />
            </div>
            <div class="info">
                <div>
                    <CustomNuxtLink class="email" to="/center"
                        >{{ userInfo.email }} &gt;</CustomNuxtLink
                    >
                </div>
                <img :src="vipLevelImgUrl" alt="vip等级图片" />
            </div>
        </div>
        <ul class="order">
            <li class="order-item">
                <CustomNuxtLink to="/order">
                    <span class="order-item-count">
                        {{ userInfo.order.total }}
                    </span>
                    <br />
                    <span class="order-item-title">全部订单</span>
                </CustomNuxtLink>
            </li>
            <li class="order-item">
                <CustomNuxtLink to="/order/0">
                    <span class="order-item-count">
                        {{ userInfo.order.waitPayment }}
                    </span>
                    <br />
                    <span class="order-item-title">待付款</span>
                </CustomNuxtLink>
            </li>
            <li class="order-item">
                <CustomNuxtLink to="/order/1">
                    <span class="order-item-count">
                        {{ userInfo.order.waitSend }}
                    </span>
                    <br />
                    <span class="order-item-title">待发货</span>
                </CustomNuxtLink>
            </li>
            <li class="order-item">
                <CustomNuxtLink to="/order/2">
                    <span class="order-item-count">
                        {{ userInfo.order.waitReceived }}
                    </span>
                    <br />
                    <span class="order-item-title">待收货</span>
                </CustomNuxtLink>
            </li>
        </ul>

        <div class="wait-order">
            <div class="wait-order-img">
                <img :src="DemoImg" alt="待支付商品图片" />
            </div>
            <div class="wait-order-title ellipsis">
                映客直播映客映客直播映客映客直播映客映客直播映客
            </div>
            <div class="button-wrap">
                <CustomNuxtLink to="/" type="primary" size="small" round
                    >去付款</CustomNuxtLink
                >
            </div>
        </div>

        <div class="dashed-line"></div>

        <div>
            <NavbarGrid
                :dataSource="gridData"
                @onSelect="onSelect"
            ></NavbarGrid>
        </div>
    </div>
</template>

<script lang="ts" setup name="UserOverview">

import UserPhoto from '~/assets/imgs/user_photo.png';
import vipLevelImgUrl from '~/assets/imgs/kacn_vip_1.png';
import DemoImg from '~/assets/imgs/demo.jpg';

const userInfo = reactive({
    avatorUrl: "http://dummyimage.com/160x600",
    email: "g.usupto@akivtkbfss.lc",
    level: 6,
    order: {
        total: 85,
        waitPayment: 42,
        waitSend: 73,
        waitReceived: 30,
    },
});

const gridData = reactive([
    { title: "个人中心", icon: "vip_user_black", value: "index" },
    {
        title: "我的余额",
        icon: "vip_money_black",
        value: "balance",
    },
    { title: "优惠券", icon: "bar_coups_black", value: "coupon" },
    {
        title: "元宝中心",
        icon: "vip_gold_black",
        value: "ingotCenter",
    },
    // { title: "消息", icon: "vip_msg_black", value: 'toInformation', },
    { title: "安全退出", icon: "vip_exit_black", value: "logout" },
])

const onSelect = () => {
    console.log('onSelect')
}

const logout = () => {
    console.log('logout')
}

</script>

<style lang="scss" scoped>
.user-overview {
    width: 330px;
    .top {
        display: flex;
        background-image: url(@/assets/imgs/vip_user_bg.png);
        padding: 15px;
        .user-avator {
            background-color: $cfff;
            width: 60px;
            height: 60px;
            border-radius: 20px;
            margin-right: 20px;
            // overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .info {
            .email {
                font-size: 16px;
                font-weight: bold;
                color: $c333;
                cursor: pointer;
                &:hover {
                    color: $c3b8;
                }
            }
            img {
                width: 43px;
                height: 16px;
                margin-top: 5px;
            }
        }
    }
    .order {
        display: flex;
        justify-content: space-around;
        padding: 20px 0 10px 0;
        .order-item {
            text-align: center;
            cursor: pointer;
            transition: 1s;
            &:hover {
                span {
                    color: $c3b8 !important;
                }
            }
            &-count {
                font-size: 20px;
                font-weight: bold;
                color: $c333;
            }
            &-title {
                font-size: 12px;
                color: $c999;
            }
        }
    }

    .wait-order {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: $cf5f;
        margin: 10px 20px 16px;
        padding: 10px 15px;
        border-radius: $borderRadius;
        &-img {
            width: 40px;
            height: 40px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }
        &-title {
            line-height: 40px;
            flex: 1;
            padding: 0 10px;
            // .ellipsis();
        }
    }
}

.dashed-line {
    margin: 0 20px;
}
</style>

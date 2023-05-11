<template>
    <div class="wake-customer-service-system">
        <div>
            <div class="wake-main">
                <img class="img" src="~/assets/imgs/service500.png" alt="" />
                <div>
                    <div class="title">很抱歉，客服系统打开失败……</div>
                    <div class="sub-title">
                        咨询商品、订单等信息请添加微信/企业QQ来联系客服
                    </div>
                </div>
            </div>
            <div class="add-friend">
                <div class="item">
                    <div class="title">添加客服微信</div>
                    <div class="qr">
                        <img
                            class="qr-icon"
                            src="~/assets/imgs/wechat_icon.png"
                            alt=""
                        />
                        <img
                            class="qr-img"
                            src="~/assets/imgs/wechat_qr.png"
                            alt=""
                        />
                    </div>
                    <div class="text">使用微信扫一扫添加客服</div>
                </div>
                <div class="_divider">
                    <div class="_divider_text">or</div>
                </div>
                <div class="item">
                    <div class="title">添加客服企业QQ</div>
                    <div class="qr">
                        <img
                            class="qr-icon"
                            src="~/assets/imgs/qq_icon.png"
                            alt=""
                        />
                        <img
                            class="qr-img"
                            src="~/assets/imgs/qq_qr.png"
                            alt=""
                        />
                    </div>
                    <div class="text copy-wrap">
                        <div class="desc"><span>QQ号：</span>{{ qqCode }}</div>
                        <CustomButton
                            class="copy-button"
                            v-if="!isCopy"
                            type="primary"
                            size="small"
                            @click="onCopy"
                            >复制QQ</CustomButton
                        >
                        <CustomButton
                            class="copy-button"
                            v-else
                            type="success"
                            size="small"
                            @click="onCopy"
                            >复制成功</CustomButton
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            qqCode: "800088077",
            isCopy: false,
            timer: null,
        };
    },
    methods: {
        async onCopy() {
            const { qqCode } = this;
            try {
                await navigator.clipboard.writeText(qqCode);
                this.isCopy = true;
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    this.isCopy = false;
                }, 3000);
                console.log("Content copied to clipboard");
            } catch (err) {
                console.error("Failed to copy: ", err);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.wake-customer-service-system {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    .wake-main {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        .img {
            display: block;
            width: 150px;
            height: 150px;
        }
    }
    .title {
        font-size: 24px;
        line-height: 40px;
        margin-bottom: 10px;
    }

    .add-friend {
        display: flex;
        width: 800px;
        margin: 0 auto;
        background: #ffffff;
        box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.05);
        padding: 40px 30px;
        .item {
            text-align: center;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .title {
                margin-bottom: 40px;
            }
            .qr {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                width: 180px;
                height: 180px;
                background: #ffffff;
                border: 2px solid $cdee;
                &-img {
                    display: block;
                    width: 160px;
                    height: 160px;
                }
                &-icon {
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    top: -24px;
                }
            }
            .text {
                height: 36px;
                &.copy-wrap {
                    display: flex;
                }
                font-size: 16px;
                color: $c999;
                text-align: center;
                margin-top: 20px;
                .desc {
                    border: 1px solid $cdee;
                    line-height: 34px;
                    padding: 0 9px;
                    background: $cf5f;
                }
                .copy-button {
                    width: 80px;
                    padding: 0;
                    border-radius: 0;
                }
            }
        }
        ._divider {
            width: 1px;
            height: 320px;
            background: $cdee;
            display: flex;
            align-items: center;
            &_text {
                position: relative;
                left: -10px;
                height: 50px;
                line-height: 50px;
                width: 30px;
                color: $c999;
                font-size: 20px;
                background: $cfff;
            }
        }
    }
}
</style>

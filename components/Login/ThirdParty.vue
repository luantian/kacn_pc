<template>
    <div class="third-party">
        <div
            class="third-party-icon"
            v-for="(item, index) in otherLoginWays"
            :key="index"
            alt="第三方登录icon图标"
        ></div>
    </div>
</template>

<script lang="ts" setup>

const otherLoginWays = reactive([
    { type: "google" },
    { type: "apple" },
    { type: "tiktok" },
    { type: "wechat" },
    { type: "qq" },
]);

</script>

<style lang="scss" scoped>
.third-party {
    display: flex;
    justify-content: space-between;
    &-icon {
        width: 60px;
        height: 60px;
        background: $cfff;
        box-shadow: 7px 7px 25px 0px rgba(0, 0, 0, 0.05);
        border-radius: $borderRadius;
        border: 1px solid $cdee;
        background-size: 100% 100%;
        cursor: pointer;
        &:nth-of-type(1) {
            background-image: url(~/assets/imgs/icon-google.png);
            &:hover {
                background-image: url(~/assets/imgs/icon-google-active.png);
            }
        }
        &:nth-of-type(2) {
            background-image: url(~/assets/imgs/icon-apple.png);
            &:hover {
                background-image: url(~/assets/imgs/icon-apple-active.png);
            }
        }
        &:nth-of-type(3) {
            background-image: url(~/assets/imgs/icon-tiktok.png);
            &:hover {
                background-image: url(~/assets/imgs/icon-tiktok-active.png);
            }
        }
        &:nth-of-type(4) {
            background-image: url(~/assets/imgs/icon-wechat.png);
            &:hover {
                background-image: url(~/assets/imgs/icon-wechat-active.png);
            }
        }
        &:nth-of-type(5) {
            background-image: url(~/assets/imgs/icon-qq.png);
            &:hover {
                background-image: url(~/assets/imgs/icon-qq-active.png);
            }
        }
    }
}
</style>

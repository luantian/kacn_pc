<template>
    <div class="footer3">
        <Container class="container">
            <div class="top">
                <div
                    class="top-item"
                    v-for="(item, index) in dataSource"
                    :key="index"
                >
                    <CustomNuxtLink class="company-btn" :to="item.url">{{
                        item.title
                    }}</CustomNuxtLink>
                    <el-divider
                        direction="vertical"
                        v-if="dataSource.length !== index + 1"
                    ></el-divider>
                </div>
            </div>
            <div class="scenes">
                不同场景了解KA-CN，关注我们：
                <CustomNuxtLink
                    class="scenes-btn"
                    type="button"
                    :to="item.url"
                    round
                    plain
                    size="small"
                    :icon="item.icon"
                    v-for="(item, index) in friendLinks"
                    :key="index"
                >
                    {{ item.title }}</CustomNuxtLink
                >
            </div>
            <div class="records">
                © 2005-2065 KA-CN.com
                版权所有：沈阳市尚为科技有限公司，并保留所有权利。
                <img src="~assets/imgs/beian_20_20.png" alt="beian_20_20" />
                <CustomNuxtLink
                    :to="item.url"
                    v-for="(item, index) in records"
                    :key="index"
                >
                    {{ item.title }}</CustomNuxtLink
                >
            </div>

            <div class="designs">
                <CustomNuxtLink
                    :to="item.url"
                    v-for="(item, index) in designs"
                    :key="index"
                >
                    <img :src="item.imgUrl" alt="" />
                </CustomNuxtLink>
            </div>
        </Container>
    </div>
</template>

<script lang="ts" setup name="Footer3">
// import { mapActions, mapGetters } from "vuex";
// import { zh_init, zh_tran } from "@/utils/ReverseFont";
import { useLanguage } from "~/store/language";

import FeatureGoogle from "~/assets/imgs/feature_google.png";
import FeatureLicence from "~/assets/imgs/feature_licence.png";
import Feature360 from "~/assets/imgs/feature_360.png";
import FeatureProtect from "~/assets/imgs/feature_protect.png";
import FeaturePci from "~/assets/imgs/feature_pci.png";

const language = useLanguage();
// console.log("footer3_language", language);

const dataSource = reactive([
    { title: "公司简介", url: "/" },
    { title: "商务合作", url: "/cooperation" },
    { title: "联系我们", url: "/" },
]);

const friendLinks = reactive([
    { title: "今日头条", url: "/", icon: "foot_tt_gray" },
    { title: "抖音", url: "/", icon: "foot_dy_gray" },
    { title: "Facebook", url: "/", icon: "foot_dy_gray" },
    { title: "Tiktok", url: "/", icon: "foot_dy_gray" },
]);

const records = reactive([
    {
        title: "辽ICP备14003669号-6",
        url: "/",
    },
    {
        title: "辽公网安备 21010602000439号",
        url: "/",
    },
]);

const designs = reactive([
    {
        imgUrl: FeatureGoogle,
        url: "/",
    },
    {
        imgUrl: FeatureLicence,
        url: "/",
    },
    {
        imgUrl: Feature360,
        url: "/",
    },
    {
        imgUrl: FeatureProtect,
        url: "/",
    },
    {
        imgUrl: FeaturePci,
        url: "/",
    },
]);

// onMounted(() => {
//     zh_init();
//     zh_tran(languageType);
// })

/*
export default {
    name: "footer3",
    data() {
        return {
            languageType: this.$store.getters["consts/language"],
            dataSource: [
                { title: "公司简介", url: "/" },
                { title: "商务合作", url: "/cooperation" },
                { title: "联系我们", url: "/" },
            ],
            friendLinks: [
                { title: "今日头条", url: "/", icon: "foot_tt_gray" },
                { title: "抖音", url: "/", icon: "foot_dy_gray" },
                { title: "Facebook", url: "/", icon: "foot_dy_gray" },
                { title: "Tiktok", url: "/", icon: "foot_dy_gray" },
            ],
            records: [
                {
                    title: "辽ICP备14003669号-6",
                    url: "/",
                },
                {
                    title: "辽公网安备 21010602000439号",
                    url: "/",
                },
            ],
            designs: [
                {
                    imgUrl: require("~/assets/imgs/feature_google.png"),
                    url: "/",
                },
                {
                    imgUrl: require("~/assets/imgs/feature_licence.png"),
                    url: "/",
                },
                {
                    imgUrl: require("~/assets/imgs/feature_360.png"),
                    url: "/",
                },
                {
                    imgUrl: require("~/assets/imgs/feature_protect.png"),
                    url: "/",
                },
                {
                    imgUrl: require("~/assets/imgs/feature_pci.png"),
                    url: "/",
                },
            ],
        };
    },

    mounted() {
        zh_init();
        zh_tran(this.languageType);
    },
    methods: {
        ...mapActions("consts", ["setLanguage"]),
    }
};
*/
</script>

<style lang="scss" scoped>
.footer3 {
    background-color: $footer-grey-bg;
    padding: 30px 0;
    font-size: 14px;
    color: $c666;
    .container {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .top {
        display: flex;
    }

    .scenes {
        padding: 15px 0;
        &-btn {
            margin-right: 10px;
            color: $c666;
            border: 1px solid $c999;
            &:hover {
                color: $c3b8;
                border-color: $c3b8;
            }
        }
    }
    .records {
        img {
            vertical-align: middle;
        }
    }

    .designs {
        padding-top: 15px;
        a {
            margin-right: 30px;
        }
        img {
            height: 36px;
        }
    }

    .company-btn {
        color: $c666;
        &:hover {
            color: $c3b8;
        }
    }
}

::v-deep(.el-divider--vertical) {
    margin: 0 20px 0 15px;
    height: 10px;
    background-color: $c999;
}
</style>

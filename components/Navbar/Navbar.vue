<template>
    <div class="nav-bar">
        <div :class="{ fixed }">
            <Container>
                <div class="main">
                    <div class="logo">
                        <CustomNuxtLink to="/">
                            <img :src="Logo" alt="logo" />
                        </CustomNuxtLink>
                    </div>
                    <SearchBar
                        type="navbar"
                        :placeholder="viewSearch.placeholder"
                        @placeholder="open"
                        @search="open"
                    >
                        <template #signs>
                            <CustomNuxtLink
                                type="tag"
                                class="sign"
                                v-for="(sign, index) in signs"
                                :key="index"
                                round
                                size="mini"
                                :suffixIcon="sign.suffixIcon"
                                :to="`/search/${sign.title}`"
                                >{{ sign.title }}
                            </CustomNuxtLink>
                        </template>
                    </SearchBar>
                    <div class="currency">
                        <CurrencySelect @change="onCurrencyChange" />
                    </div>
                    <div class="select-language">
                        <CustomSelect
                            popper-class="popper-select-language"
                            round
                            size="large"
                            v-model="language"
                            placeholder=""
                            suffix-icon="ArrowDownBold"
                            @change="changeLanguage"
                        >
                            <el-option
                                v-for="item in languages"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </CustomSelect>
                    </div>
                    <div class="new-count" @click="goWishList">
                        <el-badge :value="12">
                            <span class="iconfont icon-menu_wish"></span>
                        </el-badge>
                    </div>
                    <div class="user-info">
                        <CustomPopover
                            width="330"
                            trigger="click"
                            :show-arrow="false"
                            popper-class="custom-popover"
                        >
                            <template #title>
                                <img
                                    v-if="isLogin"
                                    class="user-photo"
                                    :src="UserPhoto"
                                    alt="user_photo"
                                />
                                <span
                                    v-else
                                    class="iconfont icon-menu_user"
                                ></span>
                            </template>
                            <template #content>
                                <NavbarUserOverview
                                    v-if="isLogin"
                                ></NavbarUserOverview>
                                <div class="welcome" v-else>
                                    <img :src="WelcomeImg" alt="欢迎图片" />
                                    <h4>欢迎来到KA-CN</h4>
                                    <p>您还未登录，登录后即可体验更多功能</p>
                                    <CustomNuxtLinkGroup>
                                        <CustomNuxtLink
                                            to="/login"
                                            class="group-button"
                                            type="primary"
                                            size="small"
                                            >登录</CustomNuxtLink
                                        >
                                        <CustomNuxtLink
                                            to="/register"
                                            class="group-button"
                                            type="bare-primary"
                                            size="small"
                                            >注册</CustomNuxtLink
                                        >
                                    </CustomNuxtLinkGroup>
                                </div>
                            </template>
                        </CustomPopover>
                    </div>
                </div>
            </Container>
        </div>
        <div class="fixed-place" v-show="fixed"></div>
        <NavbarTab :dataSource="navbarTabs"></NavbarTab>
        <CustomDialog
            top="40px"
            width="800px"
            v-model="viewSearch.dialogVisible"
            header_hidden
            transparent
            :append-to-body="true"
        >
            <div>
                <SearchBar
                    :width="800"
                    placeholder="请输入充值的游戏名称"
                    @search="onSearch"
                    @change="onChange"
                />
                <div class="popular" v-show="viewSearch.popularVisible">
                    <div class="popular-title">热门搜索</div>
                    <div class="popular-content popular-search">
                        <CustomNuxtLink
                            class="popular-item"
                            type="tag"
                            v-for="(item, index) in viewData.popularSearchs"
                            :key="index"
                            round
                            :suffixIcon="item.suffixIcon"
                            :to="`/search/${item.keyword}`"
                        >
                            {{ item.keyword }}
                        </CustomNuxtLink>
                    </div>

                    <div class="popular-title">热销商品</div>
                    <ul class="popular-content popular-product">
                        <li
                            class="popular-item"
                            v-for="(item, index) in viewData.popularProducts"
                            :key="index"
                        >
                            <CustomNuxtLink to="/">
                                <Product :imgUrl="item.imgUrl">{{
                                    item.name
                                }}</Product>
                            </CustomNuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </CustomDialog>
    </div>
</template>

<script lang="ts" setup>
import Logo from "~/assets/imgs/KACN-logo.png";
import UserPhoto from "~/assets/imgs/user_photo.png";
import WelcomeImg from "~/assets/imgs/welcome.png";

import { INavbarTabData, IViewData, IViewSearch } from "~/service/Navbar/Interface";
import { languages } from "~/utils/consts";

const language = useCookie('lang');

interface IProps {
    fixed?: boolean;
}

withDefaults(defineProps<IProps>(), {
    fixed: false,
});

const visible = ref(false);

const popularSearchs = reactive([]);
const popularProducts = reactive([]);
const isLogin = ref(true);

const viewSearch: IViewSearch = reactive({
    keyword: "",
    dialogVisible: false,
    placeholder: "请输入充值的游戏名称",
    popularVisible: computed(() => viewSearch.keyword === ""),
});

const viewData: IViewData = reactive({
    popularSearchs: [],
    popularProducts: [],
});

const signs = reactive([
    { title: "苹果卡" },
    {
        title: "原神",
        suffixIcon: "HOT",
    },
    {
        title: "抖音",
        suffixIcon: "NEW",
    },
]);

const navbarTabs = reactive(<INavbarTabData[]>[
    {
        title: "KA-CN首页",
        type: "normal",
    },
    {
        title: "直播平台",
        products: [
            {
                sign: "HOT",
                url: "/",
                goodId: "D45A6Db7-cAd4-B97A-E79E-fAE2287f1C41",
                name: "声满应他东南新",
                imgUrl: "http://dummyimage.com/120x600",
                price: 206.96,
                productType: 0,
                fv: 112,
                EXPDate: 1681979608,
            },
        ],
        populars: [],
    },
    {
        title: "礼品卡",
        products: [],
        populars: [],
    },
]);

const open = () => {
    viewSearch.dialogVisible = true;
    viewSearch.keyword = "";
    // 热销产品
    if (viewData.popularSearchs.length === 0) {
        // console.log("popularSearchs", popularSearchs);
    }

    if (viewData.popularProducts.length === 0) {
        // console.log("popularProducts", popularProducts);
    }
};

const onSearch = (keyword: string) => {
    console.log("onSearch", keyword);
};

const onChange = (val: string) => {
    viewSearch.keyword = val;
};

const onCurrencyChange = (val: string) => {
    console.log("onCurrencyChange", val);
};

const changeLanguage = (val: string) => {
    console.log("changeLanguage", val);
    useCookie('lang').value = val;
};

const goWishList = () => {
    console.log("goWishList");
};
</script>

<style lang="scss" scoped>
.nav-bar {
    // height: 130px;
    background-color: $cfff;
    .fixed {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 999;
        background-color: $cfff;
    }
    .fixed-place {
        height: 130px;
    }
}

.main {
    display: flex;
    align-items: center;
    height: 130px;
    .logo {
        margin-right: 60px;
        img {
            width: 195px;
            height: 60px;
        }
    }

    .currency {
        margin: 0 10px 0 20px;
    }

    .select-language {
        width: 92px;
        height: 40px;
    }

    .new-count {
        margin: 0 24px;
    }

    .sign {
        font-size: 14px;
        margin-right: 5px;
        padding: 4px 10px;
        color: $c666;
    }

    .user-info {
        cursor: pointer;
    }

    .icon-menu_wish {
        font-size: 36px;
        cursor: pointer;
        &:hover {
            color: $cf23;
        }
    }

    .icon-menu_user {
        font-size: 32px;
    }

    .user-photo {
        width: 40px;
        height: 40px;
    }
}

.popular {
    background-color: $cfff;
    padding: 30px 30px 50px;
    border-radius: $borderRadius !important;
    margin: 10px 2px;
    &-title {
        font-size: 18px;
        font-weight: bold;
        color: $c333;
        margin-bottom: 20px;
    }
    &-content {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 0;
        margin-bottom: 40px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .popular-search {
        .popular-item {
            margin-bottom: 10px;
            margin-right: 10px;
            padding: 11px 15px;
            font-size: 16px;
        }
    }
    // .popular-product {
    //     .popular-item {
    //         flex: 0 0 (100%/7);
    //     }
    // }
}

.welcome {
    width: 300px;
    box-sizing: border-box;
    padding: 30px;
    text-align: center;
    img {
        width: 160px;
        height: 160px;
        margin-bottom: 10px;
    }
    h4 {
        font-size: 20px;
        font-weight: bold;
        color: $c333;
        margin-bottom: 10px;
    }
    p {
        font-size: 14px;
        color: $c666;
        margin-bottom: 20px;
    }
    .group-button {
        width: 100px;
    }
}

:deep(.el-badge__content) {
    top: 10px;
    right: 15px;
    background-color: $cf23;
}
:deep(.el-input__inner) {
    text-align: center;
}
</style>

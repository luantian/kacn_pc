<template>
    <div class="navbar-tabs">
        <Container class="tabs">
            <div class="tab" v-for="(item, index) in dataSource" :key="index">
                <div class="hover-animation"></div>
                <CustomNuxtLink
                    to="/"
                    v-if="item.type === 'normal'"
                    class="normal"
                >
                    {{ item.title }}
                </CustomNuxtLink>
                <CustomPopover
                    v-else
                    width="normal"
                    :show-arrow="false"
                    trigger="hover"
                    :teleported="true"
                    :offset="0"
                    popper-class="custom-popover"
                >
                    <template #title>{{ item.title }}</template>
                    <template #content>
                        <div class="content">
                            <div class="popular-wrap">
                                <div class="dt">Popular</div>
                                <div
                                    v-for="(it, idx) in item.populars"
                                    :key="idx"
                                >
                                    <CustomNuxtLink
                                        class="popular-item"
                                        :to="it.url"
                                    >
                                        <img
                                            class="popular-item-icon"
                                            :src="it.imgUrl"
                                        />
                                        <div class="popular-item-title">
                                            {{ it.name }}
                                        </div>
                                    </CustomNuxtLink>
                                </div>
                            </div>
                            <div class="product-wrap">
                                <div class="dt">ALL Product</div>
                                <div class="products">
                                    <div
                                        class="product-column"
                                        v-for="(_it, idx) in chunk(
                                            item.products,
                                            6
                                        )"
                                        :key="idx"
                                    >
                                        <div
                                            class="product-item"
                                            v-for="(__it, __idx) in _it"
                                            :key="__idx"
                                        >
                                            <CustomNuxtLink :to="__it.url">
                                                <span
                                                    class="product-item-title"
                                                >
                                                    {{ __it.name }}
                                                </span>
                                                <span
                                                    v-if="__it.sign"
                                                    :class="`product-sign-${__it.sign}`"
                                                    class="product-sign"
                                                >
                                                    {{ __it.sign }}
                                                </span>
                                            </CustomNuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </CustomPopover>
            </div>
        </Container>
    </div>
</template>

<script lang="ts" setup>
import { chunk } from "lodash";
import { INavbarTabData } from '../../service/Navbar/Interface';

interface IProps {
    dataSource: INavbarTabData[];
}
withDefaults(defineProps<IProps>(), {
    dataSource: () => [],
});

</script>

<!-- <script lang="tsx">
import { chunk } from "lodash";

export default defineComponent({
    name: "NavbarTabs",
    props: {
        dataSource: {
            type: Array,
            default: () => [],
        },
        type: {
            type: String,
            default: "",
        },
    },
    setup(props) {
        const { dataSource } = props;
        console.log("dataSource", dataSource);
        const slots = {
            title: () => <span>这个会渲染到h2中</span>,
            content: 'content'
        };
        const createPopular = (item: any) => {
            const populars = item.populars.map((it: any) => {
                return (
                    <div>
                        <CustomNuxtLink class="popular-item" to={it.url}>
                            <img
                                class="popular-item-icon"
                                src={it.imgUrl}
                            ></img>
                            <div class="popular-item-title">{it.name}</div>
                        </CustomNuxtLink>
                    </div>
                );
            });
            return (
                <div class="popular-wrap">
                    <div class="dt">Popular</div>
                    {populars}
                </div>
            );
        };

        const createProduct = (item: any) => {
            const data2D = chunk(item.products, 6);
            const products = data2D.map((it: any) => {
                return (
                    <div class="product-column">
                        {it.map((_it: any) => {
                            return (
                                <div class="product-item">
                                    <CustomNuxtLink to={_it.url}>
                                        <span class="product-item-title">
                                            {_it.name}
                                        </span>

                                        {_it.sign && (
                                            <span
                                                class={[
                                                    "product-sign-" + _it.sign,
                                                    "product-sign",
                                                ]}
                                            >
                                                {_it.sign}
                                            </span>
                                        )}
                                    </CustomNuxtLink>
                                </div>
                            );
                        })}
                    </div>
                );
            });

            return (
                <div class="product-wrap">
                    <div class="dt">ALL Product</div>
                    <div class="products">{products}</div>
                </div>
            );
        };

        const tabs = dataSource.map((item: any) => {
            const createContents = () => {
                if (item.type === "normal") {
                    return (
                        <CustomNuxtLink to="/" class="normal">
                            {item.title}
                        </CustomNuxtLink>
                    );
                }

                return (
                    <CustomPopover
                        trigger="hover"
                        popper-class="custom-popover"
                    >
                        {/* <div v-slot="title">title</div>
                        <div v-slot="content" class="content">
                            {createPopular(item)}
                            {createProduct(item)}
                        </div> */}
                    </CustomPopover>
                );
            };
            return (
                <div class="tab">
                    <div class="hover-animation"></div>
                    {createContents()}
                </div>
            );
        });

        return () => (
            <div class="navbar-tabs">
                <Container class="tabs">{tabs}</Container>
            </div>
        );
    },
});
</script> -->

<style lang="scss" scoped>
.navbar-tabs {
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
}
.tabs {
    display: flex;
    // align-items: center;
    line-height: 38px;
    .tab {
        margin-right: 40px;
        cursor: pointer;
        transition: 0.3s;
        font-size: 16px;
        .hover-animation {
            height: 2px;
            background-color: $c3b8;
            width: 0;
            transition: 0.3s;
        }
        &:hover {
            color: $c3b8;
            .hover-animation {
                width: 50px;
            }
        }

        .normal {
            display: block;
            padding: 10px 0;
            color: $c3b8;
            font-size: 16px;
        }
    }
}

.content {
    display: flex;
    padding: 10px 45px;
    .dt {
        font-size: 16px;
        font-weight: bold;
        color: $c333;
        margin-bottom: 10px;
    }
    .popular-wrap {
        width: 220px;
        box-sizing: border-box;
        color: $c666;
        .popular-item {
            line-height: 40px;
            margin-top: 20px;
            display: flex;
            .popular-item-title {
                display: block;
            }
            .popular-item-icon {
                display: block;
                width: 40px;
                height: 40px;
                margin-right: 10px;
                border-radius: 6px;
            }
        }
    }
    .product-wrap {
        // width: 400px;
        .products {
            display: flex;
            flex-wrap: wrap;
            .product-column {
                // flex: 1;
                // .ellipsis();
                // margin-right: 40px;
                .product-item {
                    &-title {
                        margin-right: 5px;
                    }
                    margin-top: 20px;
                    padding-right: 40px;
                    .product-sign {
                        font-size: 12px;
                        padding: 0 5px;
                        color: $cfff;
                        &-HOT {
                            background-color: $cf23;
                        }
                        &-NEW {
                            background-color: $c00b;
                        }
                    }
                }
            }
        }
    }
}
</style>

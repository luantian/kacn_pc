<template>
    <div class="category">
        <Affix>
            <div class="main">
                <div class="title">{{ title }}</div>
                <div class="content">
                    <a
                        v-for="(item, index) in dataSource"
                        class="custom-button"
                        :class="{ active: index === state.active }"
                        :key="index"
                        :idx="index"
                        :href="'#a' + item.cat_id"
                        >{{ item.cat_name }}</a
                    >
                </div>
            </div>
        </Affix>
    </div>
</template>

<script lang="ts" setup name="CategorySet">
import { throttle } from "lodash";

import { Category } from "~/service/Category/Category";
import { ICategoryTree } from "~/service/Category/Interface";

interface IProps {
    title?: string;
    dataSource: ICategoryTree[];
    isListenerScroll?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
    title: "全部分类",
    dataSource: () => [
        {
            cat_id: "test",
            cat_name: "测试名称",
            parent_id: "parent_test",
            bannerImgSrc: "",
            catImgSrc: "",
            children: [],
        },
    ],
    isListenerScroll: false,
});

interface IState {
    active: number;
}

const state = reactive<IState>({
    active: 0,
});

// onBeforeMount(() => {
//     props.isListenerScroll &&
//         window.addEventListener("scroll", throttle(category.handleScroll, 100));
// })

onMounted(() => {
    const oDomTitles: NodeListOf<HTMLElement> =
        document.querySelectorAll(".__screen-title");
    const category = new Category();
    props.isListenerScroll &&
        window.addEventListener(
            "scroll",
            throttle(() => {
                return category.handleScroll(oDomTitles, state.active);
            }, 100)
        );
});

/*
let oDomTitles = null;

export default {
    name: "Category",
    props: {
        title: {
            type: String,
            default: "全部分类",
        },
        dataSource: {
            type: Array,
            default: () => [],
        },
        isListenerScroll: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            active: 0,
        };
    },
    mounted() {
        this.isListenerScroll &&
            window.addEventListener("scroll", this.throttleFn());
    },
    beforeDestroy() {
        this.isListenerScroll &&
            window.removeEventListener("scroll", this.throttleFn());
    },
    methods: {
        handleScroll() {
            if (!oDomTitles) {
                oDomTitles = document.querySelectorAll(".__screen-title");
            }
            // console.log("oDomTitles", oDomTitles);
            const results = [];
            oDomTitles.forEach((item, index) => {
                if (this.elementIsVisibleInViewport(item)) {
                    results.push(index);
                }
            });
            if (
                this.getScrollTop() + this.getWindowHeight() ==
                this.getScrollHeight()
            ) {
                this.active = results[results.length - 1];
            } else {
                this.active = results[0];
            }
        },
        throttleFn() {
            return throttle(this.handleScroll, 100);
        },
        elementIsVisibleInViewport(el, partiallyVisible = false) {
            // 第一个参数是element  第二个参数是 是否部分可见也算可见
            // 设置为false 即有一部份不可见即不可见
            // 设置为true 即部分可见即算是可见
            const { top, left, bottom, right } = el.getBoundingClientRect();
            const { innerHeight, innerWidth } = window;
            return partiallyVisible
                ? ((top > 0 && top < innerHeight) ||
                      (bottom > 0 && bottom < innerHeight)) &&
                      ((left > 0 && left < innerWidth) ||
                          (right > 0 && right < innerWidth))
                : top >= 0 &&
                      left >= 0 &&
                      bottom <= innerHeight &&
                      right <= innerWidth;
        },
        getScrollTop() {
            let scrollTop = 0,
                bodyScrollTop = 0,
                documentScrollTop = 0;

            if (document.body) {
                bodyScrollTop = document.body.scrollTop;
            }

            if (document.documentElement) {
                documentScrollTop = document.documentElement.scrollTop;
            }

            scrollTop =
                bodyScrollTop - documentScrollTop > 0
                    ? bodyScrollTop
                    : documentScrollTop;

            return scrollTop;
        },

        getScrollHeight() {
            var scrollHeight = 0,
                bodyScrollHeight = 0,
                documentScrollHeight = 0;

            if (document.body) {
                bodyScrollHeight = document.body.scrollHeight;
            }

            if (document.documentElement) {
                documentScrollHeight = document.documentElement.scrollHeight;
            }

            scrollHeight =
                bodyScrollHeight - documentScrollHeight > 0
                    ? bodyScrollHeight
                    : documentScrollHeight;

            return scrollHeight;
        },
        getWindowHeight() {
            let windowHeight = 0;
            if (document.compatMode == "CSS1Compat") {
                windowHeight = document.documentElement.clientHeight;
            } else {
                windowHeight = document.body.clientHeight;
            }
            return windowHeight;
        },
    },
};

*/
</script>

<style lang="scss" scoped>
$h: 40px;

.main {
    display: flex;
    color: $c333;
    font-size: 16px;
    border: 1px solid #dee3eb;
    background: $cfff;
    .title {
        height: $h;
        line-height: $h;
        margin: 6px;
        min-width: 100px;
        font-weight: bold;
        text-align: center;
        padding: 15px 0;
    }
    .content {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        padding: 20px 10px;
    }
}

.custom-button {
    display: block;
    width: 100px;
    height: $h;
    line-height: $h;
    color: $c333;
    margin: 6px;
    text-align: center;
    border-radius: 2px;
    background-color: #f5f5f5;
    cursor: pointer;
    text-decoration: none;
    transition: 0.1s;
    &.active,
    &:hover {
        color: $cfff;
        background-color: #3b8cfe;
    }
}

:deep(.el-link--inner) {
    color: $c333;
}

:deep(.el-link.el-link--default) {
    color: $cfff;
}

:deep(.el-button) {
    margin-left: 10px;
    margin-top: 10px;
    width: 100px;
    padding-left: 0;
    padding-right: 0;
    text-align: center;
}
</style>

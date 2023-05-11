<template>
    <div class="news-slider-bar">
        <div class="header">{{ dataSource.title }}</div>
        <CustomCollapse v-model="state.activeName" accordion>
            <CustomCollapseItem
                v-for="(item, index) in dataSource.children"
                :key="index"
                :title="item.title"
                :name="item.title"
            >
                <template v-if="item.children">
                    <div
                        class="it"
                        v-for="(it, idx) in item.children"
                        :key="idx"
                    >
                        {{ it.title }}
                    </div>
                </template>
            </CustomCollapseItem>
        </CustomCollapse>
    </div>
</template>

<script lang="ts" setup name="NewsSliderBar">
const props = defineProps({
    dataSource: {
        type: Object,
        default: () => {
            children: [];
        },
    },
});

const state = reactive({
    activeName: "1",
})

</script>

<style lang="scss" scoped>
.news-slider-bar {
    background: url(~/assets/imgs/news_slider_bar_bg.png) no-repeat;
    background-size: 100%;
}

.header {
    height: 70px;
    line-height: 70px;
    text-indent: 20px;
    font-size: 18px;
    font-weight: bold;
}

.it {
    padding-left: 30px;
    height: 40px;
    line-height: 40px;
    color: #3d4a5e;
    cursor: pointer;
    &:hover {
        background-color: $cf5f;
    }
}

:deep(.el-collapse) {
    border: 1px solid #e8e8e8;
    border-radius: 0 0 15px 15px;
    overflow: hidden;
}

:deep(.el-collapse-item__header) {
    position: relative;
    text-indent: 30px;
    color: #030303;
    font-size: 14px;
}

:deep(.el-collapse-item__content) {
    padding-bottom: 0;
}

:deep(.el-collapse-item__header::before) {
    content: "";
    position: absolute;
    top: 16px;
    left: 0;
    display: block;
    width: 2px;
    height: 16px;
    background-color: $c3b8;
}

:deep(.el-collapse-item__arrow) {
    display: block;
    position: absolute;
    right: 16px;
    top: 18px;
    width: 14px;
    height: 14px;
    margin: 0;
    background: url("~/assets/imgs/down_black.svg") no-repeat;
    background-position: center center;
    transform: rotateZ(0);
    > * {
        display: none;
    }
}

:deep(.el-collapse-item__arrow.is-active) {
    transform: rotate(180deg);
}

:deep(.el-icon-arrow-right:before) {
    content: "";
}
</style>

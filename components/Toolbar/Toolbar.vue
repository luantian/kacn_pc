<template>
    <div class="toolbar">
        <img class="toolbar-img" src="~/assets/imgs/bar_logo.png" alt="bar_logo">
        <div class="main">
            <div class="toolbar-item" @click="onClick(item)" v-for="(item, index) in dataSource" :key="index">
                <span class="iconfont" :class="`icon-${item.icon}`"></span>
                <div class="title">{{ item.title }}</div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Toolbar',
    data() {
        return {
            dataSource: [
                {title: '客服', icon: 'kuaisudaohang_kefu'},
                {title: '我的', icon: 'bar_user_black'},
                {title: '优惠卷', icon: 'bar_coups_black'},
                {title: '活动', icon: 'bar_activity_black'},
                {title: '微信', icon: 'bar_wx_black'},
                {title: 'APP', icon: 'bar_app_black'},
                {title: '顶部', icon: 'bar_back_black', type: 'toTop'},
            ]
        }
    },
    mounted() {

    },
    methods: {
        onClick(item) {
            switch (item.type) {
                case 'toTop':
                    this.scrollToTop();
                    break;
            }
        },
        scrollToTop() {
            document.documentElement.scrollTop = 0
        }
    },
}

</script>

<style lang="scss" scoped>
.toolbar {
    position: fixed;
    z-index: 999;
    right: 20px;
    bottom: 100px;
    width: 60px;
    text-align: center;
    font-size: 14px;

    .main {
        background: $cfff;
        overflow: hidden;
        box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
        border-radius: 15px;
    }

    &-img {
        display: block;
        width: 60px;
        height: 60px;
    }

    &-item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 60px;
        cursor: pointer;
        transition: .1s;

        &:hover {
            background: $c3b8;
            color: $cfff;
        }

        .line {
            position: absolute;
            width: 40px;
            height: 1px;
            bottom: 0;
            margin-top: 10px;
            background: linear-gradient(90deg, rgba(222, 227, 235, 0.3) 0%, #DEE3EB 50%, rgba(222, 227, 235, 0.3) 100%);
        }
    }
}
</style>

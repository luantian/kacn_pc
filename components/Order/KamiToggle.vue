<template>
    <div class="kami-toggle">
        <div class="main" :style="{ height: height + 'px' }">
            <slot></slot>
        </div>
        <div v-if="count > 2" class="visible-wrap" @click="onToggle">
            <div>共{{ count }}张卡密，点击展开</div>
            <div
                class="iconfont icon-cooper_bottom"
                :class="{ rotate: state.isOpen }"
            ></div>
        </div>
    </div>
</template>

<script lang="ts" setup name="OrderKamiToggle">
interface IProps {
    count: number;
}

const props = withDefaults(defineProps<IProps>(), {
    count: 0,
});

const state = reactive({
    isOpen: false,
});

const height = computed(() => {
    let rowCount: number = Math.ceil(props.count / 2);
    let lineHeight: number = 160;
    let h: number = lineHeight + 10;
    if (state.isOpen) {
        h = rowCount * lineHeight + 10;
    }
    return h;
});

const onToggle = () => {
    state.isOpen = !state.isOpen;
}

/*
export default {
    name: "KamiToggle",
    props: {
        count: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            isOpen: false,
        };
    },
    computed: {
        height() {
            let rowCount = Math.ceil(this.count / 2)
            let lineHeight = 160
            let h = lineHeight + 10;
            if (this.isOpen) {
                h = rowCount * lineHeight + 10;
            }
            return h;
        }
    },
    methods: {
        onToggle() {
            this.isOpen = !this.isOpen;
        }
    }
};
*/
</script>

<style lang="scss" scoped>
.main {
    transition: 0.3s;
    overflow: hidden;
}
.visible-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    background-color: $cf5f;
    font-size: 12px;
    margin-bottom: 20px;
    color: $c333;
    cursor: pointer;
}
.icon-cooper_bottom {
    font-size: 12px;
    transform: scale(0.5) rotateZ(0);
    transition: 0.3s;
    display: block;
}

.rotate {
    transform: scale(0.5) rotateZ(180deg);
}
</style>

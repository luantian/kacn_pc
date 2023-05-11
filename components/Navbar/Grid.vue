<template>
    <div class="grid">
        <div class="grid-row">
            <div class="grid-item" @click="onClick(item)" v-for="(item, index) in dataSource" :key="index">
                <span
                    class="grid-icon"
                    :class="`iconfont icon-${ item.icon }`"
                ></span>
                <div class="grid-title">{{ item.title }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="Grid">

const emit = defineEmits(["onSelect"])

interface IGridItem {
    title: string;
    icon: string;
    value: string;
}

interface IProps {
    dataSource: IGridItem[]
}

const props = withDefaults(defineProps<IProps>(), {
    dataSource: () => []
})

const onClick = (item: IGridItem) => {
    console.log('item', item)
    emit('onSelect')
}

</script>

<style lang="scss" scoped>
.grid-row {
    display: flex;
    flex-wrap: wrap;
}

.grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 26px;
    margin-left: 6px;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
        color: $c3b8;
    }
    .grid-title {
        padding: 10px 0;
    }
    .grid-icon {
        font-size: 26px;
    }
}
</style>

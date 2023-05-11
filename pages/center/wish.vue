<template>
    <CenterWrap>
        <div class="title-wrap">
            <div class="title">我的心愿单</div>
            <div class="opera-buttons">
                <el-checkbox
                    v-show="state.visibleOperaButton"
                    v-model="state.checkedAll"
                    label="全选"
                    @change="handleCheckAllChange"
                />
                <CustomButton
                    class="delete-button"
                    link
                    v-show="state.visibleOperaButton"
                    @click="onBatchDelete"
                >
                    <span class="iconfont icon-del_gray"></span>
                    删除
                </CustomButton>
                <CustomButton
                    class="batch-button"
                    type="primary"
                    round
                    @click="onChangeVisible"
                >
                    {{ state.visibleOperaButton ? "取消管理" : "批量操作" }}
                </CustomButton>
            </div>
        </div>
        <div class="contents">
            <GoodCard
                class="content-item"
                v-for="(item, index) in state.dataSource"
                onOff
                :onOffChecked="state.visibleOperaButton"
                :checked="state.checkedList.includes(item.goodId)"
                :key="index"
                :dataSource="item"
                @click="onSelect(item)"
                @delete="onDelete(item)"
            ></GoodCard>
        </div>
    </CenterWrap>
    <CustomDialogConfirm
        width="380px"
        v-model="state.visible"
        cancelText="取消"
        confirmText="确认"
        @cancel="onCancel"
        @confirm="onConfrim"
    >
        <template #text>
            <div class="dialog-text">确认取消心愿商品吗？</div>
        </template>
    </CustomDialogConfirm>
</template>

<script lang="ts" setup name="WishPage">
import { IGood } from "~/service/Good/Interface";
import { pullAt, indexOf } from "lodash";
import { CheckboxValueType } from "element-plus/es/components/checkbox/src/checkbox";

definePageMeta({
    title: "心愿单",
});

interface IState {
    dataSource: IGood[];
    checkedAll: boolean;
    checkedList: string[];
    visibleOperaButton: boolean;
    visible: boolean;
}

const state = reactive(<IState>{
    dataSource: [
        {
            name: "已间她车打叫",
            imgUrl: "http://dummyimage.com/728x90",
            price: 954.95,
            productType: 0,
            fv: 144,
            EXPDate: 1683688712,
            goodId: "f6E4a85e-4DeB-9EEe-E770-6f8b192eDC13",
        },
        {
            name: "已间她车打叫",
            imgUrl: "http://dummyimage.com/728x90",
            price: 954.95,
            productType: 0,
            fv: 144,
            EXPDate: 1683688712,
            goodId: "f6E4a85e-4DeB-9EEe-E770-6f8b192eDC234",
        },
    ],
    checkedAll: false, // el-checkbox 是否选中
    checkedList: [], // 选中商品id的列表
    visibleOperaButton: false, //
    visible: false,
});

const onChangeVisible = () => {
    state.visibleOperaButton = !state.visibleOperaButton;
    state.checkedList = [];
};

const onSelect = (item: IGood) => {
    if (state.visibleOperaButton) {
        const index: number = indexOf(state.checkedList, item.goodId);
        if (index >= 0) {
            pullAt(state.checkedList, index);
        } else {
            state.checkedList.push(item.goodId);
        }
    }
    if (state.checkedList.length !== state.dataSource.length) {
        state.checkedAll = false;
    } else {
        state.checkedAll = true;
    }
};

const onDelete = (item: IGood) => {
    console.log("onDelete", item);
    state.visible = true;
};

const onBatchDelete = () => {
    console.log("删除数组", state.checkedList);
    state.visible = true;
};

const handleCheckAllChange = (val: CheckboxValueType): void => {
    const result = state.dataSource.map((item: IGood) => item.goodId);
    state.checkedList = val ? result : [];
};

const onCancel = () => {
    state.visible = false;
};

const onConfrim = () => {
    state.visible = false;
};
</script>

<style lang="scss" scoped>
.contents {
    display: flex;
    flex-wrap: wrap;
    .content-item {
        margin-right: 30px;
        margin-bottom: 30px;
        &:nth-of-type(4n) {
            margin-right: 0;
        }
    }
}

.title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .title {
        font-weight: 700;
        font-size: 20px;
    }

    .opera-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .delete-button {
        margin: 0 25px;
        .iconfont {
            margin-right: 6px;
        }
    }
    .batch-button {
        width: 120px;
    }
}

:deep(.el-checkbox) {
    &:hover {
        color: $c3b8;
    }
}
</style>

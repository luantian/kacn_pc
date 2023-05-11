<template>
    <CenterWrap>
        <div class="title-wrap">
            <div class="title">元宝中心</div>
        </div>
        <div class="my-gold-wrap">
            <div class="my-gold">
                <div class="label">我的元宝：</div>
                <div class="value">12345</div>
            </div>
            <div>
                <CustomButton class="opera-button" type="bare-primary" round
                    >如何获得</CustomButton
                >
                <CustomButton class="opera-button" type="primary" round
                    >口令兑换</CustomButton
                >
            </div>
        </div>
        <div class="gold-details">
            <div class="title">元宝明细</div>
            <el-table
                :data="tableData"
                header-row-class-name="header-row"
                row-class-name="body-row"
            >
                <el-table-column prop="date" label="操作时间" >
                    <template #default="scope">
                        <Time>{{ scope.row.date }}</Time>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="收入/支出">
                    <template #default="scope">
                        <div :class="{ income: scope.row.name }">{{ scope.row.name }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="remark" label="备注" />
            </el-table>
        </div>
    </CenterWrap>
    <!-- 兑换优惠券 -->
    <!-- <CustomDialog v-model="state.visible" width="380px">

    </CustomDialog> -->
</template>

<script lang="ts" setup name="GoldPage">
definePageMeta({
    title: "元宝中心",
});

const tableData = [
    {
        date: 123123123,
        name: "Tom",
        remark: "No. 189, Grove St, Los Angeles",
    },
    {
        date: 123123123,
        name: "Tom",
        remark: "No. 189, Grove St, Los Angeles",
    },
    {
        date: 123123123,
        name: "Tom",
        remark: "No. 189, Grove St, Los Angeles",
    },
    {
        date: 123123123,
        name: "Tom",
        remark: "No. 189, Grove St, Los Angeles",
    },
    {
        date: 123123123,
        name: "Tom",
        remark: "No. 189, Grove St, Los Angeles",
    },
    {
        date: 123123123,
        name: "Tom",
        remark: "No. 189, Grove St, Los Angeles",
    },
    {
        date: 123123123,
        name: "Tom",
        remark: "No. 189, Grove St, Los Angeles",
    },
    {
        date: 123123123,
        name: "Tom",
        remark: "No. 189, Grove St, Los Angeles",
    },
];
</script>

<style lang="scss" scoped>
.title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .title {
        font-weight: 700;
        font-size: 20px;
    }
}

.my-gold-wrap {
    display: flex;
    padding: 20px 30px;
    background-color: $cf5f;
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    .my-gold {
        display: flex;
        align-items: center;
        .label {
            font-size: 18px;
        }
        .value {
            font-size: 30px;
            font-weight: 700;
            color: $cf23;
        }
    }
}

.opera-button {
    width: 120px;
}

.gold-details {
    margin-top: 20px;
    border-radius: 10px;
    border: 1px solid $cdee;
    padding: 20px;
    .title {
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        margin-bottom: 20px;
    }
}

.income {
    color: $cf23;
}

:deep(.el-table__header-wrapper) {
    border-radius: 6px;
}

:deep(.el-table th.el-table__cell) {
    background: transparent;
}

:deep(.header-row) {
    height: 50px;
    background-color: $cf5f;
    border-radius: 6px;
}

:deep(.header-row .el-table__cell) {
    color: $c333;
    font-weight: normal;
}

:deep(.body-row) {
    height: 50px;
}

:deep(.body-row .el-table__cell) {
    height: 50px;
    font-weight: normal !important;
}

</style>

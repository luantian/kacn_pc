<template>
    <CenterWrap title="银行卡">
        <el-table
            :data="tableData"
            header-row-class-name="header-row"
            row-class-name="body-row"
        >
            <el-table-column prop="cardId" label="卡号"></el-table-column>
            <el-table-column prop="status" label="状态">
                <template #default="scope">
                    {{ scope.row.status ? '已认证' : '未认证' }}
                </template>
            </el-table-column>
            <el-table-column prop="status" label="操作">
                <template #default="scope">
                    <CustomButton v-if="!scope.row.status" type="primary" round>去认证</CustomButton>
                    <div v-else></div>
                </template>
            </el-table-column>
        </el-table>
    </CenterWrap>
</template>

<script lang="ts" setup name="CenterBanks">
definePageMeta({
    title: "银行卡",
});

const tableData = [
    {
        cardId: "123123123123123",
        status: 1,
    },
    {
        cardId: "123123123123123",
        status: 0,
    },
    {
        cardId: "123123123123123",
        status: 0,
    },
];
</script>

<style lang="scss" scoped>
:deep(.el-table__header-wrapper) {
    border-radius: 6px;
}

:deep(.el-table th.el-table__cell) {
    background: transparent;
}

:deep(.header-row) {
    height: 50px;
    background-color: $cf5f;
}

:deep(.header-row .el-table__cell) {
    color: $c333;
    font-weight: normal;
    background-color: transparent;
}

:deep(.body-row) {
    height: 50px;
}
</style>

<template>
    <CenterWrap title="号箱管理">
        <el-table
            :data="tableData"
            header-row-class-name="header-row"
            row-class-name="body-row"
        >
            <el-table-column prop="cardId" label="商品名称"></el-table-column>
            <el-table-column prop="account" label="账号"></el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <CustomButton class="btn" type="primary" link
                        >再来一单</CustomButton
                    >
                    <CustomButton class="btn" link>删除</CustomButton>
                </template>
            </el-table-column>
        </el-table>
        <CustomPaginationRight
            class="pagination"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="state.pagination.page"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="state.pagination.limit"
            layout="total, sizes, prev, pager, next"
            :total="state.pagination.total"
            background
        ></CustomPaginationRight>
    </CenterWrap>
</template>

<script lang="ts" setup name="NumberBox">

definePageMeta({
    title: "号箱管理",
});

const state = reactive({
    pagination: {
        limit: 10,
        page: 1,
        total: 100,
    },
})

const tableData = [
    {
        cardId: "123123123123123",
        account: "测试1234",
    },
    {
        cardId: "123123123123123",
        account: "测试1234",
    },
    {
        cardId: "123123123123123",
        account: "测试1234",
    },
];

const handleSizeChange = (val: number) => {
    console.log('size', val)
}

const handleCurrentChange = (val: number) => {
    console.log('current', val)
    state.pagination.page = val;
}

</script>

<style lang="scss" scoped>
.btn {
    color: $c3b8;
}

.pagination {
    margin-top: 20px;
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

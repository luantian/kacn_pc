<template>
    <div :class="className">
        <el-alert :title="hintTitle" type="success" :closable="closable" show-icon>
            <!-- <slot name="title">
            描述
        </slot> -->
        </el-alert>
    </div>

</template>
<script>
export default {
    name: "Alert",
    props: {
        className: {
            type: String,
            default: "success"
        },
        hintTitle: {
            type: String,
        },
        closable: {
            type: Boolean,
            default: true
        }

    },
}
</script>
<style lang="scss" scoped>
.info {
    ::v-deep(.el-alert) {
        border: 1px solid #96C1FE !important;
    }

    ::v-deep(.is-light) {
        background-color: #F0F6FF !important;
    }

    ::v-deep(.el-alert__icon) {
        width: 14px;
        height: 14px;
        background: url(~assets/imgs/icon/tips_bg_wran_blue.svg) no-repeat;
        background-size: 14px 14px;
        margin-left: 20px;
    }
}

.success {
    ::v-deep(.el-alert) {
        border: 1px solid #A2DF83 !important;
    }

    ::v-deep(.is-light) {
        background-color: #F2FBED !important;
    }

    ::v-deep(.el-alert__icon) {
        width: 14px;
        height: 14px;
        background: url(~assets/imgs/icon/tips_bg_success_green.svg) no-repeat;
        background-size: 14px 14px;
        margin-left: 20px;
    }
}
::v-deep(.el-alert){
    padding: 0;
}

::v-deep(.el-alert__content) {
    padding: 7px 10px;
}

::v-deep(.el-alert__title) {
    font-size: 14px;
    color: $c333 !important;
}

::v-deep(.el-alert__icon::before) {
    display: none;
}
::v-deep(.el-alert.is-light .el-alert__closebtn){
    color: #999;
}
::v-deep(.el-alert.is-light .el-alert__closebtn:hover){
    color: #333;
}
</style>
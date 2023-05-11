// export enum OrderStatus {
//     AwaitPayment = "AwaitPayment", // 待付款
//     AwaitSendGoods = "AwaitSendGoods", // 待发货
//     AwaitSendGoodsTimeout = "AwaitSendGoodsTimeout", // 待发货-超时
//     AwaitReceipt = "AwaitReceipt", // 待收货
//     Completed = "Completed", // 已完成
//     Refund = "Refund", // 退款/售后-申请中
//     RefundApproved = "RefundApproved", // 退款/售后-处理完成 已退款
//     RefundCanceled = "RefundCanceled", // 退款/售后-售后取消
//     Canceled = "Canceled", // 已取消
// }

export enum OrderStatus {
    All,
    AwaitPayment, // 待付款
    AwaitSendGoods, // 待发货
    AwaitSendGoodsTimeout, // 待发货-超时
    AwaitReceipt, // 待收货
    Completed, // 已完成
    Refund, // 退款/售后-申请中
    RefundApproved, // 退款/售后-处理完成 已退款
    RefundCanceled, // 退款/售后-售后取消
    Canceled, // 已取消
}

export enum GoodType {
    Recharge = 'Recharge', // 充值
    Kami = 'Kami', // 卡密
}

export enum BuyWay {
    Direct = 'Direct', // 直充
    Substitute = 'Substitute', // 代充
}

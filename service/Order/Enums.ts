/*
export const AwaitPayment = "AwaitPayment"; // 待付款
export const AwaitSendGoods = "AwaitSendGoods"; // 待发货
export const AwaitSendGoodsTimeout = "AwaitSendGoodsTimeout"; // 待发货-超时
export const AwaitReceipt = "AwaitReceipt"; // 待收货
export const Completed = "Completed"; // 已完成
export const Refund = "Refund"; // 退款/售后-申请中
export const RefundApproved = "RefundApproved"; // 退款/售后-处理完成 已退款
export const RefundCanceled = "RefundCanceled"; // 退款/售后-售后取消
export const Canceled = "Canceled"; // 已取消
*/

export enum OrderStatus {
    All,
    AwaitPayment,
    AwaitSendGoods,
    AwaitSendGoodsTimeout,
    AwaitReceipt,
    Completed,
    Refund,
    RefundApproved,
    RefundCanceled,
    Canceled
}


export enum OrderOperaFnName {
    cancelOrder = "取消订单",
    toPay = '去支付',
    payAgain = '再来一单',
    applyAfterSale = '申请售后',
    toComment = '去评价',
    toCommentDesc = '评价详情',
    cancelAfterSale = '取消申请',
    contactService = '联系客服',
    confirmReceiptGoods = '确认收货',
    取消订单 = "cancelOrder",
    去支付 = "toPay",
    再来一单 = "payAgain",
    申请售后 = "applyAfterSale",
    去评价 = "toComment",
    评价详情 = "toCommentDesc",
    取消申请 = "cancelAfterSale",
    联系客服 = "contactService",
    确认收货 = "confirmReceiptGoods",
};
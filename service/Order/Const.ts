import { IOrderOperaButton, IOrderTitle } from "./Interface";
import { OrderOperaFnName } from "./Enums";

export const OrderButtonTypes: IOrderOperaButton[][] = [
    [],
    [
        { label: OrderOperaFnName.cancelOrder, type: undefined },
        { label: OrderOperaFnName.toPay, type: "primary", listType: "primary" },
    ],
    [
        { label: OrderOperaFnName.contactService, type: undefined },
        { label: OrderOperaFnName.applyAfterSale, type: undefined },
        { label: OrderOperaFnName.payAgain, type: "primary", listType: undefined },
    ],
    [
        { label: OrderOperaFnName.applyAfterSale, type: undefined },
        { label: OrderOperaFnName.payAgain, type: "primary", listType: undefined },
    ],
    [
        { label: OrderOperaFnName.applyAfterSale, type: undefined },
        { label: OrderOperaFnName.payAgain, type: "bare-primary" },
        { label: OrderOperaFnName.confirmReceiptGoods, type: "primary", listType: "bare-primary" },
    ],
    [
        { label: OrderOperaFnName.applyAfterSale, type: undefined },
        { label: OrderOperaFnName.toComment, type: undefined },
        { label: OrderOperaFnName.payAgain, type: "primary", listType: undefined },
    ],
    [
        { label: OrderOperaFnName.cancelAfterSale, type: undefined },
        { label: OrderOperaFnName.contactService, type: "primary", listType: undefined },
    ],
    [
        // { label: "取消申请", type: undefined },
        { label: OrderOperaFnName.contactService, type: "primary", listType: undefined },
    ],
    [{ label: OrderOperaFnName.payAgain, type: "primary" }],
    [{ label: OrderOperaFnName.payAgain, type: "primary", listType: undefined }],
];



export const OrderTitles: IOrderTitle[] = [
    {
        value: "",
        color: "",
    },
    {
        value: "待付款",
        color: "#EE0000",
    },
    {
        value: "待发货",
        color: "#333333",
    },
    {
        value: "待发货",
        color: "#333333",
    },
    {
        value: "待收货",
        color: "#333333",
    },
    {
        value: "已完成",
        color: "#333333",
    },
    {
        value: "售后处理中",
        color: "#EE0000",
    },
    {
        value: "售后处理完成",
        color: "EE0000",
    },
    {
        value: "售后取消",
        color: "EE0000",
    },
    {
        value: "已取消",
        color: "#999999",
    },
];

// 订单状态描述管理
export const OrderDescs = [
    (): string => '',
    (price = "xx"): string => `应付款金额${price}，需24小时内完成付款`,
    (): string => "付款成功，金牌客服正在为您极速配货",
    (): string => "付款成功，请联系客服确认交易状态",
    (): string => "商品已发货！请确认并收货，如有疑问请联系客服",
    (): string => "感谢您对KA-CN的信任，期待再次光临",
    (): string => "售后申请已提交，需联系客服处理结果，谢谢！",
    (): string => "售后申请已完成，订单已退款",
    (): string => "售后申请已取消",
    (text = "xxxxx"): string => `取消原因：${text}`,
];

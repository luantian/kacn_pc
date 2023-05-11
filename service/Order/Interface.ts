import { IGood } from "../Good/Interface";
import { OrderOperaFnName } from "./Enums";

export interface IOrder {
    goods: IGood[];
    orderId: string;
    time: number;
    commission: number;
    status: number;
    buyWay: number;
    payWay: number;
    payTime: number;
    cards: IGood[];
    remark: string;
    totalPrice: number;
    serviceChargePrice: number;
    vip_level: number;
    balance: number;
    coupon: number;
    ingot: number;
    shouldPayment: number;
    aboutInfo: {
        serviceName: string;
        account: string;
        userRealName: string;
        fv: number;
        purchasingRemark: string;
        refundPrice: number;
        problemDesc: string;
        contactWay: string;
        reason: string;
    };
}

export interface IOrderOperaButton {
    label: OrderOperaFnName;
    type?: string | undefined;
    listType?: string | undefined;
}

export interface IOrderTitle {
    value: string,
    color: string,
}

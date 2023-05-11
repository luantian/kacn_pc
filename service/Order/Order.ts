import { OrderStatus } from "./Enums";
import { ImplOrder } from "./ImplOrder";
import { IOrder } from "./Interface";

export class Order implements ImplOrder {
    constructor() {}

    async queryList(status: OrderStatus) {
        return await useHttp(useApi().order.list, { status });
    }

    async queryItemById(id: string) {
        console.log("根据id查询订单信息");
        return await useHttp(useApi().order.detail, { orderId: id });
    }

    async pay(order: IOrder) {
        console.log('支付 订单');
    }
}


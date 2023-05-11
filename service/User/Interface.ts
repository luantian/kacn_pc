import { ECouponStatus, ECouponType } from "./Enums";

export interface ICoupon {
    id: string; // 优惠卷id
    name: string; // 优惠卷名称
    type: ECouponType; // 优惠卷类型
    status: ECouponStatus; // 优惠卷装填
    price?: number; // 优惠金额
    currency?: string; // 货币类型
    condition: string; // 使用条件
    discount?: string; // 优惠折扣
    EXPDate: number; // 优惠卷有效期
    receiveData: number; // 领取时间
    manual: string; // 使用说明
}

/**
 * 优惠卷 类型有哪些 折扣的，满减的
 * 优惠卷使用范围
 */

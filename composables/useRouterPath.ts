const LoginBase = "/login";
const RegisterBase = "/register";
const NewsBase = "/news";
const OrderBase = "/order";
const CategoryBase = "/category";
const SearchBase = "/search";

/*
export const useRouterPath = () => ({
    index: {
        path: () => "/",
        name: "首页",
    },
    login: {
        index: {
            path: () => LoginBase,
            name: "登录",
        },
    },
    register: {
        index: {
            path: () => `${RegisterBase}`,
            name: "注册",
        },
        bindKacn: {
            path: () => `${RegisterBase}/bindKacn`,
            name: "绑定kacn",
        },
        bindPhone: {
            path: () => `${RegisterBase}/bindPhone`,
            name: "绑定手机",
        },
        reset: {
            path: () => `${RegisterBase}/reset`,
            name: "找回密码",
        },
    },
    order: {
        index: {
            path: (status: number) => `${OrderBase}/${status}`,
            name: "我的订单",
            paramsCount: 1
        },
        detail: {
            path: (id: string) => `${OrderBase}/detail/${id}`,
            name: "订单详情",
            paramsCount: 1
        },
    },
    news: {
        index: {
            path: (page: number) => `${NewsBase}/${page}`,
            name: "新闻列表",
            paramsCount: 1
        },
        detail: {
            path: (id: string) => `${NewsBase}/detail/${id}`,
            name: "新闻详情",
            paramsCount: 1
        },
    },
    category: {
        index: {
            path: () => `${CategoryBase}`,
            name: "分类",
        },
    },
    search: {
        index: {
            path: (keyword: string) => `${SearchBase}/${keyword}`,
            name: "搜索结果",
            paramsCount: 1
        },
    },
});

*/


export const useRouterPath = () => ([
    {
        path: () => "/",
        name: "首页",
    },
    {
        path: "/login",
    }
])

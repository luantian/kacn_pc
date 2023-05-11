// import { Message } from '@arco-design/web-vue'
import type { FetchResponse, SearchParameters } from "ofetch";
import type { Ref } from "vue";
import type { UseFetchOptions } from "#app";
import { IApi } from '~/utils/interfaces/IApi'

export interface ResOptions<T> {
    data?: T;
    status?: number;
    message?: string;
    success?: boolean;
}

type UrlType =
    | string
    | Request
    | Ref<string | Request>
    | (() => string | Request);

export type HttpOption<T> = UseFetchOptions<ResOptions<T>>;
const handleError = <T>(
    response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>
) => {
    const err = (text: string) => {
        console.error("err_text", text);
    };
    if (!response._data) {
        err("请求超时，服务器无响应！");
        return;
    }
    // const userStore = useUserStore()
    const handleMap: { [key: number]: () => void } = {
        404: () => err("服务器资源不存在"),
        500: () => err("服务器内部错误"),
        403: () => err("没有权限访问该资源"),
        401: () => {
            err("登录状态已过期，需要重新登录");
            // userStore.clearUserInfo()
            // TODO 跳转实际登录页
            navigateTo("/");
        },
    };
    handleMap[response.status]
        ? handleMap[response.status]()
        : err("未知错误！");
};

// get方法传递数组形式参数
const paramsSerializer = (params?: SearchParameters) => {
    if (!params) return;
    // const query = useCloneDeep(params)
    // Object.entries(query).forEach(([key, val]) => {
    //     if (typeof val === 'object' && Array.isArray(val) && val !== null) {
    //         query[`${key}[]`] = toRaw(val).map((v: any) => JSON.stringify(v))
    //         delete query[key]
    //     }
    // })
    return "";
};

const fetch = <T>(url: UrlType, option: UseFetchOptions<ResOptions<T>>) => {
    // @ts-ignore
    return useFetch<ResOptions<T>>(url, {
        // 请求拦截器
        onRequest({ options }) {
            console.log("请求拦截器");
            // get方法传递数组形式参数
            // options.params = paramsSerializer(options.params)
            // 添加baseURL,nuxt3环境变量要从useRuntimeConfig里面取
            const {
                public: { apiBase },
            } = useRuntimeConfig();
            options.baseURL = apiBase;
            // // 添加请求头,没登录不携带token
            // const userStore = useUserStore()
            // if (!userStore.isLogin)
            //     return
            options.headers = new Headers(options.headers);
            options.headers.set("Authorization", `Bearer 123`);
        },
        // 响应拦截
        onResponse({ response }) {
            // ajax请求状态码
            if (response.status !== 200) {
                return Promise.reject({ errCode: response.status });
            }
            // 服务器返回状态码 错误
            if (response._data.status !== 200) {
                handleError<T>(response);
                return Promise.reject(response._data);
            }
            // 成功返回
            return response._data;
        },
        // 错误处理
        onResponseError({ response }) {
            console.log("onResponseError");
            handleError<T>(response);
            return Promise.reject(response?._data ?? null);
        },
        // 合并参数
        ...option,
    });
};

// 自动导出
// export const useHttp = {
//     get: <T>(url: UrlType, params?: any, option?: HttpOption<T>) => {
//         return fetch<T>(url, { method: "get", params, ...option });
//     },

//     post: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
//         return fetch<T>(url, { method: "post", body, ...option });
//     },

//     put: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
//         return fetch<T>(url, { method: "put", body, ...option });
//     },

//     delete: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
//         return fetch<T>(url, { method: "delete", body, ...option });
//     },
// };

interface IParams {
    $urlParams?: string[];
}

export const useHttp = <T>(api: IApi, params?: IParams | any, option?: HttpOption<T>) => {
    let url: string = api.url;
    if (params && params.hasOwnProperty('$urlParams')) {
        url += `/${params['$urlParams'].join("/")}`
        delete params['$urlParams']
    }

    return fetch<T>(url, { method: api.method || 'get', params, ...option });
}
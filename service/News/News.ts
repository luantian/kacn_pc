import { ImplNews } from "./ImplNews";
import { IQueryParams, IQueryList } from "./Interface";

export class News implements ImplNews {
    constructor() {}
    async queryList(params: IQueryList) {
        return await useHttp(useApi().news.list, params);
    }
    async queryDetail(params: IQueryParams) {
        return await useHttp(useApi().news.detail, params);
    }
}
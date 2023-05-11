import { IQueryList, IQueryParams } from "./Interface";

export interface ImplNews {
    queryList(params: IQueryList): void;
    queryDetail(params: IQueryParams) :void;
}
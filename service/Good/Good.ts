import { ImplGood } from "./ImplGood";

export class Good implements ImplGood {
    constructor() {}

    public async queryList(page?: number) {
        return await useHttp(useApi().good.list, { page })
    }

    public async queryDetail(id: string) {

    }

    public async queryRecommend() {
        return await useHttp(useApi().good.recommend)
    }
}

import { IPagination } from "./ImplPagination";

export abstract class Pagination implements IPagination {
    page: number;
    limit: number;
    total: number;
    constructor(page: number, limit: number, total: number) {
        this.page = page;
        this.limit = limit;
        this.total = total;
    }

    next() {

    }

    prev() {

    }

    change(value: number) {
        console.log('changeValue', value)
    }
}


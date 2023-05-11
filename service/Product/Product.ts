import { ImplProduct } from "./ImplProduct";
export class Product implements ImplProduct {
    keyword: string;

    constructor(keyword: string) {
        this.keyword = keyword;
    }

    getKeyword(): string {
        return this.keyword;
    }

    setKeyword(keyword: string): void {
        this.keyword = keyword;
    }

    search(keyword: string): void {
        console.log('搜索内容', keyword)
    }
}

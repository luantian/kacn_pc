export interface ImplProduct {
    keyword: string;
    search(keyword: string): void;
    getKeyword(): string;
    setKeyword(keyword: string): void;
}

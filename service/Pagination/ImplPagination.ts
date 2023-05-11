export interface IPagination {
    page: number;
    limit: number;
    total: number;
    next(): void;
    prev(): void;
    change(value: number): void;
}

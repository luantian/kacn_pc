export interface ImplCategory {
    queryList(): void;
    handleScroll(oDomTitles: NodeListOf<HTMLElement>, active: number): void;
}
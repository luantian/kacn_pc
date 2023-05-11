export interface IPosition {
    x: number;
    scale: number;
    zIndex: number;
}

export interface TActive {
    value: number
}

export interface ISwiper {
    active: TActive;
    positions: Array<IPosition>;
    prev(): void;
    next(): void;
    toggle(active: number): void;
}
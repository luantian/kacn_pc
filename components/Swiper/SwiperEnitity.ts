import { ISwiper, IPosition, TActive } from "./Interface";

export class Swiper implements ISwiper {
    active: TActive;
    positions: IPosition[];
    constructor(active: TActive, positions: IPosition[]) {
        this.active = active;
        this.positions = positions;
    }
    prev() {
        const position = <IPosition>this.positions.shift();
        this.positions.push(position);
        if (this.active.value === 0) {
            this.active.value = this.positions.length - 1;
        } else {
            this.active.value --;
        }
    }
    next() {
        const position = <IPosition>this.positions.pop();
        this.positions.unshift(position);
        if (this.active.value === this.positions.length - 1) {
            this.active.value = 0
        } else {
            this.active.value ++
        }
    }
    toggle(active: number) {
        const isPrev = active - this.active.value;
        if (isPrev > 0) {
            // 说明前进
            for (let i = 0; i < Math.abs(isPrev); i++) {
                this.next();
            }
        }
        if (isPrev < 0) {
            // 说明后退
            for (let i = 0; i < Math.abs(isPrev); i++) {
                this.prev();
            }
        }
        this.active.value = active;
    }
}

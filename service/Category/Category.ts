import { ImplCategory } from "./ImplCategory";

export class Category implements ImplCategory {
    constructor() {

    }

    async queryList() {
        return await useHttp(useApi().category);
    }

    handleScroll(oDomTitles: NodeListOf<HTMLElement>, active: number) {
        const results: number[] = [];
        oDomTitles.forEach((item, index) => {
            if (this.elementIsVisibleInViewport(item)) {
                results.push(index);
            }
        });
        if (
            this.getScrollTop() + this.getWindowHeight() ==
            this.getScrollHeight()
        ) {
            active = results[results.length - 1];
        } else {
            active = results[0];
        }
    }

    elementIsVisibleInViewport(el: HTMLElement, partiallyVisible = false) {
        // 第一个参数是element  第二个参数是 是否部分可见也算可见
        // 设置为false 即有一部份不可见即不可见
        // 设置为true 即部分可见即算是可见
        const { top, left, bottom, right } = el.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        return partiallyVisible
            ? ((top > 0 && top < innerHeight) ||
                  (bottom > 0 && bottom < innerHeight)) &&
                  ((left > 0 && left < innerWidth) ||
                      (right > 0 && right < innerWidth))
            : top >= 0 &&
                  left >= 0 &&
                  bottom <= innerHeight &&
                  right <= innerWidth;
    }
    getScrollTop() {
        let scrollTop = 0,
            bodyScrollTop = 0,
            documentScrollTop = 0;

        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }

        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }

        scrollTop =
            bodyScrollTop - documentScrollTop > 0
                ? bodyScrollTop
                : documentScrollTop;

        return scrollTop;
    }

    getScrollHeight() {
        let scrollHeight = 0,
            bodyScrollHeight = 0,
            documentScrollHeight = 0;

        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }

        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }

        scrollHeight =
            bodyScrollHeight - documentScrollHeight > 0
                ? bodyScrollHeight
                : documentScrollHeight;

        return scrollHeight;
    }
    getWindowHeight() {
        let windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }
}

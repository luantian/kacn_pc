import { ImplNavbar } from "./ImplNavbar";
import { INavbarTabData } from "./Interface";

export class Navbar implements ImplNavbar {
    constructor() {}

    filter(data: INavbarTabData[]): INavbarTabData[] {
        const result: INavbarTabData[] = [];
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            if (item.hasOwnProperty("type") && item.type === "normal") {
                result.push(item);
                continue;
            }
            if (
                (item.hasOwnProperty("populars") &&
                    item.populars &&
                    item.populars.length !== 0) ||
                (item.hasOwnProperty("products") &&
                    item.products &&
                    item.products.length !== 0)
            ) {
                result.push(item);
            }
        }
        return result;
    }
}

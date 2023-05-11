import { INavbarTabData } from "./Interface";

export interface ImplNavbar {
    filter(data: INavbarTabData[]): INavbarTabData[];
}
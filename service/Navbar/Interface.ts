export interface IPopular {
    url: string;
    goodId: string;
    name: string;
    imgUrl: string;
    price: number;
    productType: number;
    fv: number;
    EXPDate: number;
}

export interface IProduct extends IPopular {
    sign: string;
}

export interface INavbarTabData {
    title: string;
    type: "normal" | undefined;
    products?: IProduct[];
    populars?: IPopular[];
}



export interface IViewSearch {
    keyword: string;
    dialogVisible: boolean;
    popularVisible: boolean;
    placeholder: string;
}
export interface IViewData {
    popularSearchs: Array<any>;
    popularProducts: Array<any>;
}
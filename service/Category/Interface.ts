export interface ICategoryTree {
    cat_id: string;
    cat_name: string;
    parent_id: string;
    bannerImgSrc?: string;
    catImgSrc?: string;
    children?: ICategoryTree[]
}

export interface IQueryParams {
    id: string | string[];
}

export interface IQueryList {
    page: string | string[];
}

export interface INewsItem {
    id: string;
    title: string;
    image: string;
    content: string;
    time: number;
}
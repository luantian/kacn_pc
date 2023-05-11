const baseUrl = "https://mock.apifox.cn/m1/2272323-0-default";

const news = {
    list: {
        url: `${baseUrl}/news`,
        method: "POST",
    },
    detail: {
        url: `${baseUrl}/news/detail`,
        method: "POST"
    },
};

const navbar = {
    tabs: {
        url: `${baseUrl}/navbar/tabs`,
    },
};

const category = {
    url: `${baseUrl}/category/tree`,
};

const order = {
    list: {
        url: `${baseUrl}/order/list`,
    },
    detail: {
        url: `${baseUrl}/order/detail`,
    }
}

const good = {
    list: {
        url: `${baseUrl}/goods/list`
    },
    recommend: {
        url: `${baseUrl}/goods/recommend`
    }
}

export const useApi = () => {
    return {
        news,
        navbar,
        category,
        order,
        good
    };
};

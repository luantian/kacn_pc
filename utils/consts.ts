import USALogo from "~/assets/imgs/USA.png";
import AUSLogo from "~/assets/imgs/AUS.png";
import UKLogo from "~/assets/imgs/UK.png";
import CANLogo from "~/assets/imgs/CAN.png";
import MASLogo from "~/assets/imgs/MAS.png";
import SGLogo from "~/assets/imgs/SG.png";

export interface ILangeuage {
    value: string;
    label: string;
}

export const languages: ILangeuage[] = [
    {
        value: "s",
        label: "简体中文",
    },
    {
        value: "t",
        label: "繁体中文",
    },
];

export interface ICountry {
    name: string;
    countryValue: string;
    currencyValue: string;
    sign: string;
    imgUrl: string;
    currency: string;
    internationalPhoneCode: string;
}

export interface ICountries {
    CN?: ICountry;
    USA: ICountry;
    AUS: ICountry;
    UK: ICountry;
    CAN: ICountry;
    MAS: ICountry;
    SG: ICountry;
}

export const countries: ICountries = {
    // CN: {
    //     name: "中国",
    //     countryValue: "CN",
    //     currencyValue: "CNY",
    //     sign: "￥",
    //     imgUrl: USALogo,
    //     currency: "人民币",
    //     internationalPhoneCode: '+86',
    // },
    USA: {
        name: "美国",
        countryValue: "USA",
        currencyValue: "USD",
        sign: "$",
        imgUrl: USALogo,
        currency: "美元",
        internationalPhoneCode: "+01",
    },
    AUS: {
        name: "澳大利亚",
        countryValue: "AUS",
        currencyValue: "AUD",
        sign: "A$",
        imgUrl: AUSLogo,
        currency: "澳元",
        internationalPhoneCode: "+61",
    },
    UK: {
        name: "英国",
        countryValue: "UK",
        currencyValue: "GBP",
        sign: "£",
        imgUrl: UKLogo,
        currency: "英镑",
        internationalPhoneCode: "+44",
    },
    CAN: {
        name: "加拿大",
        countryValue: "CAN",
        currencyValue: "CAD",
        sign: "C$",
        imgUrl: CANLogo,
        currency: "加元",
        internationalPhoneCode: "+011",
    },
    MAS: {
        name: "马来西亚",
        countryValue: "MAS",
        currencyValue: "MYR",
        sign: "M$",
        imgUrl: MASLogo,
        currency: "马币",
        internationalPhoneCode: "+60",
    },
    SG: {
        name: "新加坡",
        countryValue: "SG",
        currencyValue: "SGD",
        sign: "S$",
        imgUrl: SGLogo,
        currency: "新元",
        internationalPhoneCode: "+65",
    },
};

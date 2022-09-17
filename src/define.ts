import { Image } from "canvas";

export type SpachaOptions = {
    width?: number,
    height?: number,
    heightAutoFix?: boolean,
    price?: number,
    customPriceString?: string,
    message?: string,
    background?: string,
    theme?: ThemeName,
    themeOption?: Theme,
    scale?: number,
    shaddow?: boolean;
    user?: {
        name: string,
        img?: HTMLImageElement
    }
    imgOption?: {
        square ?: boolean
    }
};

export type Theme = {
    color: string,
    baseColor: string,
    txtColor: string,
    price: number
}

type Themes = {
    [key: string]: Theme
}

export type ThemeName = 'blue' | 'lightblue' | 'green' | 'yellow' | 'orange' | 'pink' | 'red';

export const themes: Themes = {
    blue: {
        color: '#134a9e',
        baseColor: '#113f85',
        txtColor: 'white',
        price: 0
    },
    lightblue: {
        color: '#00b8d4',
        baseColor: '#00e5ff',
        txtColor: 'black',
        price: 200
    },
    green: {
        color: '#00bfa5',
        baseColor: '#1de9b6',
        txtColor: 'black',
        price: 500
    },
    yellow: {
        color: '#ffb300',
        baseColor: '#ffca28',
        txtColor: 'black',
        price: 1000
    },
    orange: {
        color: '#e65100',
        baseColor: '#f57c00',
        txtColor: 'black',
        price: 2000
    },
    pink: {
        color: '#c2185b',
        baseColor: '#e91e63',
        txtColor: 'white',
        price: 5000
    },
    red: {
        color: '#d00000',
        baseColor: '#e62117',
        txtColor: 'white',
        price: 10000
    }
};

export const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

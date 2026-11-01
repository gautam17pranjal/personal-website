import {StaticImageData} from "next/image";

export interface Highlight {
    id: number,
    date: string,
    title: string,
    info: string
}

export interface Education {
    id: number,
    school: string,
    type: string,
    start: string,
    end: string,
    logo?: StaticImageData
}
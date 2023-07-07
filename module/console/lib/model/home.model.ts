export interface WorkBrief {
    id: number,
    name: string,
    role: string,
    start: string,
    end: string,
    imageLink: string
}

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
    logo: string
}
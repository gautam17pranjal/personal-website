import {StaticImageData} from "next/image";

export interface ProjectObject {
    id: number,
    logo: StaticImageData,
    name: string,
    techStack: string[],
    description: string,
    link: string
}

export interface ExperienceObject {
    id: number,
    companyName: string,
    companyLocation: string,
    companyLink: string,
    companyLogo: StaticImageData,
    companyDescription: string,
    designation: string,
    startDate: string,
    endDate: string,
    shortDescription: string,
    workDescription: string[],
    technologiesUsed: string[]
}
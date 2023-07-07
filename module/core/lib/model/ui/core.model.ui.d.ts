export interface ProjectObject {
    id: number,
    logo: any,
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
    companyLogo: any,
    companyDescription: string,
    designation: string,
    startDate: string,
    endDate: string,
    shortDescription: string,
    workDescription: string[],
    technologiesUsed: string[]
}
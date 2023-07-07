import {ExperienceObject} from "@/module/core/lib/model/ui/core.model.ui";
import Link from "next/link";
import Image from "next/image";
import abb from "../../../../public/images/Industry/abb.svg";
import niit from "../../../../public/images/Industry/niit.avif";
import wipro from "../../../../public/images/Industry/wipro.png";
import zugz from "../../../../public/images/Industry/zugz.webp";
import unionCredit from "../../../../public/images/Industry/unionCredit.webp";
import {classNames} from "@/module/core/lib/service/util.service";
import {FaLink} from "react-icons/fa6";

const experience: ExperienceObject[] = [
    {
        id: 1,
        companyName: "Union Credit",
        companyLocation: "Santa Rosa, California",
        companyLink: "https://www.unioncredit.app/",
        companyLogo: unionCredit,
        companyDescription: "",
        designation: "Software Developer",
        startDate: "February 2023",
        endDate: "Present",
        shortDescription: "Working as a Full Stack developer designing, developing web applications, for various financial institutions and embedders",
        workDescription: [ "Developed 3 consoles to be used by financial institutions, embedders, and administrators", "Developed REST APIs in a Spring based backend for object transferring"],
        technologiesUsed: [ "NextJS", "TailwindCSS", "TypeScript", "nodeJS", "MySQL", "Java", "Spring", "Git", "AWS S3", "DynamoDB", "AWS EC2" ]
    },
    {
        id: 2,
        companyName: "Zugz Inc",
        companyLocation: "Palo Alto, California",
        companyLink: "",
        companyLogo: zugz,
        companyDescription: "ZugZ is a new website for individuals curious to know more about interesting topics. It lets you satisfy your curiosity by presenting visual stories about a variety of topics daily. ",
        designation: "Software Engineer Intern",
        startDate: "June 2022",
        endDate: "December 2022",
        shortDescription: "Worked as a Full Stack developer designing, developing web applications, crawling websites, migrating data, and optimising SQL queries.",
        workDescription: [ "Designed, executed, and tested software for crawling web, storing, and indexing records.", "Executed Flask based backend to supply data from AWS Aurora DB to React based frontend application.", "Constructed a Full-Stack Web Application as an internal tool for viewing/editing records present in Aurora DB.", "Reduced response time by 60% by optimizing SQL Schema and Queries.", "Developed Scripts to migrate data from SQL database to MongoDB." ],
        technologiesUsed: [ "HTML", "CSS", "BootStrap", "JavaScript", "ReactJS", "Ajax", "jQuery", "PHP", "MySQL", "Python", "Shell Scripts", "Git", "MySQL Server", "MongoDB", "DynamoDB", "Elastic Search", "AWS Lambda", "AWS S3", "AWS EC2" ]
    },
    {
        id: 3,
        companyName: "Wipro Limited",
        companyLocation: "Bengaluru, India",
        companyLink: "https://www.wipro.com/",
        companyLogo: wipro,
        companyDescription: "",
        designation: "Software Developer",
        startDate: "July 2018",
        endDate: "January 2021",
        shortDescription: "Created a framework that enabled DevOps capability in a SAP environment. The framework received certification in the field of 'SAP-DevOps' by SAP. Created a full stack web application to maintain and monitor servers in the client's domain.",
        workDescription: [ "Designed and implemented end-to-end web application for Server Management and Health portal.", "Created Web Application with JavaScript, programmed backend REST APIs in PHP, Flask, and phpMyAdmin for SQL.", "Wrote shell scripts to gather resource utilization and jobs status for AWS EC2 instances.", "Integrated non-SAP tools (Jira, Azure DevOps) and SAP Solution Manager using Flask for better project management.", "Overcame obstacle of object lock present in SAP by enabling parallel development using GitHub and ABAPGit.", "Assisted in creation of pipelines on Azure DevOps and Jenkins and connected to IDE using REST APIs in Python and Flask for automated testing.", "Reduced R2D time ~35%, testing time by ~55%, leading to budget reduction of ~30% by integrating DevOps framework on top of the software development cycle" ],
        technologiesUsed: [ "HTML", "CSS", "BootStrap", "JavaScript", "jQuery", "Ajax", "PHP", "MySQL", "Python", "Shell Scripts", "SAP Charm", "ABAP Programming", "ABAPGit", "Git", "SAP Focused Build", "Jira", "Jenkins", "Azure DevOps", "Azure Pipelines" ]
    },
    {
        id: 4,
        companyName: "ABB GISPL",
        companyLocation: "Bengaluru, India",
        companyLink: "https://global.abb/group/en/technology/corporate-research-centers/india",
        companyLogo: abb,
        companyDescription: "",
        designation: "Software Developer Intern",
        startDate: "May 2017",
        endDate: "July 2017",
        shortDescription: "Developed a Windows Application that monitors robot statistics and displays them as part of HMI screens.",
        workDescription: [ "Programmed a windows application leveraging C# to communicate with a Robot Controller.", "Analysed and devised functions to collect robot’s data, process, store, and display data as part of HMI screens.", "Simplified view and access to Robot data for engineers by utilizing only a single application." ],
        technologiesUsed: [ "C#", ".NET framework", "ADO.NET", "RobotStudio", "ABB-PC SDK" ]
    },
    {
        id: 5,
        companyName: "NIIT Technologies",
        companyLocation: "Greater Noida, India",
        companyLink: "https://www.niit.com/en/learning-outsourcing/",
        companyLogo: niit,
        companyDescription: "",
        designation: "Software Developer Intern",
        startDate: "December 2016",
        endDate: "December 2016",
        shortDescription: "Worked as a backend engineer to automate the process of creating and analysing logs for various backend applications.",
        workDescription: [ "Develop Batch scripts to create and pull of logs from various backend ticketing applications and store them in backend servers." ],
        technologiesUsed: [ "C++", "Python", "Batch Programming" ]
    }
]

const ExperienceContentSection = () => {
    return (
        <div className="flex flex-col">
            {
                experience.map((item: ExperienceObject, index: number) => (
                    <div key={item.id} className={classNames(index+1 !== experience.length ? " border-b border-zinc-700" : "", "flex flex-col md:flex-row justify-start mb-6 py-10")}>
                        <div className="flex flex-col mb-3 text-sm w-full md:w-[40%]">
                            <span className="flex flex-row items-center pb-3">
                                <Link href={item.companyLink} target="_blank">
                                    <FaLink className="text-teal-500 h-5 w-5 mr-3" />
                                </Link>
                                <span className="font-medium">{item.companyName}</span>
                            </span>
                            <span className="font-mono">{item.companyLocation}</span>
                            <span className="text-zinc-400">{item.startDate} - { item.endDate}</span>
                        </div>
                        <div className="flex flex-col w-full text-sm">
                            <h1 className="font-medium text-teal-500">{item.designation}</h1>
                            <p className="">{item.shortDescription}</p>
                            <ul className="list-disc pl-8 py-4">
                                {
                                    item.workDescription.map((work: string, index: number) => (
                                        <li key={index} className="">{work}</li>
                                    ))
                                }
                            </ul>
                            <span className="flex flex-row flex-wrap pt-4 text-zinc-500">
                                {
                                    item.technologiesUsed.map((tech: string, index: number) => (
                                        <span key={index} className="pr-3">{tech}</span>
                                    ))
                                }
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ExperienceContentSection;
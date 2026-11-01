import {ExperienceObject} from "@/module/core/lib/model/ui/core.model.ui";
import abb from "../../../../public/images/Industry/abb.svg";
import niit from "../../../../public/images/Industry/niit.avif";
import wipro from "../../../../public/images/Industry/wipro.png";
import zugz from "../../../../public/images/Industry/zugz.webp";
import unionCredit from "../../../../public/images/Industry/unionCredit.webp";

// single source of work history, shared by the Experience page and the Work card on Home
export const experience: ExperienceObject[] = [
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
        shortDescription: "Working as a Full Stack developer, designing and developing web applications for financial institutions and embedders.",
        workDescription: [ "Developed 3 consoles used by financial institutions, embedders, and administrators.", "Developed REST APIs in a Spring-based backend for transferring objects."],
        technologiesUsed: [ "NextJS", "TailwindCSS", "TypeScript", "nodeJS", "MySQL", "Java", "Spring", "Git", "AWS S3", "DynamoDB", "AWS EC2" ]
    },
    {
        id: 2,
        companyName: "Zugz Inc",
        companyLocation: "Palo Alto, California",
        companyLink: "",
        companyLogo: zugz,
        companyDescription: "ZugZ is a website for curious people who want to learn about interesting topics. It satisfies that curiosity with daily visual stories on a variety of subjects.",
        designation: "Software Engineer Intern",
        startDate: "June 2022",
        endDate: "December 2022",
        shortDescription: "Worked as a Full Stack developer, designing and developing web applications, crawling websites, migrating data, and optimizing SQL queries.",
        workDescription: [ "Designed, built, and tested software for crawling the web and storing and indexing records.", "Built a Flask-based backend to supply data from AWS Aurora DB to a React-based frontend application.", "Built a full-stack web application as an internal tool for viewing and editing records in Aurora DB.", "Reduced response time by 60% by optimizing SQL schemas and queries.", "Developed scripts to migrate data from a SQL database to MongoDB." ],
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
        shortDescription: "Created a framework that brought DevOps capabilities to an SAP environment, which SAP certified in the field of 'SAP-DevOps'. Also built a full-stack web application to maintain and monitor servers in the client's domain.",
        workDescription: [ "Designed and implemented an end-to-end web application for a Server Management and Health portal.", "Created a web application in JavaScript with backend REST APIs in PHP and Flask, using phpMyAdmin for SQL.", "Wrote shell scripts to gather resource utilization and job status for AWS EC2 instances.", "Integrated non-SAP tools (Jira, Azure DevOps) and SAP Solution Manager using Flask for better project management.", "Overcame the object-lock limitation in SAP by enabling parallel development with GitHub and ABAPGit.", "Assisted in creating pipelines on Azure DevOps and Jenkins and connected to IDE using REST APIs in Python and Flask for automated testing.", "Reduced R2D time by ~35% and testing time by ~55%, cutting the budget by ~30%, by integrating a DevOps framework into the software development cycle." ],
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
        workDescription: [ "Programmed a Windows application in C# that communicates with a Robot Controller.", "Analyzed and devised functions to collect, process, store, and display robot data as part of HMI screens.", "Simplified how engineers view and access robot data by consolidating it into a single application." ],
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
        startDate: "December 2015",
        endDate: "December 2015",
        shortDescription: "Worked as a backend engineer to automate the process of creating and analysing logs for various backend applications.",
        workDescription: [ "Developed batch scripts to create and pull logs from various backend ticketing applications and store them on backend servers." ],
        technologiesUsed: [ "C++", "Python", "Batch Programming" ]
    }
]

// "February 2023" -> "2023"
export const getYear = (date: string) => date.split(" ").pop() ?? date;

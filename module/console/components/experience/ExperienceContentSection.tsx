import {ExperienceObject} from "@/module/core/lib/model/ui/core.model.ui";
import Link from "next/link";
import {trackEvent} from "@/module/core/lib/service/analytics.service";
import Image from "next/image";
import {classNames} from "@/module/core/lib/service/util.service";
import {FaLink} from "react-icons/fa6";
import {experience} from "@/module/console/lib/data/experience.data";

const ExperienceContentSection = () => {
    return (
        <div className="flex flex-col">
            {
                experience.map((item: ExperienceObject, index: number) => (
                    <div key={item.id} className={classNames(index+1 !== experience.length ? " border-b border-zinc-200 dark:border-zinc-700" : "", "flex flex-col md:flex-row justify-start mb-6 py-10")}>
                        <div className="flex flex-col mb-3 text-sm w-full md:w-[40%]">
                            <span className="flex flex-row items-center pb-3">
                                <Image
                                    src={item.companyLogo}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 mr-3 rounded-full object-contain bg-white p-1 ring-1 ring-zinc-200 dark:ring-zinc-700"
                                />
                                {
                                    item.companyLink !== "" ?
                                    <Link href={item.companyLink} target="_blank" onClick={() => trackEvent("company_click", {company_name: item.companyName})} className="flex flex-row items-center font-medium hover:text-teal-600 dark:hover:text-teal-500">
                                        {item.companyName}
                                        <FaLink className="text-teal-600 dark:text-teal-500 h-3.5 w-3.5 ml-2" aria-hidden="true" />
                                    </Link> :
                                    <span className="font-medium">{item.companyName}</span>
                                }
                            </span>
                            <span className="font-mono">{item.companyLocation}</span>
                            <span className="text-zinc-600 dark:text-zinc-400">{item.startDate} - { item.endDate}</span>
                        </div>
                        <div className="flex flex-col w-full text-sm">
                            <h1 className="font-medium text-teal-600 dark:text-teal-500">{item.designation}</h1>
                            <p className="">{item.shortDescription}</p>
                            <ul className="list-disc pl-8 py-4">
                                {
                                    item.workDescription.map((work: string, index: number) => (
                                        <li key={index} className="">{work}</li>
                                    ))
                                }
                            </ul>
                            <span className="flex flex-row flex-wrap pt-4 text-zinc-600 dark:text-zinc-400">
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
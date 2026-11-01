import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { HiArrowDownTray } from "react-icons/hi2";
import Link from "next/link";
import {trackEvent} from "@/module/core/lib/service/analytics.service";
import Image from "next/image";
import { ExperienceObject } from "@/module/core/lib/model/ui/core.model.ui";
import { experience, getYear } from "@/module/console/lib/data/experience.data";

const BriefWorkSection = () => {

    return (
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl py-4 shadow-lg px-4 md:px-5">
            <div className="flex flex-row justify-start pb-4">
                <BriefcaseIcon className="w-7 h-7" />
                <span className="font-bold text-lg pl-4 text-zinc-900 dark:text-white">Work</span>
            </div>
            <div className="">
                {
                    experience.map((data: ExperienceObject) => {
                        const start = getYear(data.startDate);
                        const end = getYear(data.endDate);
                        return (
                            <div className="flex flex-row items-center py-2" key={data.id}>
                                <Image
                                    src={data.companyLogo}
                                    alt=""
                                    width={32}
                                    height={32}
                                    className="h-8 w-8 mr-3 shrink-0 rounded-full object-contain bg-white p-0.5 ring-1 ring-zinc-200 dark:ring-zinc-700"
                                />
                                <div className="flex flex-col flex-1">
                                    <div className="text-md font-medium text-zinc-900 dark:text-white">{data.companyName}</div>
                                    <div className="flex flex-row justify-between">
                                        <div className="text-sm items-start">{data.designation}</div>
                                        <div className="text-sm justify-end shrink-0 pl-2">{ start === end ? start : `${start} - ${end}` }</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="mt-5 mb-3 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:cursor-pointer py-1.5 rounded-lg">
                <Link
                    href={"https://drive.google.com/file/d/14DEwrCY3Ee7jlBzdaqSUOb4u0RcE8epq/view?usp=sharing"}
                    target="_blank"
                    onClick={() => trackEvent("resume_click")}
                    className=""
                >
                    <span className="flex flex-row justify-center items-center text-zinc-900 dark:text-white text-sm font-medium">
                        <span className="pr-3">Resume</span>
                        <HiArrowDownTray className="h-5 w-5"/>
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default BriefWorkSection;
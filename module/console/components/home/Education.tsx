import type {Education as EducationItem} from "@/module/console/lib/model/home.model";
import {AcademicCapIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import usc from "../../../../public/images/Education/usc.svg";
import nsut from "../../../../public/images/Education/nsut.svg";
import mountCarmel from "../../../../public/images/Education/mountCarmel.svg";

const educationData: EducationItem[] = [
    {id: 1, school: "University of Southern California", type: "M.S. (Computer Science)", start: "2021", end: "2022", logo: usc},
    {id: 2, school: "Netaji Subhas Institute of Technology", type: "B.E. (Information Technology)", start: "2014", end: "2018", logo: nsut},
    {id: 3, school: "Mount Carmel School", type: "High School", start: "2009", end: "2013", logo: mountCarmel}
]

const Education = () => {
    return (
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl border-t py-4 mb-8 shadow-lg px-4 md:px-5">
            <div className="flex flex-row justify-start pb-4">
                <AcademicCapIcon className="w-7 h-7" />
                <span className="font-bold text-lg pl-4 text-zinc-900 dark:text-white">Education</span>
            </div>
            <div className="">
                {
                    educationData.map((data: EducationItem) => {
                        return (
                            <div className="flex flex-row items-center py-2" key={data.id}>
                                {
                                    data.logo ?
                                    <Image
                                        src={data.logo}
                                        alt=""
                                        width={32}
                                        height={32}
                                        className="h-8 w-8 mr-3 shrink-0 rounded-full object-contain bg-white p-0.5 ring-1 ring-zinc-200 dark:ring-zinc-700"
                                    /> :
                                    <span className="flex h-8 w-8 mr-3 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 ring-1 ring-zinc-200 dark:ring-zinc-700">
                                        <AcademicCapIcon className="h-4 w-4" />
                                    </span>
                                }
                                <div className="flex flex-col flex-1">
                                    <div className="text-md text-zinc-900 dark:text-white font-medium">{data.school}</div>
                                    <div className="flex flex-row justify-between">
                                        <div className="text-sm items-start">{data.type}</div>
                                        <div className="text-sm justify-end shrink-0 pl-2">{ data.start } - { data.end }</div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default  Education;
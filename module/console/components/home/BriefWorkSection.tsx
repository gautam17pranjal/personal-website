import {BriefcaseIcon} from "@heroicons/react/24/outline";
import {WorkBrief} from "@/module/console/lib/model/home.model";
import {HiArrowDownTray} from "react-icons/hi2";
import Link from "next/link";

const workData: WorkBrief[] = [
    {id: 100, name: "Union Credit Inc.", role: "Software Developer", start: "2023", end: "Present", imageLink: ""},
    {id: 99, name: "Zugz Inc.", role: "SDE Intern", start: "2022", end: "2022", imageLink: ""},
    {id: 98, name: "Wipro Limited", role: "Software Developer", start: "2018", end: "2021", imageLink: ""},
    {id: 97, name: "ABB", role: "SDE Intern", start: "2017", end: "2017", imageLink: ""},
    {id: 96, name: "NIIT Technologies", role: "SDE Intern", start: "2015", end: "2015", imageLink: ""},
]


const BriefWorkSection = () => {

    return (
        <div className="border border-zinc-800 rounded-xl py-4 shadow-lg px-4 md:px-5">
            <div className="flex flex-row justify-start pb-4">
                <BriefcaseIcon className="w-7 h-7" />
                <span className="font-bold text-lg pl-4 text-white">Work</span>
            </div>
            <div className="">
                {
                    workData.map((data: WorkBrief) => {
                        return (
                            <div className="py-2" key={data.id}>
                                <div className="">
                                        {/*// put the image here*/}
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-md font-medium text-white">{data.name}</div>
                                    <div className="flex flex-row justify-between">
                                        <div className="text-sm items-start">{data.role}</div>
                                        <div className="text-sm justify-end">{ data.start } - { data.end }</div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="mt-5 mb-3 pl-[30%] bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer py-1.5 rounded-lg">
                <Link
                    href={"https://drive.google.com/file/d/1mXoc0iCcOhF3NNTCqz6tnt5KKTZDOdgC/view"}
                    target="_blank"
                    className=""
                >
                    <span className="flex flex-row items-center text-white text-sm font-medium">
                        <span className="pr-3">Resume</span>
                        <HiArrowDownTray className="h-5 w-5"/>
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default BriefWorkSection;
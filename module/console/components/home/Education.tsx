import {Education} from "@/module/console/lib/model/home.model";
import {AcademicCapIcon, BriefcaseIcon} from "@heroicons/react/24/outline";

const educationData: Education[] = [
    {id: 1, school: "University of Southern California", type: "M.S. in Computer Science", start: "2021", end: "2022", logo: ""},
    {id: 2, school: "Netaji Subhas Institute of Technology", type: "B.E. in Information Technology", start: "2014", end: "2018", logo: ""},
    {id: 3, school: "Mount Carmel School", type: "High School", start: "2009", end: "2013", logo: ""}
]

const Education = () => {
    return (
        <div className="border border-zinc-800 rounded-xl border-t py-4 mb-8 shadow-lg px-4 md:px-8">
            <div className="flex flex-row justify-start pb-4">
                <AcademicCapIcon className="w-7 h-7" />
                <span className="font-bold text-lg pl-4 text-white">Education</span>
            </div>
            <div className="">
                {
                    educationData.map((data: Education) => {
                        return (
                            <div className="py-2" key={data.id}>
                                <div className="">
                                    {/*// put the image here*/}
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-md text-white font-medium">{data.school}</div>
                                    <div className="flex flex-row justify-between">
                                        <div className="text-sm items-start">{data.type}</div>
                                        <div className="text-sm justify-end">{ data.start } - { data.end }</div>
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
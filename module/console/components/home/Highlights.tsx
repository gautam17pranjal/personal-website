import {Highlight} from "@/module/console/lib/model/home.model";

const highlightsData: Highlight[] = [
    {id: 1, date: "May 2023", title: "Master's in C.S", info: "Walked at my graduation ceremony, the first one I have ever attended. :)"},
    {id: 2, date: "February 2023", title: "Started Full-Time", info: "Started working full time as a software developer at Union Credit and moved to New Jersey on the East Coast. New place, new folks, lots of work, but lots of fun!"},
    {id: 3, date: "December 2022", title: "Master's Requirements Complete", info: "Completed my master's degree requirements with 28 credits (7 courses) at the University of Southern California. Ceremony in May 2023."},
    {id: 4, date: "August 2022", title: "Course Producer: CSCI 561", info: "Rejoined Prof. Wei-Min Shen's team of instructors for the graduate-level course Introduction to Artificial Intelligence."},
    {id: 5, date: "June 2022", title: "Summer Internship", info: "Landed an internship with ZugZ Inc. right before summer started and stayed with them until December 2022. It was my first time working at a startup, and I had the pleasure of working alongside 4 founders who had previously worked at Google, Meta, Cisco, and Docker. The pace of learning and growth was incredible. Loved it!"},
    {id: 6, date: "May 2022", title: "Course Producer: CSCI 567", info: "Joined Prof. Victor Adamchik's team of instructors for the graduate-level course Machine Learning."},
    {id: 7, date: "January 2022", title: "Course Producer: CSCI 561", info: "Rejoined Prof. Wei-Min Shen's team of instructors for the graduate-level course Introduction to Artificial Intelligence. This was the best team I worked with across my 3 stints on this course. Not that the other teams weren't great too :)"},
    {id: 8, date: "August 2021", title: "Back to School (In-person) and Course Producer: CSCI 561", info: "The fall semester started, and we could finally go to campus for in-person classes! Joined Prof. Wei-Min Shen's team of instructors for the graduate-level course Introduction to Artificial Intelligence."},
    {id: 9, date: "January 2021", title: "Let's go get a Graduate degree", info: "Left my full-time job in India and took a 15-hour flight to SFO, then a 1.5-hour flight to LAX, to start my journey toward a Master of Science. The whole semester was online because of COVID :("}
]

const Highlights = () => {
    // TODO: convert this into a paginated table structure
    return (
        <div className="pb-4 px-3 md:px-8">
            {
                highlightsData.map((data: Highlight) => {
                    return (
                        <div className="pb-8" key={data.id}>
                            <div className="text-sm font-semibold border-l-4 pl-4 text-teal-600 dark:text-teal-500">
                                {data.date}
                            </div>
                            <div className="py-2 font-bold text-zinc-900 dark:text-white">
                                {data.title}
                            </div>
                            <div className="text-sm">
                                {data.info}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Highlights;
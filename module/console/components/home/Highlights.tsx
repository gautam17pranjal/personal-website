import {Highlight} from "@/module/console/lib/model/home.model";

const highlightsData: Highlight[] = [
    {id: 1, date: "May 2023", title: "Master's in C.S", info: "Finally done with the graduation ceremony. First time attending the graduation ceremony. :)"},
    {id: 2, date: "February 2023", title: "Started Full Time", info: "Started Full time work as a software developer at Union Credit. Moved to East Coast to New Jersey. New place, new folks, lots of work but lots of fun!"},
    {id: 3, date: "December 2022", title: "Master's Requirement Complete", info: "Completed master's degree requirement with 28 credits (7 courses) from University of Southern California. Ceremony in May 2023."},
    {id: 4, date: "August 2023", title: "Course Producer: CSCI 561", info: "Rejoined Prof.Wei-Min Shen's team of instructors for graduate level course Introduction to Artificial Intelligence."},
    {id: 5, date: "June 2022", title: "Summer Internship", info: "Landed Internship with ZugZ Inc. right before summer started. Went on to work with them till December 2022. It was my first time working in a startup. I had the pleasure of working amongst the 4 of the top founders having previously worked in Google, Meta, Cisco, Docker. The pace of learning and growth was too high. Loved it! "},
    {id: 6, date: "May 2022", title: "Course Producer: CSCI 567 ", info: "Joined Prof.Victor Adamchik's team of instructors for graduate level course Machine Learning."},
    {id: 7, date: "January 2022", title: "Course Producer: CSCI 561", info: "Rejoined Prof.Wei-Min Shen's team of instructors for graduate level course Introduction to Artificial Intelligence. This was the best team I worked with during my 3 stint of working for this course. Also, not saying that the other groups are not good  :)"},
    {id: 8, date: "August 2021", title: "Back to School (In-person) and Course Producer: CSCI 561", info: "Fall semester started and finally we can go to campus for in-person classes! Joined Prof.Wei-Min Shen's team of instructors for graduate level course Introduction to Artificial Intelligence."},
    {id: 9, date: "January 2021", title: "Let's go get a Graduate degree", info: "Left my full time job in India. Took a 15 hours flight to SFO and then 1.5 hours to LAX to start my journey to become a Master of Science. Full semester was online because of COVID :("}
]

const Highlights = () => {
    // TODO: convert this into a paginated table structure
    return (
        <div className="pb-4 px-3 md:px-8">
            {
                highlightsData.map((data: Highlight) => {
                    return (
                        <div className="pb-8" key={data.id}>
                            <div className="text-gray-400 text-sm font-semibold border-l-4 pl-4 text-teal-500">
                                {data.date}
                            </div>
                            <div className="py-2 font-bold text-white">
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
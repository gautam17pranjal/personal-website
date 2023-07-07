import BriefWorkSection from "./BriefWorkSection";
import Highlights from "./Highlights";
import Education from "./Education";

const HomeHighlightsSection = () => {
    return (
        <div className="grid md:grid-cols-4 lg:grid-cols-3 grid-cols-1">
            <div className="col-span-1 md:col-span-2">
                <Highlights />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-1 md:px-4">
                <Education />
                <BriefWorkSection />
            </div>
        </div>
    ) 
}

export default HomeHighlightsSection;
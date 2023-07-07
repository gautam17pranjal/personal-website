import {ProjectObject} from "@/module/core/lib/model/ui/core.model.ui";
import {HiDocument, HiGlobe} from "react-icons/hi";
import {FaGamepad, FaLanguage, FaLink, FaPython, FaSearchengin} from "react-icons/fa6";
import {FaGlobeAsia} from "react-icons/fa";
import Link from "next/link";

const projects: ProjectObject[] = [
    {id: 1, logo: HiGlobe, name: 'Personal Website', techStack: ['nextJS', 'TypeScript', 'nodeJS', 'TailwindCSS'], description: 'Creating my Website :)', link: 'https://github.com/gautam17pranjal/personal-website'},
    {id: 2, logo: FaGamepad, name: 'Alice In ParkourLand', techStack: ['Game Development', 'Unity3D', 'C#', 'UI/UX'], description: 'A 3D level based survival game which includes elements of color change, wipeout, exploration, and shooting.', link: 'https://github.com/biyaniM/ALICE-IN-WONDERLAND-professional-nappers'},
    {id: 3, logo: FaSearchengin, name: 'SearchIt', techStack: ['Search Engine', 'PHP', 'Lucene', 'ApacheSolr', 'JavaScript', 'jQuery', 'Ajax'], description: 'Search Engine capable of delivering search results for a search query and algorithm used. (PageRank vs Lucene)', link: 'https://github.com/gautam17pranjal/SearchIt'},
    {id: 4, logo: FaLanguage, name: 'Key Idea Classification of Hindi Movie Annotations (KHAN)', techStack: ['NLP', 'Python', 'ML', 'Web-Crawling'], description: 'Develop a multi-label multi-class classifier used for Genre predictions of a Bollywood movie. Create a novel dataset', link: 'https://drive.google.com/file/d/1bCMuUg7Nn0paxTus7pW0JJNZbhlpDjS1/view?pli=1'},
    {id: 5, logo: FaPython, name: 'FOL Resolution', techStack: ['AI', 'Python'], description: 'A system capable of giving out a conclusion based of English queries given in first order logic.', link: 'https://github.com/gautam17pranjal/CSCI-561-Foundations-of-AI/tree/main/FOL%20Resolution'},
    {id: 6, logo: FaPython, name: 'Checkers Game Playing Agent', techStack: ['AI', 'Python'], description: 'An AI agent using Minimax algorithm and improved efficiency by adding Alpha-Beta pruning.', link: 'https://github.com/gautam17pranjal/CSCI-561-Foundations-of-AI/tree/main/Checkers%20AI%20Agent'},
    {id: 7, logo: FaGlobeAsia, name: 'Manga Catcher', techStack: ['Web-Crawling', 'Python'], description: 'Captures chapters of a Manga, download it, and take them for your travels.', link: 'https://github.com/gautam17pranjal/Manga-Catcher'},
    {id: 8, logo: HiDocument, name: 'UnderGraduate: Major Project', techStack: ['Networks', 'Encryption', 'Java'], description: 'Secure and reliable data backup and recovery technique using seed bock algorithm.', link: 'https://drive.google.com/file/d/1a280BwUrTOsACtrQ-XzPD31H1Npgww6-/view'},
    {id: 9, logo: HiDocument, name: 'UnderGraduate: Minor Project', techStack: ['Cryptography', 'IoT', 'Java'], description: 'Authentication and key agreement scheme for multi-gateway wireless sensor networks in IoT deployment.', link: 'https://drive.google.com/file/d/1_e-wlDhGNOtyrEojqz2Tcfq5kI0VxbN4/view'}
]

const ProjectContentSection = () => {
    return (
        <div className="pb-10">
            <h1 className="w-[80%] md:w-[80%] lg:w-[60%] font-bold text-2xl md:text-3xl lg:text-5xl pb-4 text-white">
                Developing to learn and contribute
            </h1>
            <p className="py-8 md:w-[80%] lg:w-[60%]">
                I&apos;m blessed to work and collaborate with others on these awesome projects over the years. Many of them are simple, part of my learning
                process but feel free to check out the code, and let&apos;s contribute to making them better.
            </p>
            <div className="grid grid-cols-1 gap-x-2 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {
                    projects.map((item: ProjectObject) => (
                        <div key={item.id} className="flex flex-col justify-between items-start hover:bg-zinc-800 hover:rounded-xl pt-4 pb-3 pl-4 pr-3">
                            <div className="">
                                <item.logo
                                    className="h-8 w-8 mb-3 text-teal-500"
                                />
                                <h1 className="font-medium text-md text-white">{item.name}</h1>
                                <p className="py-3 text-sm">{item.description}</p>
                            </div>
                            <div className="flex flex-row flex-wrap text-sm font-medium text-zinc-500">
                                {
                                    item.techStack.map((tech: string) => (
                                        <span key={item.id} className="pr-4">{tech}</span>
                                    ))
                                }
                            </div>
                            <span className="hover:text-teal-500 pt-3">
                                {
                                    item.link !== "" &&
                                    <Link href={item.link} className="flex flex-row" target={"_blank"}>
                                        <FaLink className="h-5 w-5 mr-3" />
                                        <span className="">Project Link</span>
                                    </Link>
                                }
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectContentSection;
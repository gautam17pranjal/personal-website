import {ProjectObject} from "@/module/core/lib/model/ui/core.model.ui";
import {FaLink} from "react-icons/fa6";
import Link from "next/link";
import {trackEvent} from "@/module/core/lib/service/analytics.service";
import Image from "next/image";
import websiteLogo from "../../../../public/images/logo.jpg";
import aliceInParkourLand from "../../../../public/images/project/aliceInParkourLand.png";
import searchIt from "../../../../public/images/project/searchIt.png";
import nlp from "../../../../public/images/project/nlp.jpeg";
import fol from "../../../../public/images/project/fol.png";
import checkers from "../../../../public/images/project/checkers.jpeg";
import manga from "../../../../public/images/project/manga.jpeg";
import major from "../../../../public/images/project/major.png";
import minor from "../../../../public/images/project/minor.png";

const projects: ProjectObject[] = [
    {id: 1, logo: websiteLogo, name: 'Personal Website', techStack: ['Next.js', 'TypeScript', 'Node.js', 'TailwindCSS'], description: 'The website you are looking at right now. :)', link: 'https://github.com/gautam17pranjal/personal-website'},
    {id: 2, logo: aliceInParkourLand, name: 'Alice In ParkourLand', techStack: ['Game Development', 'Unity3D', 'C#', 'UI/UX'], description: 'A 3D level-based survival game with elements of color change, wipeout, exploration, and shooting.', link: 'https://github.com/biyaniM/ALICE-IN-WONDERLAND-professional-nappers'},
    {id: 3, logo: searchIt, name: 'SearchIt', techStack: ['Search Engine', 'PHP', 'Lucene', 'Apache Solr', 'JavaScript', 'jQuery', 'Ajax'], description: 'A search engine that returns results for a query using the selected ranking algorithm (PageRank vs. Lucene).', link: 'https://github.com/gautam17pranjal/SearchIt'},
    {id: 4, logo: nlp, name: 'Key Idea Classification of Hindi Movie Annotations (KHAN)', techStack: ['NLP', 'Python', 'ML', 'Web-Crawling'], description: 'Built a multi-label, multi-class classifier that predicts the genres of a Bollywood movie, and created a novel dataset for it.', link: 'https://drive.google.com/file/d/1bCMuUg7Nn0paxTus7pW0JJNZbhlpDjS1/view?pli=1'},
    {id: 5, logo: fol, name: 'FOL Resolution', techStack: ['AI', 'Python'], description: 'A system that draws conclusions from English queries expressed in first-order logic.', link: 'https://github.com/gautam17pranjal/CSCI-561-Foundations-of-AI/tree/main/FOL%20Resolution'},
    {id: 6, logo: checkers, name: 'Checkers Game Playing Agent', techStack: ['AI', 'Python'], description: 'An AI agent that plays checkers using the Minimax algorithm, made faster with Alpha-Beta pruning.', link: 'https://github.com/gautam17pranjal/CSCI-561-Foundations-of-AI/tree/main/Checkers%20AI%20Agent'},
    {id: 7, logo: manga, name: 'Manga Catcher', techStack: ['Web-Crawling', 'Python'], description: 'Finds the chapters of a manga and downloads them, so you can take them with you on your travels.', link: 'https://github.com/gautam17pranjal/Manga-Catcher'},
    {id: 8, logo: major, name: 'Undergraduate: Major Project', techStack: ['Networks', 'Encryption', 'Java'], description: 'A secure and reliable data backup and recovery technique using the seed block algorithm.', link: 'https://drive.google.com/file/d/1a280BwUrTOsACtrQ-XzPD31H1Npgww6-/view'},
    {id: 9, logo: minor, name: 'Undergraduate: Minor Project', techStack: ['Cryptography', 'IoT', 'Java'], description: 'An authentication and key agreement scheme for multi-gateway wireless sensor networks in IoT deployments.', link: 'https://drive.google.com/file/d/1_e-wlDhGNOtyrEojqz2Tcfq5kI0VxbN4/view'}
]

const ProjectContentSection = () => {
    return (
        <div className="pb-10">
            <h1 className="w-[80%] md:w-[80%] lg:w-[60%] font-bold text-2xl md:text-3xl lg:text-5xl pb-4 text-zinc-900 dark:text-white">
                Developing to learn and contribute
            </h1>
            <p className="py-8 md:w-[80%] lg:w-[60%]">
                I&apos;m blessed to work and collaborate with others on these awesome projects over the years. Many of them are simple, part of my learning
                process but feel free to check out the code, and let&apos;s contribute to making them better.
            </p>
            <div className="grid grid-cols-1 gap-x-2 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {
                    projects.map((item: ProjectObject) => (
                        <div key={item.id} className="flex flex-col justify-between items-start hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:rounded-xl pt-4 pb-3 pl-4 pr-3">
                            <div className="">
                                <Image
                                    src={item.logo}
                                    alt={`${item.name} icon`}
                                    width={48}
                                    height={48}
                                    className="h-12 w-12 mb-3 rounded-lg object-cover bg-zinc-100 dark:bg-zinc-800"
                                />
                                <h1 className="font-medium text-md text-zinc-900 dark:text-white">{item.name}</h1>
                                <p className="py-3 text-sm">{item.description}</p>
                            </div>
                            <div className="flex flex-row flex-wrap text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                {
                                    item.techStack.map((tech: string) => (
                                        <span key={tech} className="pr-4">{tech}</span>
                                    ))
                                }
                            </div>
                            <span className="hover:text-teal-600 dark:hover:text-teal-500 pt-3">
                                {
                                    item.link !== "" &&
                                    <Link href={item.link} className="flex flex-row" target={"_blank"} onClick={() => trackEvent("project_click", {project_name: item.name})}>
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
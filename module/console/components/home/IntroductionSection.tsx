import {SocialNavItems} from "@/module/routing/lib/constants/navigation.items";
import {MenuBarItems} from "@/module/routing/lib/model/navigation";
import Link from "next/link";

const IntroductionSection = () => {
    return (
        <div className="pb-10 mb-10">
            <div className="w-[80%] md:w-[80%] lg:w-[60%] font-bold text-2xl md:text-3xl lg:text-5xl pb-4 text-white">
                Full Stack Developer, sports enthusiast,
                and amateur painter.
            </div>
            <div className="w-[80%] md:w-[70%] font-normal text-sm pt-4">
                {/*{ TODO: Change this later }*/}
                I'm Gautam Pranjal, a full stack software developer based in New Jersey. I'm currently working in a fin-tech startup,
                where our goal is to help people regain trust in financial institutions and gain confidence in their own ability to make
                financial decisions.
            </div>
            <div className="flex flex-row justify-start pt-5">
                {
                    SocialNavItems.map((item: MenuBarItems, index: number) => (
                        <Link
                            key={item.id}
                            className="pr-4 hover:text-teal-500"
                            href={item.path}
                            target="_blank"
                        >
                            <item.icon
                                className={"h-6 w-6 md:h-5 md:w-5"}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default IntroductionSection;
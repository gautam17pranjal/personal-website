import {SocialNavItems} from "@/module/routing/lib/constants/navigation.items";
import {SocialMenuItems} from "@/module/routing/lib/model/navigation";
import Link from "next/link";
import {trackEvent} from "@/module/core/lib/service/analytics.service";

const AboutSocialSection = () => {
    return (
        <div className="lg:pl-20 mt-6">
            <div className="flex flex-col">
                {
                    SocialNavItems.map((item: SocialMenuItems) => (
                        <Link
                            key={item.id}
                            className="pr-4"
                            href={item.path}
                            target="_blank"
                            onClick={() => trackEvent("social_click", {network: item.name, location: "about"})}
                        >
                            <span className="flex flex-row items-center hover:text-teal-600 dark:hover:text-teal-500 text-md">
                                <item.icon
                                    className={"h-6 w-6 md:h-5 md:w-5 mr-4 my-3"}
                                /> Follow on {item.name}
                            </span>

                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutSocialSection;
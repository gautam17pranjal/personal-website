import {WebsiteMenuBarNavItems} from "@/module/routing/lib/constants/navigation.items";
import {MenuBarItems} from "@/module/routing/lib/model/navigation";
import Link from "next/link";
import {classNames} from "@/module/core/lib/service/util.service";
import logo from '../../../../public/images/logo.jpg';
import Image from 'next/image';
import {HomePagePath} from "@/module/routing/lib/constants/website.routes";
import ThemeToggle from "@/module/core/components/theme/ThemeToggle";

const PageHeader = ({...pageProps}) => {
    return (
        <div className="mb-10 flex flex-row justify-center md:justify-between items-center">
            <div className="hidden md:block">
                <Link href={HomePagePath} >
                    <Image
                        src={logo}
                        width={50}
                        height={50}
                        alt="Gautam Pranjal - Home"
                        className="rounded-full"
                    />
                </Link>
            </div>
            <div className="flex flex-row items-center gap-1.5 sm:gap-3">
            <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 rounded-2xl px-1 sm:px-4 py-1">
                {
                    WebsiteMenuBarNavItems.map((item: MenuBarItems) => (
                        <Link
                            key={item.id}
                            className={classNames(pageProps.pageProps.pageId === item.id ? "text-teal-600 dark:text-teal-500 font-bold hover:text-teal-600 dark:hover:text-teal-500 rounded-xl"
                                    : "text-zinc-900 dark:text-white",
                                "px-1.5 sm:px-3 py-0.5 text-sm font-medium")} href={item.path}>
                            {item.name}
                        </Link>
                    ))
                }
            </div>
            <ThemeToggle />
            </div>
        </div>
    )
}

export default PageHeader;
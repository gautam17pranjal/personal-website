import {WebsiteMenuBarNavItems, WebsiteNavItemId} from "@/module/routing/lib/constants/navigation.items";
import {MenuBarItems} from "@/module/routing/lib/model/navigation";
import Link from "next/link";
import {classNames} from "@/module/core/lib/service/util.service";
import logo from '../../../../public/images/logo.jpg';
import Image from 'next/image';
import {HomePagePath} from "@/module/routing/lib/constants/website.routes";

const PageHeader = ({...pageProps}) => {
    return (
        <div className="mb-10 flex flex-row justify-center md:justify-between items-center">
            <div className="hidden md:block">
                <Link href={HomePagePath} >
                    <Image
                        src={logo}
                        width={50}
                        height={50}
                        alt="me"
                        className="rounded-full"
                    />
                </Link>
            </div>
            <div className="border border-zinc-800 bg-zinc-800 rounded-2xl px-4 py-1">
                {
                    WebsiteMenuBarNavItems.map((item: MenuBarItems) => (
                        <Link
                            key={item.id}
                            className={classNames(pageProps.pageProps.pageId === item.id ? "text-teal-500 font-bold hover:text-teal-500 rounded-xl"
                                    : "text-white",
                                "px-3 py-0.5 text-sm font-medium")} href={item.path}>
                            {item.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default PageHeader;
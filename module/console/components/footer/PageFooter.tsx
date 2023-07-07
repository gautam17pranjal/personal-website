import {WebsiteMenuBarNavItems} from "@/module/routing/lib/constants/navigation.items";
import {MenuBarItems} from "@/module/routing/lib/model/navigation";
import Link from "next/link";

const PageFooter = () => {
    return (
        <div className="my-10 md:my-4 border-t border-gray-300 pt-10 flex flex-col md:flex-row md:justify-between items-center w-full text-sm font-medium text-white">
            <div className="flex flex-row">
                {
                    WebsiteMenuBarNavItems.map((item: MenuBarItems) => (
                        <Link key={item.id} className="px-2" href={item.path}>
                            {item.name}
                        </Link>
                    ))
                }
            </div>
            <div className="py-4">
                &#169; 2023 Gautam Pranjal. All rights reserved.
            </div>
        </div>
    )
}

export default PageFooter;

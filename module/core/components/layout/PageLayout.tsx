import PageFooter from "@/module/console/components/footer/PageFooter";
import PageHeader from "@/module/console/components/header/PageHeader";
import {WebsiteNavItemId} from "@/module/routing/lib/constants/navigation.items";

export type PageLayoutPageProps = {
    pageName: string,
    pageId: WebsiteNavItemId
}

const PageLayout = ({ children, pageProps } : { children: React.ReactNode, pageProps: PageLayoutPageProps }) => {
    return (
        <main className="flex-1 h-full flex-grow 5xl:py-6 bg-black">
            <div className="h-full mx-auto sm:px-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-[80%] 4xl:max-w-screen-xl py-4 bg-zinc-900 text-gray-400">
                <div className="mx-5 md:mx-7 lg:mx-20 pt-8">
                    <PageHeader pageProps={pageProps}/>
                    <div className="my-5">
                        {children}
                    </div>
                    <PageFooter />
                </div>
            </div>
        </main>
    )
}

PageLayout.getProperties = (pageName: string, pageId: WebsiteNavItemId) => {
    const pageProps: PageLayoutPageProps = {
        pageName: pageName,
        pageId: pageId
    }
    return pageProps;
}

export default PageLayout;
import PageFooter from "@/module/console/components/footer/PageFooter";
import PageHeader from "@/module/console/components/header/PageHeader";
import {WebsiteMenuBarNavItems, WebsiteNavItemId} from "@/module/routing/lib/constants/navigation.items";
import {SiteUrl} from "@/module/routing/lib/constants/website.routes";
import Head from "next/head";

export type PageLayoutPageProps = {
    pageName: string,
    pageId: WebsiteNavItemId
}

const PageLayout = ({ children, pageProps } : { children: React.ReactNode, pageProps: PageLayoutPageProps }) => {
    const title = `${pageProps.pageName} | Gautam Pranjal`;
    const description = "Gautam Pranjal - Full Stack Software Developer based in New Jersey.";
    const pagePath = WebsiteMenuBarNavItems.find((item) => item.id === pageProps.pageId)?.path ?? "";
    const pageUrl = `${SiteUrl}${pagePath}`;

    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={pageUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Gautam Pranjal" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={`${SiteUrl}/og-image.png`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <main className="flex-1 h-full flex-grow 5xl:py-6 bg-zinc-100 dark:bg-black">
            <div className="h-full mx-auto sm:px-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-[80%] 4xl:max-w-screen-xl py-4 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-gray-400">
                <div className="mx-5 md:mx-6 lg:mx-12 pt-8">
                    <PageHeader pageProps={pageProps}/>
                    <div className="my-5">
                        {children}
                    </div>
                    <PageFooter />
                </div>
            </div>
        </main>
        </>
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
import { ReactElement } from "react";
import { PageWithLayout } from "../_app";
import PageLayout, {PageLayoutPageProps} from "@/module/core/components/layout/PageLayout";
import IntroductionSection from "@/module/console/components/home/IntroductionSection";
import HomeHighlightsSection from "@/module/console/components/home/HomeHighlightsSection";
import {WebsiteNavItemId} from "@/module/routing/lib/constants/navigation.items";

const HomePage: PageWithLayout = () => {
    return (
        <div className="">
            <IntroductionSection />
            <HomeHighlightsSection />
        </div>
    )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
    const pageLayoutPageProps: PageLayoutPageProps = PageLayout.getProperties('Home', WebsiteNavItemId.Home);
    return (
        <PageLayout pageProps={pageLayoutPageProps}>
            {page}
        </PageLayout>
    )
}

export default HomePage;
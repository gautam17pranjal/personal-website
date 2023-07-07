import {PageWithLayout} from "@/pages/_app";
import {ReactElement} from "react";
import PageLayout, {PageLayoutPageProps} from "@/module/core/components/layout/PageLayout";
import {WebsiteNavItemId} from "@/module/routing/lib/constants/navigation.items";
import ExperienceContentSection from "@/module/console/components/experience/ExperienceContentSection";
import ExperienceHeaderSection from "@/module/console/components/experience/ExperienceHeaderSection";

const ExperiencePage: PageWithLayout = () => {
    return (
        <div className="">
            <ExperienceHeaderSection />
            <ExperienceContentSection />
        </div>
    )
}

ExperiencePage.getLayout = function getLayout(page: ReactElement) {
    const pageLayoutPageProps: PageLayoutPageProps = PageLayout.getProperties('Experience', WebsiteNavItemId.Experience);
    return (
        <PageLayout pageProps={pageLayoutPageProps}>
            {page}
        </PageLayout>
    )
}

export default ExperiencePage;
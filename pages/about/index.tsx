import {PageWithLayout} from "@/pages/_app";
import {ReactElement} from "react";
import PageLayout, {PageLayoutPageProps} from "@/module/core/components/layout/PageLayout";
import {WebsiteNavItemId} from "@/module/routing/lib/constants/navigation.items";
import AboutInfoSection from "@/module/console/components/about/AboutInfoSection";
import AboutPictureSection from "@/module/console/components/about/AboutPictureSection";
import AboutSocialSection from "@/module/console/components/about/AboutSocialSection";

const AboutPage: PageWithLayout = () => {
    return (
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <AboutPictureSection />
            <AboutInfoSection />
            <AboutSocialSection />
        </div>
    )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
    const pageLayoutPageProps: PageLayoutPageProps = PageLayout.getProperties('About', WebsiteNavItemId.About);
    return (
        <PageLayout pageProps={pageLayoutPageProps}>
            {page}
        </PageLayout>
    )
}

export default AboutPage;
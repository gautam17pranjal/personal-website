import {PageWithLayout} from "@/pages/_app";
import {ReactElement} from "react";
import PageLayout, {PageLayoutPageProps} from "@/module/core/components/layout/PageLayout";
import {WebsiteNavItemId} from "@/module/routing/lib/constants/navigation.items";
import ProjectContentSection from "@/module/console/components/projects/ProjectContentSection";

const ProjectsPage: PageWithLayout = () => {
    return (
        <div className="">
            <ProjectContentSection />
        </div>
    )
}

ProjectsPage.getLayout = function getLayout(page: ReactElement) {
    const pageLayoutPageProps: PageLayoutPageProps = PageLayout.getProperties('Projects', WebsiteNavItemId.Projects);
    return (
        <PageLayout pageProps={pageLayoutPageProps}>
            {page}
        </PageLayout>
    )
}

export default ProjectsPage;
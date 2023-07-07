import {MenuBarItems} from "@/module/routing/lib/model/navigation";
import {
    AboutPagePath,
    ExperiencePagePath,
    HomePagePath,
    ProjectPagePath
} from "@/module/routing/lib/constants/website.routes";
import {
    FacebookPath,
    GithubPath,
    InstagramPath,
    LinkedInPath,
    YoutubePath
} from "@/module/routing/lib/constants/social.routes";

import {FaInstagram, FaLinkedin} from "react-icons/fa";
import {FaGithub, FaSquareFacebook, FaYoutube} from "react-icons/fa6";

export const enum WebsiteNavItemId {
    Home,
    Projects,
    Experience,
    About
}

export const enum SocialItemsId {
    LinkedIn,
    Instagram,
    Facebook,
    Github,
    Youtube
}

export const WebsiteMenuBarNavItems: MenuBarItems[] = [
    {id: WebsiteNavItemId.Home, name: 'Home', path: HomePagePath},
    {id: WebsiteNavItemId.Projects, name: 'Projects', path: ProjectPagePath},
    {id: WebsiteNavItemId.Experience, name: 'Experience', path: ExperiencePagePath},
    {id: WebsiteNavItemId.About, name: 'About', path: AboutPagePath}
]

export const SocialNavItems: MenuBarItems[] = [
    {id: SocialItemsId.LinkedIn, name: 'LinkedIn', path: LinkedInPath, icon: FaLinkedin },
    {id: SocialItemsId.Instagram, name: 'Instagram', path: InstagramPath, icon: FaInstagram},
    {id: SocialItemsId.Facebook, name: 'Facebook', path: FacebookPath, icon: FaSquareFacebook},
    {id: SocialItemsId.Github, name: 'GitHub', path: GithubPath, icon: FaGithub},
    {id: SocialItemsId.Youtube, name: 'Youtube', path: YoutubePath, icon: FaYoutube}
]
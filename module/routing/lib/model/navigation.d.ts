import {IconType} from "react-icons";

export interface MenuBarItems {
    id: number,
    name: string,
    path: string
}

export interface SocialMenuItems extends MenuBarItems {
    icon: IconType
}

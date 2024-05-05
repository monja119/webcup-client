
import { FaUser, FaUsers,FaLaptopCode, FaAndroid } from "react-icons/fa";
import { PiShareNetworkThin } from "react-icons/pi";
import { MdForum, MdEvent,MdOutlineLogout } from "react-icons/md";
import { SlDocs } from "react-icons/sl";
import { CiSettings } from "react-icons/ci";
import { IoIosHelp } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";

export const sideBarLayout  = [
    {
        "icon": FaUsers,
        "name": "Communauté",
        "path": "/community/forum",
        "component": "Community",
        "children": {
            "Forum": {
                "icon": MdForum   ,
                "name": "Forum",
                "path": "/forum",
                "component": "Forum"
            },
            "Événements": {
                "icon": MdEvent,
                "name": "Événements",
                "path": "/events",
                "component": "Events"
            },
            "Projets": {
                "icon": FaLaptopCode,
                "name": "Projets",
                "path": "/community/projects",
                "component": "Projects"
            },
            "Ressources": {
                "icon": SlDocs,
                "name": "Ressources",
                "path": "/community/resources",
                "component": "Resources"
            },
            "Members": {
                "icon": FaUsers,
                "name": "Members",
                "path": "/community/members",
                "component": "Members",
                "onlyAdmin": true
            },
        }
    },
    {
        "icon": IoNewspaperOutline,
        "name": "Actualités",
        "path": "/news",
        "component": "News",
        "children": {
            "Actualités": {
                "icon": IoNewspaperOutline,
                "name": "Actualités",
                "path": "/news",
                "component": "News"
            },
        }
    },
];
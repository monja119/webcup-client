
import { FaUser, FaUsers,FaLaptopCode, FaAndroid } from "react-icons/fa";
import { PiShareNetworkThin } from "react-icons/pi";
import { MdForum, MdEvent,MdOutlineLogout } from "react-icons/md";
import { SlDocs } from "react-icons/sl";
import { CiSettings } from "react-icons/ci";
import { IoIosHelp } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";

export const sideBarLayout  = [
    {
        "icon": FaUser,
        "name": "Profile",
        "path": "/",
        "component": "Profile",
        "children": {
            "Mon Compte": {
                "icon": FaUser,
                "name": "Mon Compte",
                "path": "/",
                "component": "Account"
            },
            "Mentorat & Networking": {
                "icon": FaAndroid,
                "name": "Mentorat & Networking",
                "path": "/profile/mentorship",
                "component": "Mentorship"
            },
        }
    },
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
                "path": "/projects",
                "component": "Projects"
            },
            "Ressources": {
                "icon": SlDocs,
                "name": "Ressources",
                "path": "/resources",
                "component": "Resources"
            },
            "Members": {
                "icon": FaUsers,
                "name": "Members",
                "path": "/community/members",
                "component": "Members",
                "children":{}
            },
        }
    },
    {
        "icon": CiSettings,
        "name": "Paramètres",
        "path": "/settings",
        "component": "Settings",
        "children": {
            "Paramètres": {
                "icon": CiSettings,
                "name": "Paramètres",
                "path": "/settings",
                "component": "Settings"
            },
            "Aide": {
                "icon": IoIosHelp ,
                "name": "Aide",
                "path": "/settings/help",
                "component": "Help"
            },
            "Déconnexion": {
                "icon": MdOutlineLogout,
                "name": "Déconnexion",
                "path": "/settings/logout",
                "component": "Logout"
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
    }
];
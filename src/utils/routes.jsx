// Pages
import Sign from "../page/Sign/Sign"
import Home from "../page/Home"
import Forum from "../page/Forum"
import Project from "../page/Project"
import Event from "../page/Event"
import ProfileSetting from "../page/ProfileSetting"

import LogOut from "../page/settings/logOut"

// community
import ListMembers from "../page/community/members/List"

export const withLayoutRoutes = [
    { path: "/",component: <Home/>},
    { path: "/forum", component: <Forum/>},
    { path: "/project",component: <Project/>},
    { path: "/events",component: <Event/>},
    { path: "/settings",component: <ProfileSetting/>},

    // setting
    { path: "/logout",component: <LogOut/>},

    // community
    { path: "/community/members",component: <ListMembers/>},
]

export const withoutLayoutRoutes = [
    { path: "/sign",component: <Sign/>},
    { path: "/login",component: <Sign/>},
]
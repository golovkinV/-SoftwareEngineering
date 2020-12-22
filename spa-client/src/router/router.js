import Vue from "vue";
import Router from "vue-router";
import Tutorials from "../components/Tutorials";
import SignIn from "../components/SignIn";
import SignUp from "@/components/SignUp";
import Profile from "@/components/Profile";
import EditPassword from "@/components/EditPassword";
import EditProfile from "@/components/EditProfile";
import EditPin from "@/components/EditPin";
import Users from "@/components/Users";
import Events from "@/components/Events";
import AddEvent from "@/components/AddEvent";
import EventDetail from "@/components/EventDetail";
import AddDocument from "@/components/AddDocument";
import Documents from "@/components/Documents";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/tutorials",
            name: "tutorials",
            component: Tutorials
        },
        {
            path: "/sign_in",
            component: SignIn
        },
        {
            path: "/sign_up",
            component: SignUp
        },
        {
            path: "/profile/:id",
            component: Profile
        },
        {
            path: "/profile/edit_password/:id",
            component: EditPassword
        },
        {
            path: "/profile/edit_profile/:id",
            component: EditProfile
        },
        {
            path: "/profile/edit_pin/:id",
            component: EditPin
        },
        {
            path: "/users",
            component: Users
        },
        {
            path: "/events",
            component: Events
        },
        {
            path: "/events/add",
            component: AddEvent
        },
        {
            path: "/events/:id",
            component: EventDetail
        },
        {
            path: "/documents/add",
            component: AddDocument
        },
        {
            path: "/documents",
            component: Documents
        }
    ]
});
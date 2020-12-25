import Vue from "vue";
import Router from "vue-router";
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
import DocumentDetail from "@/components/DocumentDetail";
import EventDocuments from "@/components/EventDocuments";
import Home from "@/components/Home";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
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
            name: "profile",
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
        },
        {
            path: "/documents/:id",
            component: DocumentDetail
        },
        {
            path: "/events/:id/docs",
            component: EventDocuments
        },
        {
            path: "/home",
            component: Home
        }
    ]
});
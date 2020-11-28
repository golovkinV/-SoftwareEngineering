import Vue from "vue";
import Router from "vue-router";
import Tutorials from "../components/Tutorials";
import SignIn from "../components/SignIn";

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
        }
    ]
});
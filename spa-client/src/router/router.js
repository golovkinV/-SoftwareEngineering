import Vue from "vue";
import Router from "vue-router";
import Tutorials from "@/components/Tutorials";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/tutorials",
            name: "tutorials",
            component: Tutorials
        }
    ]
});
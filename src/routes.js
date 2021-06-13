const routes = [
    {
        path: "/",
        name: "MainPage",
        component: () => import("./pages/MainPage") 
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("./pages/LoginPage") 
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("./pages/RegisterPage") 
    },
    {
        path: "/search",
        name: "Search Page",
        component: () => import("./pages/SearchPage") 
    },
    {
        path: "/player/page:id",
        name: "player Page",
        component: () => import("./pages/PlayerPage") 
    },
    {
        path: "/team/page:id",
        name: "team Page",
        component: () => import("./pages/TeamPage") 
    },
    {
        path: "/currentFixture",
        name: "Current Fixture Page",
        component: () => import("./pages/CurrentFixturePage") 
    },
    {
        path: "/leagueManagement",
        name: "League Management Page",
        component: () => import("./pages/LeagueManagementPage") 
    },
    {
        path: "/about",
        name: "About",
        component: () => import("./pages/AboutPage") 
    },
    {
        path: "*",
        name: "Not Found Page",
        component: () => import("./pages/NotFoundPage") 
    }
]

export default routes;
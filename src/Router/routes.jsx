import Login from "../Pages/Login";
import Home from "../Pages/Home";

const routes = [
    {
        title: "ورود",
        path: "login",
        component: <Login />,
        // guard: false,
        index: true
    },
    {
        title: "خانه",
        path: "home",
        component: <Home />,
        // guard: false,
        index: false
    },
];

export default routes;
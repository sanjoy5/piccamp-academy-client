import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Instructors from "../pages/Instructors";
import Classes from "../pages/Classes";
import Signup from "../pages/Signup";
import Success from "../pages/Success";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import ManageUsers from "../pages/ManageUsers";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/instructors",
                element: <Instructors />,
            },
            {
                path: "/classes",
                element: <Classes />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>
            }
        ]
    },
    {
        path: "/success",
        element: <Success />
    },
]);

export default router
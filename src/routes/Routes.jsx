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
import AddClasses from "../pages/AddClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../pages/MyClasses";
import ManageClasses from "../pages/ManageClasses";
import UpdateClasses from "../pages/UpdateClasses";



const router = createBrowserRouter([

    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://127.0.0.1:5000/popularclasses')
            },
            {
                path: "/instructors",
                element: <Instructors />,
                loader: () => fetch('http://127.0.0.1:5000/instructors')
            },
            {
                path: "/classes",
                element: <Classes />,
                loader: () => fetch('http://127.0.0.1:5000/classes')
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
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'manageclasses',
                element: <AdminRoute> <ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'addclass',
                element: <InstructorRoute> <AddClasses></AddClasses></InstructorRoute>
            },
            {
                path: 'myclasses',
                element: <InstructorRoute> <MyClasses></MyClasses></InstructorRoute>
            },
            {
                path: 'updateclasses/:id',
                element: <InstructorRoute> <UpdateClasses></UpdateClasses></InstructorRoute>,
                loader: ({ params }) => fetch(`http://127.0.0.1:5000/updateclasses/${params.id}`)
            },

        ]
    },
    {
        path: "/success",
        element: <Success />
    },
]);

export default router
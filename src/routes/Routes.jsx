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
import SelectedClasses from "../pages/SelectedClasses";
import StudentRoute from "./StudentRoute";
import Payment from "../pages/Payment";
import ErrorPage from "../pages/ErrorPage";
import EnrolledClasss from "../pages/EnrolledClasss";
import PaymentHistory from "../pages/PaymentHistory";



const router = createBrowserRouter([

    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('https://pic-camp-academy-server.vercel.app/popularclasses')
            },
            {
                path: "/instructors",
                element: <Instructors />,
                loader: () => fetch('https://pic-camp-academy-server.vercel.app/instructors')
            },
            {
                path: "/classes",
                element: <Classes />
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
                loader: ({ params }) => fetch(`https://pic-camp-academy-server.vercel.app/updateclasses/${params.id}`)
            },
            {
                path: 'selectedclasses',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'enrolled',
                element: <EnrolledClasss></EnrolledClasss>
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            },

        ]
    },
    {
        path: "/success",
        element: <Success />
    },
    {
        path: "*",
        element: <ErrorPage />
    },
]);

export default router
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./components/core/layouts/RootLayout.tsx";
import Externals from "./components/core/layouts/Externals.tsx";

const PublicPage = React.lazy(() => import('./components/Public/PublicPage.tsx'));
const CountButton = React.lazy(() => import("remoteAppOne/CountButton"));
const Dashboard = React.lazy(() => import("dashboard/Dashboard"))
const DashboardGraph = React.lazy(() => import("dashboard/DashboardGraph"))
const Contact = React.lazy(() => import("contact/Contact"));
const ContactDetails = React.lazy(() => import("contact/ContactDetails"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Externals><PublicPage/></Externals>,
            },
            {
                path: "/dashboard",
                element: <Externals><Dashboard/></Externals>,
            },
            {
                path: "/dashboard/graph",
                element: <Externals><DashboardGraph/></Externals>,
            },
            {
                path: "/contact",
                element: <Externals><Contact/></Externals>,
            },
            {
                path: "/contact/:id",
                element: <Externals><ContactDetails/></Externals>,
            },
            {
                path: "/button",
                element: <Externals><CountButton/></Externals>,
            },
            {
                path: "/*",
                element: <p>No Page Found!!</p>,
            }
        ],
    },


]);

function App() {

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App

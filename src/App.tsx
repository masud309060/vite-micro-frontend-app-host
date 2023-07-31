import React from "react";
import {lazily} from "react-lazily";
import RootLayout from "./components/core/layouts/RootLayout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Externals from "./components/core/layouts/Externals.tsx";

const PublicPage = React.lazy(() => import('./components/Public/PublicPage.tsx'));

const {CountButton} = lazily(() => import("remoteAppOne/CountButton"));
const {Dashboard} = lazily(() => import("dashboard/Dashboard"));
const {Contact} = lazily(() => import("contact/Contact"));

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
                path: "/contact",
                element: <Externals><Contact/></Externals>,
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

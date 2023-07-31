import React, {Suspense} from "react";
import RootLayout from "./components/layouts/RootLayout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PublicPage from "./components/Public/PublicPage.tsx";


const CountButton = React.lazy(() => import('remoteAppOne/CountButton'));
// @ts-ignore
const Dashboard = React.lazy(() => import('dashboard/Dashboard'));
// @ts-ignore
const Contact = React.lazy(() => import('contact/Contact'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Suspense fallback={"Loading..."}><PublicPage/></Suspense>,
            },
            {
                path: "/dashboard",
                element: <Suspense fallback={"Loading..."}><Dashboard/></Suspense>,
            },
            {
                path: "/contact",
                element: <Suspense fallback={"Loading..."}><Contact/></Suspense>,
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

            <CountButton />
        </>
    )
}

export default App

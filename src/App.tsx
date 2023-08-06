import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createTheme, CssBaseline, Paper, ThemeProvider} from "@mui/material";
import RootLayout from "./components/core/layouts/RootLayout.tsx";
import Externals from "./components/core/layouts/Externals.tsx";
import {setCookie} from "./helpers/Cookie.ts";

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

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

function App() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    console.log(import.meta.env.VITE_PRODUCTION_MODE) // 123


    if (import.meta.env.VITE_PRODUCTION_MODE !== "true") {
        // TODO set api access token in cookie for tests
        const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
        if (!accessToken) throw Error("Access token not found in env!");
        setCookie(accessToken, "QW4RFEW1G1HRE1HH1E", import.meta.env.VITE_ACCESS_TOKEN_VALIDITY || "1 hour");
    }


    return (
        <>
            <CssBaseline />
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <Paper elevation={0} sx={{ bgcolor: 'background.default'}}>
                        <RouterProvider router={router}/>
                    </Paper>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    )
}

export default App

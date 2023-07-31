import React from 'react';
import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from "../Navbar.tsx";

const RootLayout: React.FC = () => {
    return (
        <Box>
            <Navbar/>
            <Box sx={{border: "2px solid #ddd", p: 2}}>
                <Outlet/>
            </Box>
        </Box>
    );
};

export default RootLayout;
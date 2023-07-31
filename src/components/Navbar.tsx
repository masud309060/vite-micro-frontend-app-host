import React from 'react';
import {AppBar, Avatar, Box, Button, Container, IconButton, Toolbar, Tooltip, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Adb} from "@mui/icons-material";

const pages = [
    {
        label: "Home",
        path: "/",
    }, {
        label: "Dashboard",
        path: "/dashboard",
    }, {
        label: "Contact",
        path: "/contact",
    },
    {
        label: "Remote App",
        path: "/remote/app"
    }
]

const Navbar: React.FC = () => {


    // return (
    //     <Stack direction={"row"} spacing={2}>
    //         {
    //             pages.map((page, i) => (
    //                 <Link key={page.label + i} to={page.path}>
    //                     <Button variant="text">{page.label}</Button>
    //                 </Link>
    //             ))
    //         }
    //     </Stack>
    // );

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Adb sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page, i) => (
                            <Link key={page.label + i} to={page.path}>
                                <Button sx={{my: 2, color: 'white', display: 'block'}}>
                                    {page.label}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
};

export default Navbar;
import React from "react";
import {Link} from "react-router-dom";
import {useErrorBoundary} from "react-error-boundary";
import {Box, Button, Container, Typography} from "@mui/material";

interface IProps {
    error?: {
        message?: string
    }
}
const PageNotFoundFallback: React.FC<IProps> = ({error}) => {
    const { resetBoundary } = useErrorBoundary();

    return (
        <Container maxWidth={"md"}>
            <Box sx={{textAlign: "center"}}>
                <Typography variant={"h3"}>Error Happen!!</Typography>
                <Typography color={"error.main"}>{error?.message}</Typography>

                <Button variant={"contained"} onClick={resetBoundary} sx={{mr: 2}}>Try again</Button>
                <Link to={"/"}>
                    <Button variant={"contained"} color={"secondary"} onClick={resetBoundary}>Go Home</Button>
                </Link>
            </Box>
        </Container>
    );
};

export default PageNotFoundFallback;